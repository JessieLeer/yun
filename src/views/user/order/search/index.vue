<template>
  <div class='inner-main'>
	  <mt-header title="订单搜索" class='header'>
		  <router-link to="/user/order" slot="left">
				<i class='iconfont ml-10'>&#xe625;</i>
			</router-link>
		</mt-header>
		<mt-search v-model="name" cancel-text="取消" placeholder="商品名称" ref='search' @keyup.native.enter="index(1)"></mt-search>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<div v-for='(item,index) in orders' v-bind:key='index' class='order-area'>
					<mt-cell v-bind:title="item.customerName" is-link to='/order/good'>
						<span class='status f-fs2'>{{item.status == 0 ? "未提取" : item.status == 1 ? "已提取" : item.status == 2 ? "已取消" : item.status == 3 ? "已发货" : item.status == 4 ? "已支付" : "已同步"}}</span>
					</mt-cell>
					<router-link to='/user/order/show' class='f-db w-100'>
						<div class='order-wrapper'>		  
							<section class='order-image'>
								<img v-for='(pro,i) in item.orderProductVOS.slice(0,2)' v-bind:key='i' v-bind:src='pro.photos ? pro.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='60'>
								<span class='image-more' v-if='item.orderProductVOS.length > 2'>...</span>
							</section>
							<div class='order-info f-pr'>
								<section class='order-good f-fs1'>
									<i class='good-count f-fsn'>共计：x{{item.orderProductVOS.length}}批商品</i>
									<i class='good-price f-fsn f-tar'>¥{{item.cost}}</i>
								</section>
								<time class='order-time f-fs1'>{{item.createDate ? item.createDate.substr(0,10) : ''}}</time>
							</div>
						</div>
					</router-link>
					<mt-cell title="">
						<mt-button type="default" size='small' class='cancel f-fs1' v-on:click='cancel(item.billId)'>取消订单</mt-button>
					</mt-cell>
				</div>
			</mt-loadmore>
		</div>	
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>