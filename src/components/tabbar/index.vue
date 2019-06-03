<template>
  <mt-tabbar v-model="currentIndex" v-bind:fixed='true'>
		<mt-tab-item id="/index">
			<i class='iconfont' slot='icon'>&#xe604;</i>
			首页
		</mt-tab-item>
		<mt-tab-item id="/order">
			<i class='iconfont' slot='icon'>&#xe652;</i>
			快速下单
		</mt-tab-item>
		<mt-tab-item id="/shopcar">
			<i class='iconfont' slot='icon'>&#xe605;</i>
			购物车
		</mt-tab-item>
		<mt-tab-item id="/user/index">
		  <i class='iconfont' slot='icon'>&#xe65c;</i>
			我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>
