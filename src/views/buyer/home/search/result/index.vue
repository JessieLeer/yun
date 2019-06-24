<template>
  <div class='inner-main'>
	  <mt-header title="商品搜索" fixed class='header'>
			<mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<mt-search v-model="search.name" class='search' cancel-text="取消" placeholder="商品名称/助记码"></mt-search>
		<div class='condition-wrapper'>
			<section class='condition f-fl f-tac' v-on:click='filterVisible0 = true'>
				<mt-button size='small' v-bind:class='search.type != "全部商品" ? "color-e43a3d" : ""' class='f-fs1'>
				  {{search.type}}
				  <img src='../../../../../assets/image/dri.png' v-if='search.type == "全部商品"' class='triangle'>
					<img src='../../../../../assets/image/dri_cur.png' v-else class='triangle'>
				</mt-button>
			</section>
			<section class='condition f-fl f-tac'>
				<mt-button size='small' v-bind:class='search.store500Up == true ? "color-e43a3d" : ""' class='f-fs1' v-on:click='search.store500Up = !search.store500Up'>库存>500</mt-button>
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
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
			  <div v-for='(item,index) in goods' v-bind:key='index' class='mt-10'>
					<div class='order-wrapper'>
						<section class='order-image' v-on:click='go("/good/show1")'>
							<img v-bind:src='item.image' width='120' class='f-fl'>
						</section>
						<section class='order-info'>
							<h4 class='order-title f-fs2' v-on:click='go("/good/show1")'>{{item.name}}</h4>
							<p class='order-bread f-fs1'>{{item.specification}}</p>
							<dl class='mr-10 f-fs1 f-ib'>
							  <dt class='color-grey'>库存</dt>
								<dd class=''>{{item.store}}</dd>
							</dl>
							<dl class='ml-20 f-fs1 f-ib'>
							  <dt class='color-grey'>失效日期</dt>
								<dd class=''>{{item.deadline}}</dd>
							</dl>
							<p class='order-bread f-fs1'>
							  <img src='../../../../../assets/image/factory.png' width='14' class='factory'>{{item.company}}
							</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click='edit(item)'>修改数量价格<i class='add f-fsn'>+</i></p>
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
				v-on:change='filterVisible0 = false'
				:options="['全部商品', '新品上架', '促销商品']">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible2" position="bottom" class='popup0'>
		  <mt-radio
				title=""
				v-model="search.formulation"
				align='right'
				v-on:change='filterVisible2 = false'
				:options="['全部剂型', '片剂', '胶囊剂', '液体剂']">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible3" position="right" class='popup1'>
		  <header class='factory-header f-tac f-pr'>筛选厂家
			  <i class='iconfont close' v-on:click='filterVisible3 = false'>&#xe610;</i>
			</header>
			<!--<mt-button size='large' class='all-btn f-fs2' v-on:click='manuAll'>全部</mt-button>-->
		  <mt-checklist
			  align='right'
				v-model="search.manufacturers"
				v-bind:options="manufacturers">
			</mt-checklist>
			<footer class='manu-opera'>
			  <mt-button size="small" type='danger' class='manu-btn' v-on:click='filterVisible3 = false'>确定</mt-button>
			</footer>
		</mt-popup>
		<nav class='portnav' ref='portnav'>
			<router-link to='/user1/index'>
			  <i class='iconfont'>&#xe634;</i>
			</router-link>
			<router-link to='/shopcar1' class='f-pr'>
			  <i class='iconfont' style='border-right: none'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
		<mt-popup v-model="popupVisible" position="bottom" v-bind:closeOnClickModal='false' class='popup'>
			<div class='pop-wrapper f-fs2'>
				<mt-cell class='good-cell' v-bind:value="'核算价:' + selected.accounting">
				  <h4 slot='title' class='medicine-name'>{{selected.name}}</h4>
				</mt-cell>
				<section class='bread'>
				  <dl class='f-ib'>
						<dt class='f-ib'>库存：</dt>
						<dd class='f-ib'>{{selected.store}}</dd>
					</dl>
					<dl class='f-ib'>
						<dt class='f-ib'>已选：</dt>
						<dd class='f-ib'>{{totalCount}}件</dd>
					</dl>
					<dl class='color-E43A3D f-fwb f-ib f-tar'>
						<dt class='f-ib'>小计：</dt>
						<dd class='f-ib'>¥{{totalPrice }}</dd>
					</dl>
				</section>
				<div class='lotnum-area'>
					<mt-cell class='shopcar-cell' v-for='(item,index) in selected.lotnums' v-bind:key='index'>
						<div slot='title' class='lotnum-wrapper'>
							<mt-button  size='small' class='lotnum' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>
								<i class='f-fl f-fsn'>{{item.id}}</i> 
								<i class='f-fr f-fsn'>¥{{item.price}}</i>
							</mt-button>
							<section class='count-wrapper f-tar'>
								<mt-button size='small' class='count-opera' v-bind:disabled='item.count == "0" ? true : false' v-on:click='indec(item,-5)'>-</mt-button>
								<input type='text' v-model='item.count' class='count-count f-tac f-ib' v-on:change='countInput(item)'>
								<mt-button size='small' class='count-opera' v-bind:disabled='item.count == item.store ? true : false' v-on:click='indec(item,5)'>+</mt-button>
							</section>
						</div>
					</mt-cell>
				</div>
			</div>
			<hr color='#fff' size='1' class='hr'>
			<footer class='btn-wrapper'>
				<mt-button type="default" size='small' class='pop-btn' v-on:click='closePop'>取消</mt-button>
        <mt-button type="danger" size='small' class='pop-btn pop-btn-sure'>确定</mt-button>
		  </footer>
		</mt-popup>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>