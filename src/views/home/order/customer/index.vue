<template>
  <div class='inner-main'>
	  <mt-header title="选择采购商" class='header' fixed>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<mt-search v-model="search.name" cancel-text="取消" placeholder="采购商名称/助记码" class='search'></mt-search>
		<mt-index-list>
			<mt-index-section v-for='(item,index) in customers' v-bind:key='index' v-bind:index="item.group" v-if='groupVisiable(item)'>
				<mt-cell v-for='(cus,i) in item.datas' v-bind:title="cus" v-bind:key='i' v-if='cus.indexOf(search.name) != -1 || search.name.toUpperCase() == item.group' is-link to='/order/good/none'></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>