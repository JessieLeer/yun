<template>
  <div class='inner-main'>
	  <header class='header'>
		  <i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
			<mt-search class='search search-good' v-model="search.name" cancel-text="取消" placeholder="搜索商品名称/商品编号/助记码"></mt-search>
		</header>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<div class='order-wrapper mt-10' v-for='(item,index) in goods' v-bind:key='index' v-on:click='go("/good/show")'>
					<section class='order-image'>
						<img v-bind:src='item.image' width='94' class='f-fl'>
					</section>
					<section class='order-info'>
						<h4 class='order-title f-fs2'>{{item.name}}</h4>
						<p class='order-bread f-fs1'>{{item.specification}}</p>
						<dl class='f-ib f-fs1'>
							<dt class='color-grey'>库存：</dt>
							<dd>{{item.store}}</dd>
						</dl>
						<dl class='f-ib f-fs1'>
							<dt class='color-grey'>失效日期：</dt>
							<dd>{{item.deadline}}</dd>
						</dl>
						<p class='order-bread f-fs1 f-pr' v-on:click.stop.prevent='edit(item)'>
						  {{item.company}}
						  <i class='add f-fsn'>+</i>
						</p>
					</section>
				</div>
			</mt-loadmore>
		</div>
		<nav class='portnav'>
		  <router-link to='/index'>
			  <i class='iconfont'>&#xe60c;</i>
			</router-link>
			<router-link to='/user/index'>
			  <i class='iconfont'>&#xe60f;</i>
			</router-link>
			<router-link to='/shopcar' class='f-pr'>
			  <i class='iconfont' style='border-right: none; font-size: 28px; top: 1px;'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
		<ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected'></ccustomer>
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>