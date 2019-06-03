export default {
	name: 'shopcaResult',
	data() {
		return {
			
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