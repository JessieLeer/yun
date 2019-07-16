export default {
	name: 'UserCustomer',
	data() {
		return {
		}
	},
	computed: {
		customers() {
			let customers = []
      for(let item of this.$store.state.customer.data){
				customers = customers.concat(item.datas)
			}
			return customers
		}
	},
	created() {
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
	}
}