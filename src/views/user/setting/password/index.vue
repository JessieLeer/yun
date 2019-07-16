<template>
  <div class='inner-main' ref='inner'>
	  <mt-header title="修改密码" class='header'>
		  <router-link to="/user/setting" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<br>
		<label class='label f-fs2'>原密码</label>
		<mt-field class='user-password' placeholder="请输入原密码" type="password" v-model="password.old"></mt-field>
		<br>
		<label class='label f-fs2'>新密码<i class='tip f-fs1 f-fsn'>(必须六位数以上)</i></label>
		<mt-field class='user-password' placeholder="请输入新密码" type="password" v-model="password.new"></mt-field>
		<br>
		<label class='label f-fs2'>确认新密码</label>
		<mt-field class='user-password' placeholder="请确认密码" type="password" v-model="password.confirm"></mt-field>
		<section class='f-tac'>
		  <mt-button type="default" class='btn' v-bind:disabled='!subAble' v-on:click='submit'>保存</mt-button>
		</section>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>