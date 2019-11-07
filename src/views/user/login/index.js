import { Toast } from 'mint-ui'

export default {
	name: 'login',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			name: '',
			password: '',
			state: {
				name: '',
				password: ''
			},
			tenantId: this.$store.state.config.tenantId,
			logo: ''
		}
	},
	watch: {
		name(val) {
			this.state.name = val == '' ? 'warning' : 'success'
		},
		password(val) {
			this.state.password = val.length < 1 ? 'warning' : 'success'
		}
	},
	computed: {
		isSubable() {
			for(let item in this.state) {
				if(this.state[item] == 'success'){					
				}else{
					return true
				}
			}
			return false
		}
	},
	created() {
		this.logoShow()
	},
	methods: {
		/*-- 获取logo图片 --*/
		logoShow() {
			this.$http.get('/api/m/notice/findLogoByTenantId', {params: {tenantId: this.tenantId}}).then((res) => {
				this.logo = this.serverUrl + res.data.data.photos
			})
		},
		loginer() {
			this.$http.get('/api/m/user/login', {params: {username: this.name, password: this.password, tenantId: this.tenantId}}).then((res) => {
				Toast({
					message: res.data.message
				})
				if(res.data.code == 'success') {
					this.$store.commit('login',res.data.data.user)
					this.$store.dispatch('customerIndex')
					/*
					 * customerType
					 * 1: 采购商
					 * 2: 供应商（暂时不用）
					 * 3: 业务员
					 */
					let url 
					switch(this.$store.state.user.customerType) {
						case '1':
							url = '/index1'
							break
						case '3':
							url = '/index'
							break
					}
					window.setTimeout(() => {
						this.$router.push(url)
					},1500)
				}
			})
		}
	}
}