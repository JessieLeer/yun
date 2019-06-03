<template>
  <div class='main'>
    <router-view></router-view>
	  <tabbar selected='/user/index'></tabbar>
	</div>
</template>

<style lang='stylus' scoped>
.main
	background-color: #f5f5f5
	height: 100%
</style>

<script>
import tabbar from '@/components/tabbar/index.vue'
export default {
  name: 'user',
	data() {
	  return {}
	},
	components: {
	  tabbar
	}
}
</script>