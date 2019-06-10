<template>
  <div class='inner-main' ref='inner' id='inner'>
		<header class='header'>
			<mt-cell class='search f-csp'>
				<section slot='title'>
					<i class='iconfont mr-10'>&#xe639;</i>
					搜索商品名称/商品编号/助记码
				</section>
			</mt-cell>
			<router-link slot='right' to='/login' class='login f-tac'>登录</router-link>
		</header>
		<div class='g-header'>
			<mt-swipe class='banner-wrapper' :auto="4000">
				<mt-swipe-item v-for='(item,index) in banners' v-bind:key='index' class='f-tac'>
					<img v-bind:src='item.image' width='90%' v-on:click='go(item.url)' class='banner' ref='banner0'>
				</mt-swipe-item>
			</mt-swipe>
			<nav class='nav f-cb'>
				<router-link to='/good/promotion' class='nav-item f-tac f-fl'>
					<img src='../../../../assets/image/sale.png' width='33'>
					<br>促销
				</router-link>
				<router-link to='/good/cate' class='nav-item f-tac f-fl'>
					<img src='../../../../assets/image/cate.png' width='33'>
					<br>分类
				</router-link>
				<router-link to='/' class='nav-item f-tac f-fl'>
					<img src='../../../../assets/image/order.png' width='33'>
					<br>订单
				</router-link>
				<router-link to='/bulletin' class='nav-item f-tac f-fl'>
					<img src='../../../../assets/image/bulletin.png' width='33'>
					<br>公告
				</router-link>
			</nav>
		</div>
		<section class='notice'>
		  <i class='notice-index f-fsn'>通知公告：</i>
			<vue-seamless-scroll v-bind:data="notices" class='seamless-warp' v-bind:class-option="classOption">
			  <router-link v-for='(item,index) in notices' v-bind:key='index' to='/' class='notice-item f-db'>
				  {{item.title}} 
				</router-link>
			</vue-seamless-scroll>
		</section>
		<h2 class='hot-title f-tac'>热销产品</h2>
		<ul class='hots f-tac'>
		  <li class='hot f-tal f-ib' v-for='(item,index) in hots' v-bind:key='index'>
			  <router-link to='/'>
				  <img v-bind:src='item.image' class='hot-image'>
					<h3 class='hot-name f-fs2'>{{item.name}}</h3>
					<mt-badge size="small" color='#fafafa' class='hot-badge'>{{item.specification}}</mt-badge>
					<mt-badge size='small' color='#fafafa' class='hot-badge'>{{item.formulation}}</mt-badge>
					<i class='hot-sold f-fsn f-db f-tar f-fs1'>已售{{item.sold}}件</i>
				</router-link>
			</li>
		</ul>
		<p class='nomore f-tac f-fs1'>没有更多了</p>
		<tabbar selected='/index'></tabbar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>