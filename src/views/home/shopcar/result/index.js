export default {
	name: 'shopcaResult',
	data() {
		return {
			amount: this.$route.params.amount
		}
	},
	methods: {
		handleBack() {
			this.$store.commit('shopcarCusClear')
			this.$router.push('/shopcar')
		},
		go(url) {
			this.$router.push(url)
		}
	}
}