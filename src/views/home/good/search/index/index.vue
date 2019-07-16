<template>
  <div class='inner-main'>
	  <csearch v-bind:searchor='search' v-on:handleBack='back'></csearch>
		<div v-if='histories.length > 0 && search.result.length == 0'>
			<mt-cell title="历史搜索" class='history' v-if='search.result.length == 0'>
				<i class='del iconfont' v-on:click='clearHistory()'>&#xe650;</i>
			</mt-cell>
			<mt-badge size="normal" color='#eee' class='badge f-ib f-vat' v-for='(item,index) in histories' v-bind:key='index'>
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
