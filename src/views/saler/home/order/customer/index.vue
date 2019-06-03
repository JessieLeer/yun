<template>
  <div class='inner-main'>
	  <mt-header title="选择采购商" class='header' fixed>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<mt-search v-model="search.name" cancel-text="取消" placeholder="采购商名称/助记码" class='search'></mt-search>
		<mt-index-list>
			<mt-index-section v-for='(item,index) in customers' v-bind:key='index' v-bind:index="item.group">
				<mt-cell v-for='(cus,i) in item.datas' v-bind:title="cus" v-bind:key='i' v-if='cus.indexOf(search.name) != -1' is-link to='/order/good'></mt-cell>
			</mt-index-section>
		</mt-index-list>
		<nav class='portnav'>
		  <router-link to='/index'>
			  <i class='iconfont'>&#xe635;</i>
			</router-link>
			<router-link to='/index'>
			  <i class='iconfont'>&#xe634;</i>
			</router-link>
			<router-link to='/index' class='f-pr'>
			  <i class='iconfont' style='border-right: none'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>