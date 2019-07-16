<template>
  <div class='inner-main'>
	  <mt-header title="订单明细" class='header'>
		  <router-link to="/user/order" slot="left">
				<i class='iconfont ml-10'>&#xe625;</i>
			</router-link>
		</mt-header>
		<mt-cell v-bind:title="notice"></mt-cell>
		<mt-cell class='customer'>
		  <i class='f-fsn f-fs2' slot='title'>客户名称：{{order.customerName}}</i>
		</mt-cell>
		<mt-cell title='订单信息'></mt-cell>
		<div class='order-info f-fs2'>
			<dl>
				<dt class='f-ib f-tar'>订单总额：</dt>
				<dd class='pricer f-ib'>¥{{order.cost}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>订单号：</dt>
				<dd class='f-ib'>{{order.billId}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>客户：</dt>
				<dd class='f-ib'>{{order.customerName}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>下单者：</dt>
				<dd class='f-ib'>{{user.name}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>下单时间：</dt>
				<dd class='f-ib'>{{order.createDate}}</dd>
			</dl>
		</div>
		<div v-for='(item,index) in order.orderProductVOS' v-bind:key='index' >
			<div class='order-wrapper' v-on:click='go(`/good/show/${item.productId}`)'>
			  <section class='order-image'>
			    <img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='100'>
				</section>
				<section class='good-info'>
				  <h4 class='order-title f-fs2'>{{item.productName}}</h4>
					<p class='order-bread f-fs1'>{{item.chpgg}}</p>
					<p class='order-bread f-fs1'>{{item.shchchj}}</p>
					<!--<section class='price'>
					  <i class='price-now f-fsn f-fs1'>¥{{item.cost}}</i>
					</section>-->
				</section>
			</div>
		</div>	
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>