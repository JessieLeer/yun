export default {
	name: 'ccustomer',
	props: {
		cusVisibler: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			cusVisible: this.cusVisibler,
			search: {
				name: ''
			},
		}
	},
	computed: {
		customers() {
			return this.$store.state.customer.data
		}
	},
	methods: {
		groupVisiable(group) {
			let datas = this.customers.filter((item) => {
				return item == group
			})[0].datas
			if(group.group == this.search.name.toUpperCase()){
				return true
			}else {
				for(let item of datas){
					if(item.customerName.indexOf(this.search.name) != -1){
						return true
					} 
				}
			}
			return false
		}, 
		cusShow() {
			this.cusVisible = true
		},
		selected(cus) {
			this.cusVisible = false
			this.$store.commit('cusChose',cus)
			this.$emit('handleCusSelected',cus)
		}
	}
}