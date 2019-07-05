<template>
  <div class='inner-main f-pr'>
	  <mt-header title="购物车" class='header'>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
			<i slot='right' class='f-fsn' v-on:click='checkShow = !checkShow'>{{checkShow ? '完成' : '编辑'}}</i>
		</mt-header>
		<mt-cell v-bind:title="currentCustomer.customerName" is-link class='shopcar-cell'></mt-cell>
		<div v-for='(item,index) in orders' v-bind:key='index' class='mt-10'>
			<div class='order-wrapper'>
		    <input type='checkbox' v-bind:value='item.id' v-model='selectedOrders' class='check' v-if='checkShow'>
			  <section class='order-image'>
			    <img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='75' class='f-fl'>
				</section>
				<section class='order-info'>
				  <h4 class='order-title f-fs2'>{{item.name}}</h4>
					<p class='order-bread f-fs1'>{{item.chpgg}}</p>
					<p class='order-bread f-fs1'>{{item.shchchj}}</p>
				</section>
			</div>
			<mt-cell label="修改" class='shopcar-cell'>
				<section class='price' slot='title' v-on:click='edit(item)'>
					<i class='price-now f-fsn f-fs1'>¥{{item.totalPrice}}</i>
					<i class='iconfont color-grey f-fr' style='font-size: 12px' slot='icon'>修改 &#xe631;</i>
				</section>
			</mt-cell>
			<mt-cell v-if='item.remark' class='shopcar-cell'>
			  <p class='remark f-fs1' slot='title'><i class='offer f-ib f-tac f-fsn'>惠</i>{{item.remark}}</p>
			</mt-cell>
		</div>
		<br>
		<mt-field label="联系人" v-model="contact"></mt-field>
		<mt-field label="备注" v-model="remark" type="textarea" rows="2"></mt-field>
		<footer class='footer' v-if='checkShow'>
		  <label class='amount'>
		    <input type='checkbox' class='' v-model='selectedAll' v-on:click='toggleAll'> {{selectedAll ? '全不选' : '全选'}}
			</label>
			<mt-button type="default" v-bind:disabled='selectedOrders.length == 0 ? true : false' class='sub' size='small' v-on:click='del'>删除</mt-button>
		</footer>
		<footer class='footer' v-else>
		  <section class='amount'>合计：<i class='f-fsn'>¥{{amount}}</i></section>
			<mt-button type="default" v-bind:disabled='orders.length == 0 || contact == "" ? true : false' class='sub' size='small' v-on:click='submit'>提交({{orders.length}})</mt-button>
		</footer>
		<tabbar selected='/shopcar'></tabbar>
		<ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected'></ccustomer>
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>