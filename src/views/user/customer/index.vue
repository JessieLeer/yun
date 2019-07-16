<template>
  <div class='inner-main'>
	  <mt-header title="客户信息" class='header'>
		  <router-link to="/user/index" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div v-for='(item,index) in customers' v-bind:key='index' class='customer'>
		  <mt-cell v-bind:title="item.customerName"></mt-cell>
			<dl class='info'>
			  <dt class='f-ib f-tar'>联系电话：</dt>
				<dd class='f-ib'>{{item.phone}}</dd>
			</dl>
			<dl class='info'>
			  <dt class='f-ib f-tar'>联系地址：</dt>
				<dd class='f-ib'>{{item.address}}</dd>
			</dl>
			<dl class='info'>
			  <dt class='f-ib f-tar'>许可证：</dt>
				<dd class='f-ib'>{{item.license}}</dd>
			</dl>
			<dl class='info'>
			  <dt class='f-ib f-tar'>营业执照：</dt>
				<dd class='f-ib f-vat'>
				  {{item.businessLicense}}
				</dd>
			</dl>
			<dl class='info'>
			  <dt class='f-ib f-tar'>委托书：</dt>
				<dd class='f-ib f-vat'>
				  {{item.powerOfAttorney}}
				</dd>
			</dl>
			<dl class='info'>
			  <dt class='f-ib f-tar'>GSP：</dt>
				<dd class='f-ib f-vat'>
				  {{item.gsp}}
				</dd>
			</dl>
		</div>
	</div>		
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>