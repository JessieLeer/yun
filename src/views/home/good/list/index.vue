<template>
  <div class='inner-main'>
	  <csearch v-bind:searchor='search' v-on:handleBack='back'></csearch>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<div v-for='(item,index) in goods' v-bind:key='index' class='mt-10'>
					<div class='order-wrapper' v-on:click='go(`/good/show/${item.id}`)'>
						<section class='order-image'>
							<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg"' width='100' class='f-fl'>
						</section>
						<section class='order-info'>
							<h4 class='order-title f-fs2'>{{item.name}}</h4>
							<p class='order-bread mb-6 f-fs1'>{{item.chpgg}}</p>
							<p class='order-bread f-fs1'>{{item.shchchj}}</p>
							<p class='opera f-csp f-pr f-fs1' v-on:click.prevent.stop='edit(item)'>销售价格急啊购时可修改<i class='add f-fsn'>+</i></p>
						</section>
					</div>
				</div>	
			</mt-loadmore>
		</div>
		<br>
		<p class='nomore f-tac f-fs1'>
		  {{isAllLoaded ? '没有更多了' : '下拉加载更多'}}
		</p>
		<br>
	  <cportnav></cportnav>
		<ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected'></ccustomer>
		<cshopcar ref='cshopcar' v-bind:popupVisible='popupVisible' v-bind:selecteder='selected' v-bind:selectedLoter='selectedLot' v-bind:editingPricer='editingPrice' v-bind:totalCounter='totalCount' v-bind:totalPricer='totalPrice'></cshopcar>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>