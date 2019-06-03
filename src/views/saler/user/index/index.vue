<template>
  <div>
	  <header class='g-hd'>
			<mt-cell v-bind:title="user.phone" is-link class='mine-cell-mine' to='/user/info'>
				<img slot="icon" v-bind:src='user.avatar' class='avatar' width="24" height="24">
			</mt-cell>
			<dl class='money'>
			  <dt class='f-fs1'>我的余额（元）</dt>
				<dd class='f-fwb'>{{user.money}}</dd>
			</dl>
			<i class='notice f-fs1 f-fsn'>{{user.notice}}</i>
		</header>
		<mt-cell class='bg-white mt-8'>
		  <i class='f-fsn' slot='title'>
			  我的积分
				<b class='score'>{{user.score}}</b>
			</i>
		  <mt-button type="danger" size='small' class='f-fr'>积分规则</mt-button>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='现金账户' is-link to='/user/account'>
		  <i slot='icon' class='iconfont'>&#xe602;</i>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='我的订单' is-link to='/user/order'>
		  <i slot='icon' class='iconfont'>&#xe652;</i>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='客户资料' is-link>
		  <i slot='icon' class='iconfont'>&#xe634;</i>
		</mt-cell>
		<mt-cell class='bg-white mt-8' title='设置' is-link to='/user/setting'>
		  <i slot='icon' class='iconfont'>&#xe603;</i>
		</mt-cell>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>