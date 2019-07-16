<template>
  <div>
    <ccustomer ref='ccustomer' v-bind:cusVisibler='cusVisible' v-on:handleCusSelected='handleCusSelected' v-bind:backDisplayer='backDisplay'></ccustomer>
	  <cportnav v-bind:zIndexer='zIndex'></cportnav>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>