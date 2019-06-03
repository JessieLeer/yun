<template>
  <div class='inner-main'>
	  <mt-header title="个人信息" class='header'>
		  <router-link to="/user1/index" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
	  <mt-cell title="姓名" v-bind:label="user.name"></mt-cell>
		<mt-cell title="邮箱" v-bind:label="user.email ? user.email : '您还未绑定邮箱'"></mt-cell>
		<mt-cell title="手机" v-bind:label="user.phone ? user.phone : '您还未绑定手机号'"></mt-cell>
		<mt-cell title="备注" v-bind:label="user.remark ? user.remark : '未填写备注'"></mt-cell>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>