import { Swipe, SwipeItem, Toast } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'goodShow',
	props: {
	},
	data() {
		return {
			good: {},
			activited: '1',
			cusVisible: false,
			popupVisible: false,
			selected: {
				lotnums: [
				]
			},
			selectedLot: {},
			editingPrice: '',
			totalCount: 0,
			totalPrice: 0
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		currentCustomer() {
			return this.$store.state.shopcar.customer
		},
		shopcar() {
			return this.$store.state.shopcar.data
		}
	}, 
	mounted() {
		let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
	},
	created() {
		this.show()
	},
	components: {
		Swipe,
		SwipeItem,
		ccustomer,
		cshopcar
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		show() {
			this.$http.get("/api/m/product/findProductById", {params: {productId: this.$route.params.id, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.good = res.data.data.product
			})
		},
		showCus() {
			if(this.good.stock == 0) {
				Toast({
					message: '该产品库存为零'
				})
			}else{
				if(this.currentCustomer.customerId || this.user.customerType  == 1) {
					this.handleCusSelected()
				}else{
					this.$refs.ccustomer.cusShow()
				}
			}
		},
		handleCusSelected() {
			this.$refs.cshopcar.edit(this.good)
		}
	}
}