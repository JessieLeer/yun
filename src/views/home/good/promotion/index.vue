<template>
  <div class='inner-main'>
	  <mt-header fixed class='header' title="促销商品">
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<div ref="wrapper" v-bind:style="{height: contentH + 'px'}" style="overflow: scroll;">
			<mt-loadmore v-bind:top-method="loadTop" v-bind:bottom-method="loadBottom" ref="loadmore" v-bind:bottom-all-loaded="isAllLoaded" v-bind:auto-fill='false'>
				<ul class='hots f-tac'>
					<li class='hot f-tal f-ib' v-for='(item,index) in hots' v-bind:key='index'>
						<router-link v-bind:to='"/good/show/" + item.id'>
							<img v-bind:src='item.photos ? item.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg"' class='hot-image'>
							<h3 class='hot-name f-fs2'>{{item.name}}</h3>
							<mt-badge size="small" color='#fafafa' class='hot-badge'>{{item.chpgg}}</mt-badge>
							<mt-badge size='small' color='#fafafa' class='hot-badge'>{{item.jx}}</mt-badge>
							<i class='hot-sold f-fsn f-db f-tar f-fs1'>已售{{item.sales}}件</i>
						</router-link>
					</li>
				</ul>
			</mt-loadmore>
			<p class='nomore f-tac f-fs1'>{{isAllLoaded ? '没有更多了' : '下拉刷新'}}</p>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>