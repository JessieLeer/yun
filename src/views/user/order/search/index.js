import { MessageBox,Toast } from 'mint-ui'

export default {
	name: 'userOrderSearch',
	data() {
		return {
			name: '',
			page: {
				current: 1,
				total: 1
			},
			orders: [],
			contentH: 0,
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
	},
	mounted() {
		this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
	},
 	methods: {
		index(page) {
			this.cusVisible = false
			this.$http.get('/api/m/order/findOrderByUserSearchKey', {params: {size: 10, start: page, userId: this.user.id, productName: this.name}}).then((res) => {
				this.orders = this.orders.concat(res.data.data)
			})
		},
		cancel(billId) {
			MessageBox({
				title: '',
				message: '确定取消这组商品吗?',
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				if(action == 'confirm') {
					this.$http.delete('/api/m/order/deleteOrderByOrderID', {params: {billId: billId}}).then((res) => {
						Toast({
							message: res.data.message
						})
						if(res.data.code == 'success') {
							window.setTimeout(() => {
								window.location.reload()
							},1000)
						}
					})
				}
			})
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.orders = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
	}
}