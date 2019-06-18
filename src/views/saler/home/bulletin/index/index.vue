<template>
  <div class='inner-main'>
	  <mt-header title="通知公告" class='header'>
			<mt-button icon="back" slot='left' v-on:click='back'></mt-button>
		</mt-header>
		<ul class='news'>
		  <li v-for='(item,index) in news' v-bind:key='index' class='new' v-on:click='go("/bulletin/show")'>
			  <header class='new-header'>
				  <h3 class='new-type'>{{item.type}}</h3>
					<time class='new-time f-tar f-fs1'>{{item.created_at}}</time>
				</header>
				<section class='new-body'>
				  <h4 class='new-title'>{{item.title}}</h4>
					<p class='new-con f-fs2'>{{item.content.substr(0,60)}}...</p>
				</section>
			</li>
		</ul>
	</div>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>