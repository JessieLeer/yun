import { Toast } from 'mint-ui'

export default {
	name: 'userPassword',
	data() {
		return {
			password: {
				old: '',
				new: '',
				confirm: ''
			},
		}
	},
	mounted() {
		let h = window.innerHeight
		this.$refs.inner.style.height = h + 'px'
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		stateOld() {
			return this.password.old.length < 6 ? 'warning' : 'success'
		},
		stateNew() {
			return this.password.new.length < 6 ? 'warning' : 'success'
		},
		stateConfirm() {
			return this.password.new.length >= 6 && this.password.new == this.password.confirm ? 'success' : 'warning'
		},
		subAble() {
			let arr = ['stateOld','stateNew','stateConfirm']
			for(let item of arr) {
				if(this[item] == 'warning'){
					return false
				}
			}
			return true
		},
	},
	methods: {
		submit() {
			this.$http.put('/api/m/user/resetPwd', {userId: this.user.id, oldPwd: this.password.old, newPwd: this.password.new}).then((res) => {
				Toast({
					message: res.data.message
				})
				if(res.data.code == 'success') {
					this.$store.commit('logout')
					window.setTimeout(() => {
						this.$router.push('/login')
					},1500)
				}
			})
		}
	}
}