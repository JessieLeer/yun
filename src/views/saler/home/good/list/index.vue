<template>
  <div class='inner-main'>
	  <header class='header'>
		  <mt-button icon="back" class='back' v-on:click='back'></mt-button>
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
							<dt class='color-grey'>批号：</dt>
							<dd>{{item.lotNum}}</dd>
						</dl>
						<dl class='f-ib f-fs1'>
							<dt class='color-grey'>库存：</dt>
							<dd>{{item.store}}</dd>
						</dl>
						<dl class='f-ib f-fs1'>
							<dt class='color-grey'>失效日期：</dt>
							<dd>{{item.deadline}}</dd>
						</dl>
						<p class='order-bread f-fs1'>{{item.company}}</p>
					</section>
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