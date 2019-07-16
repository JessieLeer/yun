<template>
  <div class='inner-main'>
	  <mt-header title="商品搜索" fixed class='header' style='z-index: 10'>
			<mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<form>
		  <mt-search v-model="search.name" class='search' cancel-text="取消" placeholder="商品名称/助记码" @keyup.native.enter="searcher"></mt-search>
		</form>
		<div class='search-result-wrapper'>
		  <mt-cell v-for="(item,index) in search.result" v-bind:key='index' v-bind:title="item.productName" is-link v-bind:to='`/good/show/${item.id}`'></mt-cell>
		</div>
		<div class='condition-wrapper'>
			<section class='condition f-fl f-tac' v-on:click='filterVisible0 = true'>
				<mt-button size='small' v-bind:class='search.type != "全部商品" ? "color-e43a3d" : ""' class='f-fs1'>
				  {{search.type}}
				  <img src='../../../../../assets/image/dri.png' v-if='search.type == "全部商品"' class='triangle'>
					<img src='../../../../../assets/image/dri_cur.png' v-else class='triangle'>
				</mt-button>
			</section>
			<section class='condition f-fl f-tac'>
				<mt-button size='small' v-bind:class='search.store != "全部库存" ? "color-e43a3d" : ""' class='f-fs1' v-on:click='filterVisible1 = true'>
				  {{search.store == '全部库存' ? search.store : `>${search.store}`}}
				  <img src='../../../../../assets/image/dri.png' v-if='search.store == "全部库存"' class='triangle'>
					<img src='../../../../../assets/image/dri_cur.png' v-else class='triangle'>
				</mt-button>
			</section>
			<section class='condition f-fl f-tac' v-on:click='filterVisible2 = true'>
				<mt-button size='small' v-bind:class='search.formulation != "全部剂型" ? "color-e43a3d" : ""' class='f-fs1'>
				  {{search.formulation}}
				  <img src='../../../../../assets/image/dri.png' v-if='search.formulation == "全部剂型"' class='triangle'>
					<img src='../../../../../assets/image/dri_cur.png' v-else class='triangle'>
				</mt-button>
			</section>
			<section class='condition f-fl f-tac' v-on:click='filterVisible3 = true'>
				<mt-button size='small' v-bind:class='manuSelected != "全部厂家" ? "color-e43a3d" : ""' class='f-fs1'>
				  {{manuSelected}}
				  <img src='../../../../../assets/image/dri.png' v-if='manuSelected == "全部厂家"' class='triangle'>
					<img src='../../../../../assets/image/dri_cur.png' v-else class='triangle'>
				</mt-button>
			</section>
		</div>
		<section class='nogood f-tac' v-if='goods.length == 0'>
		  <img src='../../../../../assets/image/nogood.png'>
			<br><br>
			<p>未找到商品</P>
		</section>
		<div ref="wrapper" class='wrapper'>
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
			  <div v-for='(item,index) in goods' v-bind:key='index' class='mt-10'>
					<div class='order-wrapper' v-on:click='go(`/good/show/${item.id}`)'>
						<section class='order-image'>
							<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='100' class='f-fl'>
						</section>
						<section class='order-info'>
							<h4 class='order-title f-fs2'>{{item.name}}</h4>
							<p class='order-bread mb-6 f-fs1'>{{item.chpgg}}</p>
							<p class='order-bread f-fs1'>{{item.shchchj}}</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click.prevent.stop='edit(item.id)'><i class='add f-fsn'>+</i></p>
						</section>
					</div>
				</div>	
			</mt-loadmore>
		</div>
		<mt-popup v-model="filterVisible0" position="bottom" class='popup0'>
		  <mt-radio
				title=""
				v-model="search.type"
				align='right'
				v-on:change='goodFilter(0)'
				:options="['全部商品', '促销商品']">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible1" position="bottom" class='popup0'>
		  <mt-radio
				title=""
				v-model="search.store"
				align='right'
				v-on:change='goodFilter(1)'
				:options="stores">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible2" position="bottom" class='popup0'>
		  <mt-radio
				title=""
				v-model="search.formulation"
				align='right'
				v-on:change='goodFilter(2)'
				:options="formulations">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible3" position="right" class='popup1'>
		  <header class='factory-header f-tac f-pr'>筛选厂家
			  <i class='iconfont close' v-on:click='filterVisible3 = false'>&#xe610;</i>
			</header>
			<div v-on:click='manuAll'>
			  <mt-cell title='全部厂家' class='manu-all'></mt-cell>
			</div>
		  <mt-checklist
			  align='right'
 				v-model="search.manufacturers"
				v-bind:options="manufacturers">
			</mt-checklist>
			<footer class='manu-opera'>
			  <mt-button size="small" type='danger' class='manu-btn' v-on:click='goodFilter(3)'>确定</mt-button>
			</footer>
		</mt-popup>
		
		<ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected'></ccustomer>
		
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
		
		<cportnav></cportnav>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>