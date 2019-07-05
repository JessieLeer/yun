<template>
  <nav class='portnav' ref='portnav'>
		<router-link to='/index' v-if='user.customerType == 3'>
			<i class='iconfont'>&#xe60c;</i>
	  </router-link>
		<router-link v-bind:to='user.customerType == 3 ? "/user/index" : "/user/index1"'>
			<i class='iconfont'>&#xe60f;</i>
		</router-link>
		<router-link to='/shopcar' class='f-pr'>
			<i class='iconfont' style='border-right: none; font-size: 28px; top: 1px;'>&#xe605;</i>
			<mt-badge type="error" size='small' class='badge' v-if='shopcar.length > 0'>{{shopcar.length}}</mt-badge>
		</router-link>
	</nav>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>