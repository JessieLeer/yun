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
	computed: {
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
		}
	}
}