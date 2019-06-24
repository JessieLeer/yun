<template>
  <div class='inner-main'>
	  <mt-button icon="back" class='back f-tac' v-on:click='back'></mt-button>
	  <mt-swipe :auto="4000">
			<mt-swipe-item v-for='(item,index) in banners' v-bind:key='index' >
			  <img v-bind:src='item.image' width='100%' v-on:click='go(item.url)' class='banner' ref='banner0'>
			</mt-swipe-item>
		</mt-swipe>
		<div class='good-info'>
		  <div class='pl-10 pr-10'>
				<b class='price'>{{good.price}}</b>
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
					<dd class='f-ib'>{{good.spbh}}</dd>
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
			</mt-tab-container-item>
		</mt-tab-container>
		<footer class='footer'>
		  <section class='shopcar f-pr f-tac' v-on:click='go("/shopcar")'>
		    <i class='iconfont icon-shopcar'>&#xe605;</i>
				<i class='shopcar-num f-fsn' v-if='shopcar.length > 0'>{{shopcar.length}}</i>
			</section>
			<mt-button type="danger" size='small' class='add' v-on:click='edit(good)'><i class='addicon iconfont'>&#xe658;</i>加入购物车</mt-button>
		</footer>
		<mt-popup v-model="popupVisible" position="bottom" v-bind:closeOnClickModal='false' class='popup'>
			<div class='pop-wrapper f-fs2'>
				<mt-cell class='good-cell' v-bind:value="'核算价:' + selected.dbdj">
				  <h4 slot='title' class='medicine-name'>{{selected.name}}</h4>
				</mt-cell>
				<section class='bread'>
				  <dl class='f-ib'>
						<dt class='f-ib'>库存：</dt>
						<dd class='f-ib'>{{selected.stock}}</dd>
					</dl>
					<dl class='f-ib'>
						<dt class='f-ib'>已选：</dt>
						<dd class='f-ib'>{{totalCount}}件</dd>
					</dl>
					<dl class='color-E43A3D f-fwb f-ib f-tar'>
						<dt class='f-ib'>小计：</dt>
						<dd class='f-ib'>¥{{totalPrice}}</dd>
					</dl>
				</section>
				<mt-field class='price-input shopcar-cell' v-bind:placeholder="pricePlaceholder" v-model='editingPrice' type='number' v-bind:min='0' v-if='user.customerType == 3' v-bind:disabled='selectedLot.pihao ? false : true'>
				  <mt-button size="small" class='sure' v-bind:disabled='priceUnsubable' v-on:click='changePrice'>确定</mt-button>
				</mt-field>
				<div class='lotnum-area'>
					<mt-cell class='shopcar-cell' v-for='(item,index) in selected.lotnums' v-bind:key='index'>
						<div slot='title' class='lotnum-wrapper'>
							<mt-button  size='small' class='lotnum' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>
								<i class='f-fl f-fsn'>{{item.pihao}}</i> 
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
			<br>
			<footer class='btn-wrapper'>
				<mt-button type="default" size='small' class='pop-btn' v-on:click='closePop'>取消</mt-button>
        <mt-button type="danger" size='small' v-on:click='shopcarAdd' class='pop-btn pop-btn-sure'>确定</mt-button>
		  </footer>
		</mt-popup>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>