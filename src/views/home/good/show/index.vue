<template>
  <div class='inner-main'>
	  <mt-button icon="back" class='back f-tac' v-on:click='back'></mt-button>
	  <img v-bind:src='good.photos' width='100%' class='banner' ref='banner0'>
		<div class='good-info'>
		  <div class='pl-10 pr-10'>
				<b class='price'>{{good.lowest}} <span v-if='good.highest'>~ {{good.highest}}</span></b>
				<h3 class='name f-fs2'>{{good.name}}</h3>
				<mt-badge size="small" class='formation f-fs1' color='#fff'>{{good.chpgg}}</mt-badge>
				<mt-badge size="small" class='formation f-fs1' color='#fff'>{{good.jx}}</mt-badge>
			</div>
			<br>
			<div class='store-area pl-10 pr-10'>
				<section class='store-wrapper'>
					<dl class='mr-20 f-ib f-fs2'>
						<dt class='color-grey f-ib'>库存：</dt>
						<dd class='f-ib'>{{good.stock}}</dd>
					</dl>
					<dl class='f-ib f-fs2'>
						<dt class='color-grey f-ib'>件装数量：</dt>
						<dd class='f-ib'>{{good.bagShl}}</dd>
					</dl>
				</section>
			</div>
		</div>
		<mt-navbar v-model="activited" class='tab-nav'>
			<mt-tab-item id="1">商品详情</mt-tab-item>
			<mt-tab-item id="2">规格参数</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="activited" class='good-wrapper f-fs2'>
			<mt-tab-container-item id="1">
				<dl class='good-detail'>
				  <dt class='f-ib'>生产厂家：</dt>
					<dd class='f-ib'>{{good.shchchj}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>商品名：</dt>
					<dd class='f-ib'>{{good.name}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>商品编号：</dt>
					<dd class='f-ib'>{{good.code}}</dd>
				</dl> 
				<dl class='good-detail'>
				  <dt class='f-ib'>经营范围：</dt>
					<dd class='f-ib'>{{good.jyfw}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>处方分类：</dt>
					<dd class='f-ib'>{{good.chuffl}}</dd>
				</dl>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<dl class='good-detail'>
				  <dt class='f-ib'>件装数量：</dt>
					<dd class='f-ib'>{{good.bagShl}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>产品规格：</dt>
					<dd class='f-ib'>{{good.chpgg}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>剂型：</dt>
					<dd class='f-ib'>{{good.jx}}</dd>
				</dl>
				<dl class='good-detail'>
				  <dt class='f-ib'>产品单位：</dt>
					<dd class='f-ib'>{{good.chpdw}}</dd>
				</dl>
			</mt-tab-container-item>
		</mt-tab-container>
		<footer class='footer'>
		  <section class='shopcar f-pr f-tac' v-on:click='go("/shopcar")'>
		    <i class='iconfont icon-shopcar'>&#xe605;</i>
				<i class='shopcar-num f-fsn' v-if='shopcar.length > 0'>{{shopcar.length}}</i>
			</section>
			<mt-button type="danger" size='small' class='add' v-on:click='showCus'><i class='addicon iconfont'>&#xe658;</i>加入购物车</mt-button>
		</footer>
		<ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected'></ccustomer>
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>