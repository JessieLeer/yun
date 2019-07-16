import { MessageBox } from 'mint-ui'

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
			MessageBox({
				title: '',
				message: `确定退出?`,
				showCancelButton: true,
			}).then((action) => {
				if(action == 'confirm') {
					this.$store.commit('shopcarClear')
					this.$store.commit('shopcarCusClear')
					this.$store.commit('customerClear')
					this.$store.commit('logout')
					window.setTimeout(() => {
						this.$router.push('/login')
					},1000)
				}
			})
		}
	}
}