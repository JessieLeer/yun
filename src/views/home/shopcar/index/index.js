import { MessageBox,Toast } from 'mint-ui'
import tabbar from '@/components/tabbar/index.vue'
import tabbar1 from '@/components/tabbar1/index.vue'
import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'shopcar',
	data() {
		return {
			selectedOrders: [],
			checkShow: false,
			selectedAll: false,
			cusVisible: false,
			popupVisible: false,
			selected: {
				lotnums: []
			},
			orders: [],
			selectedLot: {},
			editingPrice: '',
			totalCount: 0,
			totalPrice: 0,
			contact: '',
			remark: '',
			contactVisible: false,
			activities: []
		}
	},
	components: {
		tabbar,
		tabbar1,
		ccustomer,
		cshopcar
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		currentCustomer() {
			return this.$store.state.shopcar.customer
		},
		amount() {
			let amount = 0
			for(let item of this.orders) {
				amount += item.totalPrice
			}
			return amount
		},
		accountingTotal() {
			let accounting = 0
			let lotnums = this.orders.map((item) => {
				return item.pihaoVO
			})
			for(let lotnum of lotnums) {
				for(let item of lotnum) {
					accounting += parseInt(item.accountingPrice) * item.count
				}
			}
			return accounting
		},
		cartIds() {
			return this.orders.map((item) => {
				return item.id
			})
		},
		lotnums() {
			let lotnums = []
			for(let order of this.orders) {
				for(let item of order.pihaoVO) {
					lotnums.push({
						floorPrice: item.accountingPrice,
						groupId: this.user.groupId,
						hw: item.hw,
						hz: item.hz,
						productName: order.name,
						pihao: item.pihao,
						price: item.price,
						productId: item.productId,
						shl: item.count
					})
				}
			}
			return lotnums
		}
	},
	watch: {
		selectedOrders(val, oldVal) {
			if(val.length == this.orders.length) {
				this.selectedAll = true
			}else{
				this.selectedAll = false
			}
		}
	},
	created() {
		this.handleCusSelected()
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		toggleAll() {
			this.selectedOrders = []
			if(this.selectedAll) {
			}else{
				for(let item of this.orders){
					this.selectedOrders.push(item.id)
				}
			}
		},
		del() {
			MessageBox({
				title: '',
				message: `确定删除这${this.selectedOrders.length}件商品?`,
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				if(action == 'confirm') {
					this.$http.delete('/api/m/shopping/deleteShoppingCart', {data: this.selectedOrders}).then((res) => {
						Toast({
							message: res.data.message
						})
						if(res.data.code == 'success') {
							this.$store.dispatch('shopcarIndex')
							window.setTimeout(() => {
								window.location.reload()
							},1000)
						}
					})
				}
			})
		},
		handleCusSelected() {
			if(this.currentCustomer.customerId || this.user.customerType == 1) {
				this.$http.get('/api/m/shopping/getShoppingCartByUser', {params: {
				customerId: this.currentCustomer.customerId ? this.currentCustomer.customerId : '',
					userId: this.user.id,
					tenantId: this.user.groupId
				}}).then((res) => {
					this.activities = res.data.data.recommendVOS
					for(let item of res.data.data.shoppingCarts){
						let totalPrice = 0
						for(let lot of item.pihaoVO){
							totalPrice += lot.count*(lot.price*1000)/1000
						}
						this.$set(item, 'totalPrice', totalPrice)
					}
					this.orders = res.data.data.shoppingCarts
				})
			}
		},
		edit(order) {
			this.$http.get("/api/m/product/findProductById", {params: {productId: order.productId, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.$refs.cshopcar.edit(res.data.data.product)
			})
		},
		submit() {
			if(this.contact == '') {
				Toast({
					message: '请填写联系人'
				})
			}else{
				this.$http.post('/api/m/order/saveOrder', {
					beizhu: this.remark,
					cost: this.amount, 
					floorPrice: this.accountingTotal,
					groupId: this.user.groupId,
					lxr: this.contact,
					orderForm: 'mobile',
					orderId: this.user.id,
					cartIds: this.cartIds,
					userId: this.currentCustomer.customerId ,
					customerName: this.currentCustomer.customerName,
					orderMessageDetailVOs: this.lotnums
				}).then((res) => {
					if(res.data.code == 'success') {
						this.$store.commit('shopcarClear')
						this.$router.push(`/shopcar/result/${this.amount}`)
					}else{
						Toast({
							message: res.data.message
						})
					}
				})
			}
		}
	}
}