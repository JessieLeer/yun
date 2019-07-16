export default {
	name: 'userInfo',
	data() {
		return {
		}
	},
	created() {
		console.log(this.user)
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		back() {
			this.$router.back()
		}
	}
}