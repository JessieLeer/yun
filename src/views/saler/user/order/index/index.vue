<template>
  <div class='inner-main'>
	  <header title="" class='header'>
		  <router-link to="/user/index" slot="left">
				<i class='iconfont ml-10'>&#xe625;</i>
			</router-link>
			<nav class="nav f-ib">
				<mt-button size="small" class='nav-btn'>全部</mt-button>
				<mt-button size="small" class='nav-btn'>已提取</mt-button>
				<mt-button size="small" class='nav-btn'>未提取</mt-button>
				<mt-button size="small" class='nav-btn'>已取消</mt-button>
			</nav>
		</header>
		<section class='f-cb'>
			<mt-button class='btn f-fl' v-on:click='cusVisible = true'>
				{{customersFormat ? customersFormat : '选择客户'}}
				<i class='iconfont'>&#xe632;</i>
			</mt-button>
			<router-link to="/user/order/search" slot="left">
			  <mt-button class='btn f-fr'>
				  <i class='iconfont'>&#xe639;</i>
			  	搜索订单
			  </mt-button>
			</router-link>
		</section>
		<div v-for='(item,index) in orders' v-bind:key='index' class='order-area'>
		  <mt-cell v-bind:title="item.customer" is-link to='/order/good'>
			  <span class='status f-fs2'>{{item.status}}</span>
			</mt-cell>
			<router-link to='/user/order/show' class='f-db w-100'>
			  <div class='order-wrapper'>		  
					<section class='order-image'>
						<img v-for='(img,i) in item.images' v-bind:key='i' v-bind:src='img' width='60'>
						<span class='image-more' v-if='item.imageCount > 2'>...</span>
					</section>
					<div class='order-info f-pr'>
						<section class='order-good f-fs1'>
							<i class='good-count f-fsn'>共计：x2批商品</i>
							<i class='good-price f-fsn f-tar'>¥{{item.price}}</i>
						</section>
						<time class='order-time f-fs1'>{{item.created_at}}</time>
					</div>
			  </div>
			</router-link>
		  <mt-cell title="">
			  <mt-button type="default" size='small' class='cancel f-fs1' v-on:click='cancel'>取消订单</mt-button>
			</mt-cell>
		</div>	
		<mt-popup v-model="cusVisible" position="bottom" class='w-100'>
			<mt-index-list class='cus-index w-100'>
				<mt-index-section index="A">
					<mt-checklist
						title=""
						v-model="search.customers"
						:options="['Alan', 'Asia', 'Ali']">
					</mt-checklist>
				</mt-index-section>
				<mt-index-section index="B">
					<mt-checklist
						title=""
						v-model="search.customers"
						:options="['Bill', 'Bob', 'Barry']">
					</mt-checklist>
				</mt-index-section>
				<mt-index-section index="C">
					<mt-checklist
						title=""
						v-model="search.customers"
						:options="['Calick', 'Clark', 'Cassi']">
					</mt-checklist>
				</mt-index-section>
			</mt-index-list>
			<mt-button type="danger" size='large' class='btn-sure' v-on:click='cusVisible = false'>确定</mt-button>
		</mt-popup>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>