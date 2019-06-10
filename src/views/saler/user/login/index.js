export default {
	name: 'login',
	data() {
		return {
			name: '',
			password: '',
			state: {
				name: '',
				password: ''
			}
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
}