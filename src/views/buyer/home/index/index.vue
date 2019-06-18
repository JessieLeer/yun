<template>
  <div class='inner-main'>
	  <header class='header'>
		  <mt-cell class='search f-csp'>
			  <section slot='title' v-on:click='go("/search1")'>
				  <i class='iconfont mr-10'>&#xe639;</i>
			 	  搜索商品名称/商品编号/助记码
				</section>
			</mt-cell>
			<router-link slot='right' to='/good/cate1' class='cate f-tac'>
			  <b class='iconfont f-db'>&#xe636;</b>
				<i class='f-fsn f-fs1'>分类</i>
			</router-link>
		</header>
		<mt-cell v-bind:title="shop.name" is-link to='/company'></mt-cell>
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
			<mt-tab-item id="1">首页</mt-tab-item>
			<mt-tab-item id="2">商品</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="current">
			<mt-tab-container-item id="1">
			  <!--<section class='active f-tac'>
				  <img src='../../../../assets/image/active.gif' width='80%'>
				</section>-->
				<div v-for='(item,index) in regulars' v-bind:key='index' class='mt-10'>
					<div class='order-wrapper'>
						<section class='order-image'>
							<img v-bind:src='item.image' width='120' class='f-fl'>
						</section>
						<section class='order-info'>
							<h4 class='order-title f-fs2'>{{item.name}}</h4>
							<p class='order-bread mb-6 f-fs1'>{{item.specification}}</p>
							<p class='order-bread f-fs1'>{{item.company}}</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click='edit(item)'>销售{{item.sold}}<i class='add f-fsn'>+</i></p>
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
					  <mt-button size="small" class='good-condi' v-bind:class='good.filter == "推荐" ? "good-cur" : ""' v-on:click='changeFilter("推荐")'>推荐</mt-button>
						<mt-button size="small" class='good-condi' v-bind:class='good.filter == "新品" ? "good-cur" : ""' v-on:click='changeFilter("新品")'>新品</mt-button>
						<mt-button size="small" class='good-condi' v-bind:class='good.filter == "销量" ? "good-cur" : ""' v-on:click='changeFilter("销量")'>销量</mt-button>
					</section>
				</header>
				<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
					<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
					  <div v-for='(item,index) in good.data' v-bind:key='index' class='mt-10'>
							<div class='order-wrapper'>
								<section class='order-image'>
									<img v-bind:src='item.image' width='120' class='f-fl'>
								</section>
								<section class='order-info'>
									<h4 class='order-title f-fs2'>{{item.name}}</h4>
									<p class='order-bread mb-6 f-fs1'>{{item.specification}}</p>
									<p class='order-bread f-fs1'>{{item.company}}</p>
									<p class='opera f-csp f-pr f-fs1' v-on:click='edit(item)'>销售{{item.sold}}<i class='add f-fsn'>+</i></p>
								</section>
							</div>
						</div>	
					</mt-loadmore>
				</div>	
			</mt-tab-container-item>
		</mt-tab-container>
		<nav class='portnav'>
			<router-link to='/user1/index'>
			  <i class='iconfont'>&#xe60c;</i>
			</router-link>
			<router-link to='/shopcar1' class='f-pr'>
			  <i class='iconfont' style='border-right: none; font-size: 28px; top: 1px;'>&#xe605;</i>
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
						<dd class='f-ib'>{{selected.count}}件</dd>
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
			<br>
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