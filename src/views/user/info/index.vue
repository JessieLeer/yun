<template>
  <div class='inner-main'>
	  <mt-header title="个人信息" class='header'>
		  <mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
	  <mt-cell title="姓名" v-bind:label="user.name" class='user-info pt-10'></mt-cell>
		<mt-cell title="邮箱" v-bind:label="user.email ? user.email : '您还未绑定邮箱'" class='user-info pt-10'></mt-cell>
		<mt-cell title="手机" v-bind:label="user.mobile ? user.mobile : '您还未绑定手机号'" class='user-info pt-10'></mt-cell>
		<mt-cell title="备注" v-bind:label="user.remark ? user.remark : '未填写备注'" class='user-info pt-10'></mt-cell>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>