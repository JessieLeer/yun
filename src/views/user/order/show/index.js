import { MessageBox } from 'mint-ui'

export default {
	name: 'userOrderShow',
	data() {
		return {
			notice: '',
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
				switch (this.order.status) {
					case '0':
						this.notice = '下单成功，正在等待ERP提取'
						break
					case '1':
					  this.notice = '下单成功，ERP已提取'
					  break	
					case '2':
						this.notice = '您的订单已取消'
						break	
				}
			})
		}
	}
}