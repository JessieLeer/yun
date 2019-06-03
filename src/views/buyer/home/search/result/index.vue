<template>
  <div class='inner-main'>
	  <mt-header title="商品搜索" fixed class='header'>
			<mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<mt-search v-model="search.name" class='search' cancel-text="取消" placeholder="商品名称/助记码"></mt-search>
		<div class='condition-wrapper'>
			<section class='condition f-fl f-tac' v-on:click='filterVisible0 = true'>
				<mt-button size='small'>{{search.type}}<i class='iconfont'>&#xe632;</i></mt-button>
			</section>
			<section class='condition f-fl f-tac'>
				<mt-button size='small'>{{search.store}}<i class='iconfont'>&#xe632;</i></mt-button>
			</section>
			<section class='condition f-fl f-tac' v-on:click='filterVisible2 = true'>
				<mt-button size='small'>{{search.formulation}}<i class='iconfont'>&#xe632;</i></mt-button>
			</section>
			<section class='condition f-fl f-tac' v-on:click='filterVisible3 = true'>
				<mt-button size='small'>{{manuSelected}}<i class='iconfont'>&#xe632;</i></mt-button>
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
							<dl class='f-fs1 f-ib'>
							  <dt class='color-grey f-ib'>库存</dt>
								<dd class='f-ib'>{{item.store}}</dd>
							</dl>
							<dl class='ml-20 f-fs1 f-ib'>
							  <dt class='color-grey f-ib'>失效日期</dt>
								<dd class='f-ib'>{{item.deadline}}</dd>
							</dl>
							<p class='order-bread f-fs1'>{{item.company}}</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click='edit(item)'>修改数量价格<i class='add f-fsn'>+</i></p>
						</section>
					</div>
				</div>	
			</mt-loadmore>
		</div>
		<mt-popup v-model="filterVisible0" position="bottom" class='popup'>
		  <mt-radio
				title=""
				v-model="search.type"
				align='right'
				v-on:change='filterVisible0 = false'
				:options="['全部商品', '新品上架', '促销商品']">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible2" position="bottom" class='popup'>
		  <mt-radio
				title=""
				v-model="search.formulation"
				align='right'
				v-on:change='filterVisible2 = false'
				:options="['片剂', '胶囊剂', '液体剂']">
			</mt-radio>
		</mt-popup>
		<mt-popup v-model="filterVisible3" position="bottom" class='popup'>
		  <mt-checklist
			  align='right'
				v-model="search.manufacturers"
				v-bind:options="manufacturers">
			</mt-checklist>
			<footer class='manu-opera'>
			  <mt-button size="small" class='manu-btn f-fl' v-on:click='manuAll'>全部</mt-button>
			  <mt-button size="small" type='danger' class='manu-btn f-fl' v-on:click='filterVisible3 = false'>确定</mt-button>
			</footer>
		</mt-popup>
		<nav class='portnav'>
			<router-link to='/user1/index'>
			  <i class='iconfont'>&#xe634;</i>
			</router-link>
			<router-link to='/shopcar1' class='f-pr'>
			  <i class='iconfont' style='border-right: none'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
		<mt-popup v-model="popupVisible" position="bottom">
			<div class='pop-wrapper f-fs2'>
			  <header class='pop-header'>{{selected.name}}</header>
				<dl class='mr-30 f-ib'>
				  <dt class='f-ib'>库存：</dt>
					<dd class='f-ib'>{{selected.store}}</dd>
				</dl>
				<dl class='f-ib'>
				  <dt class='f-ib'>核算价：</dt>
					<dd class='f-ib'>{{selected.accounting}}</dd>
				</dl>
				<p class='color-7a7a7a mt-6 mb-6'>选择批号</p>
				<i class='lotnum f-csp f-fsn' v-for='(item,index) in selected.lotnums' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>{{item}}</i>
				<mt-field label="采购数量：" placeholder='请输入采购数量' v-model="selected.count" class='mt-10' type='number' v-bind:state='selected.count == "" ? "warning" : "success"'></mt-field>
				<mt-field label="销售价格：" placeholder='请输入销售价格' v-model="selected.price" type='number' v-bind:state='selected.price == "" ? "warning" : "success"'></mt-field>
				<mt-cell v-bind:value="'小计：¥' + Math.ceil(selected.count*selected.price)">
				</mt-cell>
				<section class='btn-wrapper'>
				  <mt-button type="default" size='small' class='pop-btn' v-on:click='popupVisible = false'>取消</mt-button>
          <mt-button type="danger" size='small' class='pop-btn pop-btn-sure'>确定</mt-button>
				</section>
			</div>
		</mt-popup>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>