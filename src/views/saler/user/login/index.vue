<template>
  <div class='main'>
	  <br>
	  <h1 class='f-tac'>
	    <img src='../../../../assets/image/logo@3x.png' width='145'>
		</h1>
		<form class='form form-login f-tac'>
		  <h3 class='welcome'>欢迎<br><small class='f-fwn'>账号登录</small></h3>
	    <mt-field label="" placeholder="用户名" v-model="name" class='login-field f-pr'>
			  <i class='iconfont'>&#xe65c;</i>
			</mt-field>
			<mt-field label="" placeholder="密码" type="password" v-model="password"  class='login-field f-pr'>
			  <i class='iconfont'>&#xe601;</i>
			</mt-field>
			<br><br><br>
			<mt-button type="danger" size='large' class='sub' v-bind:disabled='isSubable' v-on:click='login'>登录</mt-button>
		</form>
	</div>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index'></script>