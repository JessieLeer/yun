<template>
  <div>
	  <header class='g-hd f-tac'>
			<img v-bind:src='user.avatar' width='50' class='avatar'>
			<br>
			<i class='f-fsn f-fs2'>{{user.name}}</i>
		</header>
		<br>
		<mt-cell class='bg-white mt-8' title='我的订单' is-link to=''>
		  <i slot='icon' class='iconfont'>&#xe652;</i>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='负责业务员' is-link to='/user1/info'>
		  <i slot='icon' class='iconfont'>&#xe634;</i>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='设置' is-link to=''>
		  <i slot='icon' class='iconfont'>&#xe603;</i>
		</mt-cell>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>