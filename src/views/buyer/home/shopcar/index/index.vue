<template>
  <div class='inner-main f-pr'>
	  <mt-header title="购物车" class='header'>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
			<i slot='right' class='f-fsn' v-on:click='delShow = !delShow'>{{delShow ? '完成' : '编辑'}}</i>
		</mt-header>
		<mt-cell v-bind:title="customer" is-link></mt-cell>
		<div v-for='(item,index) in orders' v-bind:key='index' class='mt-10'>
			<div class='order-wrapper'>
		    <input type='checkbox' v-bind:value='item.id' v-model='selectedOrders' class='check'>
			  <section class='order-image'>
			    <img v-bind:src='item.image' width='75' class='f-fl'>
				</section>
				<section class='order-info' v-on:click='go("/good/show1")'>
				  <h4 class='order-title f-fs2'>{{item.title}}</h4>
					<p class='order-bread f-fs1'>{{item.specification}} 批号：{{item.lotNum}}</p>
					<p class='order-bread f-fs1'>{{item.company}}</p>
				</section>
			</div>
			<mt-cell label="修改">
				<section class='price' slot='title'>
					<i class='price-now f-fsn f-fs1'>¥{{item.price}}</i>
					<i class='price-old f-fsn f-fs1'>¥{{item.oldPrice}}</i>
					<i class='order-count f-fsn'>{{item.count}}</i>
					<i class='iconfont color-grey f-fr' style='font-size: 12px' slot='icon'>修改 &#xe631;</i>
				</section>
			</mt-cell>
			<mt-cell v-if='item.remark'>
			  <p class='remark f-fs1' slot='title'><i class='offer f-ib f-tac f-fsn'>惠</i>{{item.remark}}</p>
			</mt-cell>
		</div>
		<footer class='footer' v-if='delShow'>
		  <label class='amount'>
		    <input type='checkbox' class='' v-model='selectedAll' v-on:click='toggleAll'> {{selectedAll ? '全不选' : '全选'}}
			</label>
			<mt-button type="default" v-bind:disabled='selectedOrders.length == 0 ? true : false' class='sub' size='small' v-on:click='del'>删除</mt-button>
		</footer>
		<footer class='footer' v-else>
		  <label class='amount'>
		    <input type='checkbox' class='' v-model='selectedAll' v-on:click='toggleAll'> {{selectedAll ? '全不选' : '全选'}}
			</label>
		  <section class='amount'>合计：<i class='f-fsn'>¥338.00</i></section>
			<mt-button type="default" v-bind:disabled='selectedOrders.length == 0 ? true : false' class='sub' size='small' v-on:click='go("/shopcar/result")'>提交({{selectedOrders.length}})</mt-button>
		</footer>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>