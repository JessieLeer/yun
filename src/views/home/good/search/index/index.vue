<template>
  <div class='inner-main'>
	  <mt-header title="商品搜索" fixed class='header'>
			<mt-button icon="back" slot="left" v-on:click='back'></mt-button>
		</mt-header>
		<mt-search v-model="search.name" cancel-text="取消" placeholder="商品名称/助记码" class='search search-gooder' ref='search' @keyup.native.enter="searcher">
		</mt-search>
		<mt-cell v-for="(item,index) in search.result" v-bind:key='index' v-bind:title="item.productName" is-link v-bind:to='`/good/show/${item.id}`'></mt-cell>
		<div v-if='histories.length > 0 && search.result.length == 0'>
			<mt-cell title="历史搜索" class='history' v-if='search.result.length == 0'>
				<i class='del iconfont' v-on:click='clearHistory()'>&#xe650;</i>
			</mt-cell>
			<mt-badge size="normal" color='#eee' class='badge' v-for='(item,index) in histories' v-bind:key='index'>
			  <router-link v-bind:to='`/good/search/result/${item.searchKey}`'>
				  {{item.searchKey}}
				</router-link>
			</mt-badge>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>
