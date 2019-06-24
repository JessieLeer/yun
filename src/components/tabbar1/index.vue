<template>
  <mt-tabbar v-model="currentIndex" v-bind:fixed='true'>
		<mt-tab-item id="/index1">
			<i class='iconfont' slot='icon'>&#xe60c;</i>
			进入厂商
		</mt-tab-item>
		<mt-tab-item id="/shopcar1">
			<i class='iconfont' slot='icon'>&#xe60e;</i>
			购物车
		</mt-tab-item>
		<mt-tab-item id="/user1/index">
		  <i class='iconfont' slot='icon'>&#xe60f;</i>
			我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>
