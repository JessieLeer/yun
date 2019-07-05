import { MessageBox,Toast } from 'mint-ui'
import ccustomer from '@/components/customer/index.vue'

export default {
	name: 'userOrder',
	data() {
		return {
			search: {
				customers: [],
				order: '',
				status: ''
			},
			page: {
				current: 1,
				total: 1
			},
			cusVisible: false,
			orders: [],
			contentH: 0,
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		customers() {
			let customers = this.$store.state.customer.data
			for(let customer of customers) {
				this.$set(customer, 'options', [])
			}
			for(let customer of customers) {
				for(let data of customer.datas) {
					customer.options.push({
						label: data.customerName,
						value: data.customerId
					})
				}
			}
			return customers
		},
		customersFormat() {
			if(this.search.customers.length == 0) {
				return null
			}else{
				let firstId = this.search.customers[0]
				for(let customer of this.customers) {
					if(customer.datas.filter((item) => {
						return item.customerId = firstId
					}).length > 0){
						return customer.datas.filter((item) => {
						  return item.customerId = firstId
					  })[0].customerName
					}
				}
			}
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
	created() {
		this.index(1)
	},
	components: {
		ccustomer
	},
	methods: {
		handleCustomerSelect() {
			this.orders = []
			this.index(1)
		},
		changeStatus(status) {
			this.search.status = status
			this.orders = []
			this.index(1)
		},
		index(page) {
			this.cusVisible = false
			this.$http.get('/api/m/order/findOrderByUserSearchKey', {params: {customerId: this.search.customers.join(','),size: 10, start: page, status: this.search.status, userId: this.user.id}}).then((res) => {
				this.orders = this.orders.concat(res.data.data)
			})
		},
		cancel(billId) {
			MessageBox({
				title: '',
				message: '确定删除该组商品?',
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