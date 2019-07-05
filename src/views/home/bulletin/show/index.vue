<template>
  <div class='inner-main'>
	  <mt-header v-bind:title="notice.article.title" class='header'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<div class='con' v-html='notice.content'></div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>