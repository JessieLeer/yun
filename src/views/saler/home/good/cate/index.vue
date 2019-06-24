<template>
  <div class='inner-main'>
	  <header class='header'>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		  <mt-cell class='search f-csp'>
			  <section slot='title' v-on:click='go("/good/list")'>
				  <i class='iconfont'>&#xe639;</i>
			 	  <i class='f-fs1 f-fsn'>搜索商品名称/商品编号/助记码</i>
				</section>
			</mt-cell>
		</header>
		<div class='cate-wrapper'>
		  <aside class='cate-first' ref='aside'>
			  <ul class='cate-first-list f-tac f-fs2'>
				  <li class='cate-first-item' v-bind:class='curcate == item.id ? "cur" : "def"' v-for='(item,index) in cate.firsts' v-bind:key='index' v-on:click='changeCate(item.id)'>{{item.categoryName}}</li>
				</ul>
			</aside>
			<div class='cate-con'>
			  <p v-if='cateData.length == 0' class='f-tac'>当前分类下无数据</p>
			  <div class='cate-con-wrapper' v-for='(item,index) in cateData' v-bind:key='index' v-else>
					<mt-cell v-bind:title="item.categoryName" to="/good/list" is-link class='second-name'></mt-cell>
					<p class='cate-thirds f-tac' v-if='item.productCategoryVOS.length == 0'>当前分类下无数据</p>
					<ul class='cate-thirds' v-else>
						<li class='cate-third f-tac f-ib' v-for='(child,i) in item.productCategoryVOS'>
							<router-link to='/good/list'>
								<img v-bind:src='child.photos ? child.photos : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg"' class='cate-image'>
								<h4 class='cate-name f-fs2 f-fwn'>{{child.categoryName}}</h4>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>