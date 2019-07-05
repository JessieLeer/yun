import tabbar from '@/components/tabbar1/index.vue'

export default {
	name: 'userIndex1',
	data() {
		return {
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
	},
	components: {
		tabbar,
	}
}