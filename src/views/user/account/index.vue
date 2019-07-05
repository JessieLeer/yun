<template>
  <div class='inner-main'>
	  <mt-header title="现金账户" class='header'>
		  <router-link to="/user/index" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<mt-cell class='pt-10 pb-10'>
			<section slot='title'>
			  <i class='money iconfont'>&#xe602;</i>
				<br>
				<i class='money-text f-fsn'>我的余额</i>
			</section>
			¥<b class='account'>{{balance}}</b>
		</mt-cell>
		<div class='f-cb'>
			<section class='w-50 f-fl'>
				<mt-button class='btn' v-on:click='typePickerShow = true'>
					{{search.type}}
					<i class='iconfont dropdown'>&#xe632;</i>
				</mt-button>
				<mt-button class='btn' v-on:click='openMonth'>
					{{monthFormat}}
					<i class='iconfont dropdown'>&#xe632;</i>
				</mt-button>
			</section>
			<section class='count w-50 f-fs2 f-fr f-tar' v-bind:style='search.type == "全部" ? "line-height: 16px" : "line-height: 32px"'>
				<dl class='' v-if='search.type != "扣款"'>
					<dt class='f-ib'>充值</dt>
					<dd class='f-ib'>¥{{rechargeTotal}}</dd>
				</dl>
				<dl class='' v-if='search.type != "充值"'>
					<dt class='f-ib'>扣款</dt>
					<dd class='f-ib'>¥{{deductionTotal}}</dd>
				</dl>
			</section>
		</div>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<mt-cell v-for='(item,index) in bills' v-bind:key='index' v-bind:title="item.type + '类型：' + item.conType" v-bind:label="item.time" class='user-account f-pr pt-30'>
				  <b class='type f-fwn'>{{item.type}}</b>
				  <b class='account'>{{item.amount}}</b>
				</mt-cell>
			</mt-loadmore>
		</div>
		<mt-popup v-model="typePickerShow" position="bottom" class='w-100'>
			<mt-picker :slots="slots" @change="onValuesChange" ref='typePicker' class='picker' showToolbar>
				<section class='w-100 f-cb'>
					<mt-button @click="typePickerShow = false" class="sure" size='small'>取消</mt-button>
					<mt-button @click="filterBalance" class="sure f-fr" size='small'>确认</mt-button>
				</section>
			</mt-picker>
		</mt-popup>
		<mt-datetime-picker ref='monthPicker' v-model="search.month" v-bind:value='search.month' type="date" v-on:confirm='filterBalance'></mt-datetime-picker>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>