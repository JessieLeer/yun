<template>
  <div class='csearch'>
		<header class='header'>
			<mt-button icon="back" class='back' v-on:click='handleBack'></mt-button>
			<form action='' class='search'>
			  <mt-search v-model="search.name" cancel-text="取消" placeholder="商品名称/助记码" class='w-100 search-gooder f-fr' ref='search' @keyup.native.enter="searcher"></mt-search>
			</form>
		</header>
		<mt-cell v-for="(item,index) in search.result" v-bind:key='index' is-link v-bind:to='`/good/show/${item.id}`'>
			<section slot='title' class='title f-fs2'>
				{{item.productName}} 
				<mt-badge size="small" color='#B3B3B3' class='f-fr'>{{item.shchchj.substr(0,6)}}...</mt-badge>
			</section>
		</mt-cell>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>