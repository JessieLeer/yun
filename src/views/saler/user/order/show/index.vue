<template>
  <div class='inner-main'>
	  <mt-header title="订单明细" class='header'>
		  <router-link to="/user/order" slot="left">
				<i class='iconfont ml-10'>&#xe625;</i>
			</router-link>
		</mt-header>
		<mt-cell title="下单成功，正在等待总部审核"></mt-cell>
		<mt-cell is-link class='customer'>
		  <i class='f-fsn f-fs2' slot='title'>客户名称：{{customer}}</i>
		</mt-cell>
		<mt-cell title='订单信息'></mt-cell>
		<div class='order-info f-fs2'>
			<dl>
				<dt class='f-ib f-tar'>订单总额：</dt>
				<dd class='price f-ib'>¥{{order.amount}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>订单号：</dt>
				<dd class='f-ib'>{{order.number}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>客户：</dt>
				<dd class='f-ib'>{{order.customer}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>下单者：</dt>
				<dd class='f-ib'>{{order.created_by}}</dd>
			</dl>
			<dl>
				<dt class='f-ib f-tar'>下单时间：</dt>
				<dd class='f-ib'>{{order.created_at}}</dd>
			</dl>
		</div>
		<div v-for='(item,index) in order.goods' v-bind:key='index' >
			<div class='order-wrapper'>
			  <section class='order-image'>
			    <img v-bind:src='item.image' width='100'>
				</section>
				<section class='order-info'>
				  <h4 class='order-title f-fs2'>{{item.title}}</h4>
					<p class='order-bread f-fs1'>{{item.specification}} 批号：{{item.lotNum}}</p>
					<p class='order-bread f-fs1'>{{item.company}}</p>
					<section class='price'>
					  <i class='price-now f-fsn f-fs1'>¥{{item.price}}</i>
						<i class='price-old f-fsn f-fs1'>¥{{item.oldPrice}}</i>
						<i class='order-count f-fsn'>{{item.count}}</i>
					</section>
				</section>
			</div>
			<mt-cell title="">
			  <mt-button type="default" size='small' class='cancel f-fs1' v-on:click='cancel'>取消订单</mt-button>
			</mt-cell>
		</div>	
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>