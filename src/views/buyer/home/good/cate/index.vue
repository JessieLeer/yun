<template>
  <div class='inner-main'>
	  <header class='header'>
		  <mt-button icon="back" class='back' v-on:click='back'></mt-button>
		  <mt-cell class='search f-csp'>
			  <section slot='title'>
				  <i class='iconfont'>&#xe639;</i>
			 	  搜索商品名称/商品编号/助记码
				</section>
			</mt-cell>
		</header>
		<div class='cate-wrapper'>
		  <aside class='cate-first' ref='aside'>
			  <ul class='cate-first-list f-tac f-fs2'>
				  <li class='cate-first-item' v-bind:class='curcate == item.id ? "cur" : "def"' v-for='(item,index) in cate.firsts' v-bind:key='index' v-on:click='changeCate(item.id)'>{{item.name}}</li>
				</ul>
			</aside>
			<div class='cate-con'>
			  <div v-for='(item,index) in cateData' v-bind:key='index'>
					<mt-cell v-bind:title="item.name" to="/search1/result" is-link class='second-name'></mt-cell>
					<ul class='cate-thirds'>
						<li class='cate-third f-tac f-ib' v-for='(child,i) in item.children'>
							<router-link to='/search1/result'>
								<img v-bind:src='child.image' class='cate-image'>
								<h4 class='cate-name'>{{child.name}}</h4>
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