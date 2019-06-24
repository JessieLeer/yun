<template>
  <div class='inner-main'>
	  <mt-header title="订单搜索" class='header'>
		  <router-link to="/user/order" slot="left">
				<i class='iconfont ml-10'>&#xe625;</i>
			</router-link>
		</mt-header>
		<mt-search v-model="name" cancel-text="取消" placeholder="商品名称/客户名称"></mt-search>
		<div v-for='(item,index) in orders' v-bind:key='index' class='mt-10'>
		  <mt-cell>
			  <router-link to='/' slot='title' class='customer-name'>
				  {{item.customer}} <i class='iconfont'>&#xe631;</i>
				</router-link>
			  <span class='status f-fs2'>{{item.status}}</span>
			</mt-cell>
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
			<mt-cell title="共1件商品 合计：¥2423.00">
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