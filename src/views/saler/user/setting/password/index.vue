<template>
  <div class='inner-main'>
	  <mt-header title="修改密码" class='header'>
		  <router-link to="/user/setting" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-field label="原密码" placeholder="请输入原密码" type="password" v-model="password.old" v-bind:state="stateOld"></mt-field>
		<mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="password.new" v-bind:state="stateNew"></mt-field>
		<mt-field label="确认新密码" placeholder="请确认密码" type="password" v-model="password.confirm" v-bind:state="stateConfirm"></mt-field>
		<section class='f-tac'>
		  <mt-button type="default" class='btn' v-bind:disabled='!subAble'>保存</mt-button>
		</section>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>