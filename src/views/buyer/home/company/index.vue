<template>
  <div class='inner-main'>
	  <mt-header fixed class='header' v-bind:title="company.name">
			<router-link to="/index1" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<header class='company-header f-tac'>
		  <img src='../../../../assets/image/company.png' width='241'>
		</header>
		<div class='card'>
		  <i class='iconfont f-tar'>&#xe652;</i>
			<section class='card-info'>
			  <h4 class='card-hd f-fs2'>公司介绍</h4>
				<p class='color-7a7a7a f-fs1'>{{company.intro}}</p>
			</section>
		</div>
		<div class='card'>
		  <i class='iconfont f-tar'>&#xe629;</i>
			<section class='card-info'>
			  <h4 class='card-hd f-fs2'>基本信息</h4>
				<p class='color-7a7a7a f-fs1'>企业名称：{{company.name}}</p>
			</section>
		</div>
		<div class='card'>
		  <i class='iconfont f-tar'>&#xe628;</i>
			<section class='card-info'>
			  <h4 class='card-hd f-fs2'>经营范围</h4>
				<p class='color-7a7a7a f-fs1'>{{company.range}}</p>
			</section>
		</div>
		<div class='card'>
		  <i class='iconfont f-tar'>&#xe65c;</i>
			<section class='card-info'>
			  <h4 class='card-hd f-fs2'>企业资质</h4>
				<div class=''>
			  	<img v-for='(item,index) in company.qualifications' v-bind:key='index' v-bind:src='item' class='quali f-ib' width='200'>
				</div>
			</section>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>