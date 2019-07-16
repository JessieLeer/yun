<template>
  <div>
	  <header class='g-hd f-pr'>
			<mt-cell v-bind:title="user.name" is-link class='mine-cell-mine' to='/user/info'>
				<img slot="icon" v-bind:src='user.avatar ? user.avatar : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556360175017&di=68c8a1242f15b3842dbe5e36a7d57752&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fblog%2F201506%2F05%2F20150605123522_QrniU.jpeg"' class='avatar' width="24" height="24">
			</mt-cell>
			<dl class='money'>
			  <dt class='f-fs1'>我的余额（元）</dt>
				<dd class='f-fwb'>{{balance}}</dd>
			</dl>
			<i class='notice f-fs1 f-fsn' v-if='notice'>{{notice}}</i>
		</header>
		<!--<mt-cell class='bg-white mb-8'>
		  <i class='f-fsn' slot='title'>
			  我的积分
				<b class='score'>{{user.score}}</b>
			</i>
		  <mt-button type="danger" size='small' class='score-rule f-fs1 f-fr'>积分规则</mt-button>
		</mt-cell>-->
		<mt-cell class='bg-white mb-8' title='现金账户' is-link to='/user/account'>
			<i class='iconfont' slot='icon'>&#xe616;</i>
		</mt-cell>
		<mt-cell class='bg-white mb-8' title='我的订单' is-link to='/user/order'>
			<i class='iconfont' slot='icon'>&#xe617;</i>
		</mt-cell>
		<mt-cell class='bg-white mb-8' title='客户资料' is-link to='/user/customer'>
			<i class='iconfont' slot='icon'>&#xe613;</i>
		</mt-cell>
		<mt-cell class='bg-white' title='设置' is-link to='/user/setting'>
			<i class='iconfont' slot='icon'>&#xe614;</i>
		</mt-cell>
		<tabbar selected='/user/index'></tabbar>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>