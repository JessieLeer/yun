<template>
  <div class='inner-main'>
	  <mt-header fixed class='header' title="促销商品">
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<ul class='hots f-tac'>
					<li class='hot f-tal f-ib' v-for='(item,index) in hots' v-bind:key='index'>
						<router-link to='/'>
							<img v-bind:src='item.image' class='hot-image'>
							<h3 class='hot-name f-fs2'>{{item.name}}</h3>
							<mt-badge size="small" color='#fafafa' class='hot-badge'>{{item.specification}}</mt-badge>
							<mt-badge size='small' color='#fafafa' class='hot-badge'>{{item.formulation}}</mt-badge>
							<i class='hot-sold f-fsn f-db f-tar f-fs1'>¥{{item.price}}</i>
						</router-link>
					</li>
				</ul>
			</mt-loadmore>
			<p class='nomore f-tac f-fs1'>{{isAllLoaded ? '没有更多了' : '下拉刷新'}}</p>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>