<template>
  <div class='inner-main'>
	  <header class='header'>
		  <mt-cell class='search f-csp'>
			  <section slot='title' v-on:click='go("/good/search")'>
				  <i class='iconfont mr-10'>&#xe639;</i>
			 	  搜索商品名称/商品编号/助记码
				</section>
			</mt-cell>
			<router-link slot='right' to='/good/cate' class='cate f-tac'>
				<img src='../../../assets/image/cater.png' width='16'><br>
				<i class='f-fsn f-fs1'>分类</i>
			</router-link>
		</header>
		<!--<mt-cell v-bind:title="shop.name" to='/company' class='shop-name bg-grey' is-link>-->
		</mt-cell>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='(item,index) in banners' v-bind:key='index' >
			  <img v-bind:src='item.image' width='100%' v-on:click='go(item.url)' class='banner' ref='banner0'>
			</mt-swipe-item>
		</mt-swipe>
		<section class='notice'>
		  <i class='notice-index f-fsn'>通知公告：</i>
			<vue-seamless-scroll v-bind:data="notices" class='seamless-warp' v-bind:class-option="classOption">
			  <router-link v-for='(item,index) in notices' v-bind:key='index' to='/' class='notice-item f-db'>
				  {{item.title.substr(0,18)}}... 
				</router-link>
			</vue-seamless-scroll>
		</section>
		<mt-navbar class='tab-nav' v-model="current">
			<mt-tab-item id="1" class='f-fs3 f-fwb'>首页</mt-tab-item>
			<mt-tab-item id="2" class='f-fs3 f-fwb'>商品</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="current">
			<mt-tab-container-item id="1">
			  <!--<section class='active f-tac'>
				  <img src='../../../assets/image/active.gif' width='80%'>
				</section>-->
				<div v-for='(item,index) in regulars' v-bind:key='index' class='mt-10'>
					<div class='order-wrapper' v-on:click='go("/good/show/" + item.productId)'>
						<section class='order-image'>
							<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='110' class='f-fl'>
						</section>
						<section class='order-info'>
							<h4 class='order-title f-fs2'>{{item.name}}</h4>
							<p class='order-bread mb-6 f-fs1'>{{item.chpgg}}</p>
							<p class='order-bread f-fs1'>
								<img src='../../../assets/image/factory.png' width='14' class='factory'>
								{{item.shchchj}}
							</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click.stop.prevent='edit(item.productId)'>销售{{item.sales}}<i class='add f-fsn'>+</i></p>
						</section>
					</div>
				</div>	
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
			  <header class='good-header'>
				  <dl class='count'>
					  <dt class='f-ib'>商品数：</dt>
						<dd class='f-ib'>{{good.total}}</dd>
					</dl>
					<section class='good-condis f-tar'>
					  <mt-button size="small" class='good-condi' v-bind:class='good.filter == "推荐" ? "good-cur" : "good-def"' v-on:click='changeFilter("推荐")'>推荐</mt-button>
						<mt-button size="small" class='good-condi' v-bind:class='good.filter == "新品" ? "good-cur" : "good-def"' v-on:click='changeFilter("新品")'>新品</mt-button>
						<mt-button size="small" class='good-condi pr-20 f-pr' v-bind:class='good.filter == "销量" ? "good-cur" : "good-def"' v-on:click='changeFilter("销量")'>销量
						  <img src='../../../assets/image/salevol.png' width='20' v-if='good.filter != "销量"' class='salevol'>
							<img src='../../../assets/image/salevol_cur.png' width='20' v-if='good.filter == "销量"' class='salevol'>
						</mt-button>
					</section>
				</header>
				<div ref="wrapper">
					<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
					  <div v-for='(item,index) in good.data' v-bind:key='index' class='mt-10'>
							<div class='order-wrapper' v-on:click='go("/good/show/" + item.productId)'>
								<section class='order-image'>
									<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='110' class='f-fl'>
								</section>
								<section class='order-info'>
									<h4 class='order-title f-fs2'>{{item.name}}</h4>
									<p class='order-bread mb-6 f-fs1'>{{item.chpgg}}</p>
									<p class='order-bread f-fs1'>
										<img src='../../../assets/image/factory.png' width='14' class='factory'>
										{{item.shchchj}}
									</p>
									<p class='opera f-csp f-pr f-fs1' v-on:click.stop='edit(item.id)'>销售{{item.sales}}<i class='add f-fsn'>+</i></p>
								</section>
							</div>
						</div>	
					</mt-loadmore>
				</div>	
				<br>
				<p class='nomore f-tac f-fs1'>
		      {{isAllLoaded ? '没有更多了' : '下拉加载更多'}}
		    </p>
			</mt-tab-container-item>
		</mt-tab-container>
		<nav class='portnav' ref='portnav'>
			<router-link to='/user/index'>
			  <i class='iconfont'>&#xe60f;</i>
			</router-link>
			<router-link to='/shopcar' class='f-pr'>
			  <i class='iconfont' style='border-right: none; font-size: 28px; top: 1px;'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
		
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>