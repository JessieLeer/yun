<template>
  <div class='inner-main' ref='inner' id='inner'>
		<header class='header'>
			<mt-cell class='search f-csp' >
				<section slot='title' v-on:click='go("/good/list")'>
					<i class='iconfont mr-10'>&#xe639;</i>
					搜索商品名称/商品编号/助记码
				</section>
			</mt-cell>
			<router-link slot='right' to='/user/index' v-if='user.id' class='user f-tac'>
			  <i class='iconfont'>&#xe60f;</i>
			</router-link> 
			<router-link slot='right' to='/login' class='login f-tac' v-else>登录</router-link>
		</header>
		<div class='g-header'>
			<mt-swipe class='banner-wrapper' :auto="4000">
				<mt-swipe-item v-for='(item,index) in banners' v-bind:key='index' class='f-tac'>
					<img v-bind:src='item.image' width='100%' v-on:click='go(item.url)' class='banner' ref='banner0'>
				</mt-swipe-item>
			</mt-swipe>
			<nav class='nav f-cb'>
				<router-link to='/good/promotion' class='nav-item f-tac f-fl f-fs2'>
					<img src='../../../../assets/image/sale.png' width='32'>
					<p>促销</p>
				</router-link>
				<router-link to='/good/cate' class='nav-item f-tac f-fl f-fs2'>
					<img src='../../../../assets/image/cate.png' width='32'>
					<p>分类</p>
				</router-link>
				<router-link to='/user/order' class='nav-item f-tac f-fl f-fs2'>
					<img src='../../../../assets/image/order.png' width='32'>
					<p>订单</p>
				</router-link>
				<router-link to='/bulletin' class='nav-item f-tac f-fl f-fs2'>
					<img src='../../../../assets/image/bulletin.png' width='32'>
					<p>公告</p>
				</router-link>
			</nav>
		</div>
		<section class='notice'>
		  <i class='notice-index f-fsn'>通知公告：</i>
			<vue-seamless-scroll v-bind:data="notices" class='seamless-warp' v-bind:class-option="classOption">
			  <router-link v-for='(item,index) in notices' v-bind:key='index' to='/' class='notice-item f-db'>
				  {{item.title.substr(0,18)}}... 
				</router-link>
			</vue-seamless-scroll>
		</section>
		<h2 class='hot-title f-tac'>
		  <i class='dec-line f-ib'></i>热销产品<i class='dec-line f-ib'></i>
		</h2>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<ul class='hots f-tac'>
					<li class='hot f-tal f-ib' v-for='(item,index) in hots' v-bind:key='index'>
						<router-link v-bind:to='"/good/show/" + item.id'>
							<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg"' class='hot-image'>
							<h3 class='hot-name f-fs2'>{{item.name}}</h3>
							<mt-badge size="small" color='#fafafa' class='hot-badge'>{{item.chpgg}}</mt-badge>
							<mt-badge size='small' color='#fafafa' class='hot-badge'>{{item.jx}}</mt-badge>
							<i class='hot-sold f-fsn f-db f-tar f-fs1'>已售{{item.sales}}件</i>
						</router-link>
					</li>
				</ul>
			</mt-loadmore>
		</div>	
		<br>
		<p class='nomore f-tac f-fs1'>
		  {{this.page.current == this.page.total ? '没有更多了' : '下拉加载更多'}}
		</p>
		<tabbar selected='/index'></tabbar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>