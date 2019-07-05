export default {
	name: 'shopcaResult',
	data() {
		return {
			amount: this.$route.params.amount
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		}
	}
}