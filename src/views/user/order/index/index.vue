<template>
  <div class='inner-main'>
	  <header title="" class='header'>
		  <i class='iconfont ml-10' slot='left' v-on:click='back'>&#xe625;</i>
			<nav class="nav f-ib">
				<mt-button size="small" class='nav-btn' v-bind:class='search.status == "" ? "status-cur" : ""' v-on:click='changeStatus("")'>全部</mt-button>
				<mt-button size="small" class='nav-btn' v-bind:class='search.status == "1" ? "status-cur" : ""' v-on:click='changeStatus("1")'>已提取</mt-button>
				<mt-button size="small" class='nav-btn' v-bind:class='search.status == "0" ? "status-cur" : ""' v-on:click='changeStatus("0")'>未提取</mt-button>
				<mt-button size="small" class='nav-btn' v-bind:class='search.status == "2" ? "status-cur" : ""' v-on:click='changeStatus("2")'>已取消</mt-button>
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
		<section class='nogood f-tac' v-if='orders.length == 0'>
		  <br></br>
		  <img src='../../../../assets/image/norder.png'>
			<br>
			<p>未找到订单</P>
		</section>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;" >
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false' v-if='orders.length > 0'>
				<div v-for='(item,index) in orders' v-bind:key='index' class='order-area'>
					<mt-cell v-bind:title="item.customerName" v-bind:to='"/user/order/show/"+item.billId'>
						<span class='status f-fs2'>{{item.status == 0 ? "未提取" : item.status == 1 ? "已提取" : item.status == 2 ? "已取消" : item.status == 3 ? "已发货" : item.status == 4 ? "已支付" : "已同步"}}</span>
					</mt-cell>
					<router-link v-bind:to='"/user/order/show/"+item.billId' class='f-db w-100'>
						<div class='order-wrapper'>		  
							<section class='order-image'>
								<img v-for='(pro,i) in item.orderProductVOS.slice(0,2)' v-bind:key='i' v-bind:src='pro.photos ? pro.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='60'>
								<span class='image-more' v-if='item.orderProductVOS.length > 2'>...</span>
							</section>
							<div class='order-info f-pr'>
								<section class='order-good f-fs1'>
									<i class='good-count f-fsn'>共计：{{item.orderProductVOS.length}}种商品</i>
									<i class='good-price f-fsn f-tar'>¥{{item.cost}}</i>
								</section>
								<time class='order-time f-fs1'>{{item.createDate ? item.createDate.substr(0,10) : ''}}</time>
							</div>
						</div>
					</router-link>
					<mt-cell title="" v-if='item.status != 2'>
						<mt-button type="default" size='small' class='cancel f-fs1' v-on:click='cancel(item.billId)'>取消订单</mt-button>
					</mt-cell>
				</div>
			</mt-loadmore>
		</div>	
		<mt-popup v-model="cusVisible" position="bottom" class='w-100'>
			<mt-index-list class='cus-index w-100'>
				<mt-index-section v-for='(item,index) in customers' v-bind:index="item.group" v-bind:key='index' v-if='item.datas.length > 0'>
					<mt-checklist
						title=""
						v-model="search.customers"
						v-bind:options="item.options">
					</mt-checklist>
				</mt-index-section>
			</mt-index-list>
			<mt-button type="danger" size='large' class='btn-sure' v-on:click='handleCustomerSelect'>确定</mt-button>
		</mt-popup>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>