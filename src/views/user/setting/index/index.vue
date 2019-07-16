<template>
  <div class='inner-main'>
	  <mt-header title="设置" class='header'>
		  <mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<mt-cell title="修改密码" is-link to='/user/password'></mt-cell>
		<section class='f-tac'>
		  <mt-button type="default" class='logout' v-on:click='logout'>退出登录</mt-button>
		</section>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>