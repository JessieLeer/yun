import { MessageBox } from 'mint-ui'

export default {
	name: 'userOrderShow',
	data() {
		return {
			order: {}
		}
	},
	created() {
		this.show()
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		show() {
			this.$http.get('/api/m/order/findOrderById',{params: {billId: this.$route.params.id}}).then((res) => {
				this.order = res.data.data
				console.log(this.order)
			})
		}
	}
}