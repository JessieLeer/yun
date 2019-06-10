<template>
  <div class='main'>
	  <br>
	  <h1 class='f-tac'>
	    <img src='../../../../assets/image/logo@2x.png'>
		</h1>
		<br>
		<form class='form form-login f-tac'>
		  <h3>欢迎<br><small class='f-fs2 f-fwn'>用户登录</small></h3>
			<br>
	    <mt-field label="" placeholder="用户名" v-model="name" v-bind:state='state.name' class='login-field f-pr'>
			  <i class='iconfont'>&#xe65c;</i>
			</mt-field>
			<mt-field label="" placeholder="密码" type="password" v-model="password" v-bind:state='state.password' class='login-field f-pr'>
			  <i class='iconfont'>&#xe601;</i>
			</mt-field>
			<br><br><br><br><br>
			<mt-button type="danger" size='large' class='sub' v-bind:disabled='isSubable'>登录</mt-button>
		</form>
	</div>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index'></script>