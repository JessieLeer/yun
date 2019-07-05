export default {
	name: 'userSetting',
	data() {
		return {
			
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		logout() {
			this.$store.commit('shopcarCusClear')
			this.$store.commit('customerClear')
			this.$store.commit('logout')
			window.setTimeout(() => {
				this.$router.push('/login')
			},1000)
		}
	}
}