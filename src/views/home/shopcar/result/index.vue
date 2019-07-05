<template>
  <div class='inner-main f-pr'>
	  <mt-header title="下单完成" class='header'>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<img src='../../../../assets/image/result.gif' class='result'>
		<h4 class='result-text f-tac'>下单成功</h4>
		<p class='f-tac f-fs2'>销售金额 <b class='price'>¥{{amount}}</b></p>
		<p class='remark f-fs2 f-tac'>正在等待后台审核，请稍后</p>
		<p class='opera f-tac'>
		  <mt-button class='btn' type="primary" size='small' v-on:click='go("/user/order")'>查看订单</mt-button>
			<mt-button class='btn' type="default" size='small' v-on:click='back'>返回</mt-button>
		</p>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>