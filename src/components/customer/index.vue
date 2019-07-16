<template>
  <mt-popup v-model="cusVisible" position="bottom" class='popup' v-bind:closeOnClickModal='false'>
	  <header class='pop-header'>
			<mt-button icon="back" class='back' v-on:click='close' v-bind:style='"display:" + backDisplay'></mt-button>
		  <mt-search v-model="search.name" cancel-text="取消" placeholder="采购商名称/助记码" class='search'></mt-search>
		</header>
		<div class='list-wrapper'>
			<mt-index-list>
				<mt-index-section v-for='(item,index) in customers' v-bind:key='index' v-bind:index="item.group" v-if='groupVisiable(item)' >
					<div v-on:click='selected(cus)' v-for='(cus,i) in item.datas'>
					  <mt-cell v-bind:title="cus.customerName" v-bind:key='i' v-if='cus.customerName.indexOf(search.name) != -1 || search.name.toUpperCase() == item.group' is-link></mt-cell>
					</div>
				</mt-index-section>
			</mt-index-list>
		</div>
	</mt-popup>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>