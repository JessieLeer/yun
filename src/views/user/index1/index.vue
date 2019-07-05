<template>
  <div>
	  <header class='g-hd f-tac'>
			<img v-bind:src='user.photo ? user.photo : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556360175017&di=68c8a1242f15b3842dbe5e36a7d57752&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fblog%2F201506%2F05%2F20150605123522_QrniU.jpeg"' width='50' class='avatar'>
			<br>
			<i class='f-fsn f-fs2'>{{user.name}}</i>
		</header>
		<br>
		<mt-cell class='bg-white mt-8' title='我的订单' is-link to='/user/order'>
		  <img src='../../../assets/image/myorder.png' slot='icon' class='user-icon'>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='负责业务员' is-link to='/user/info'>
		  <img src='../../../assets/image/customer.png' slot='icon' class='user-icon'>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='设置' is-link to='/user/setting'>
		  <img src='../../../assets/image/setting.png' slot='icon' class='user-icon'>
		</mt-cell>
		<tabbar selected='/user/index1'></tabbar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>