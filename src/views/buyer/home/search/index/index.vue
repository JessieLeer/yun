<template>
  <div class='inner-main'>
	  <mt-header title="商品搜索" fixed class='header'>
			<mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<mt-search v-model="search.name" class='search' cancel-text="取消" placeholder="商品名称/助记码"></mt-search>
		<div v-if='histories.length > 0'>
			<mt-cell title="历史搜索" class='history' v-if='search.result.length == 0'>
				<i class='del iconfont' v-on:click='clearHistory()'>&#xe650;</i>
			</mt-cell>
			<mt-badge size="normal" color='#eee' class='badge' v-for='(item,index) in histories' v-bind:key='index'>{{item}}</mt-badge>
		</div>
		<div class='result' v-if='search.result.length > 0'>
		  <mt-cell class='badge-cell' to='/search1/result' v-for='(item,index) in search.result' v-bind:key='index' v-bind:title="item.name" id-link>
			  <mt-badge size="normal" color='#F5F5F5' class='badge f-fs1' v-for='(badge,i) in item.badges' v-bind:key='i'>{{badge}}</mt-badge>
			</mt-cell>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>
