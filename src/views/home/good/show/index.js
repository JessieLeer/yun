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
			banners: [
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				},
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				},
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				}
			],
			good: {},
			activited: '1',
			cusVisible: false,
			popupVisible: false,
			shopcar: [],
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
		}
	}, 
	mounted() {
		let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
	},
	created() {
		this.show()
		this.shopcarIndex()
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
		shopcarIndex() {
			if(this.currentCustomer.customerId) {
				this.$http.get('/api/m/shopping/getShoppingCartByUser', {params: {
					customerId: this.currentCustomer.customerId,
					userId: this.user.id
				}}).then((res) => {
					this.shopcar = res.data.data
				})
			}
		},
		showCus() {
			if(this.currentCustomer.customerId || this.user.customerType  == 1) {
				this.handleCusSelected()
			}else{
				this.$refs.ccustomer.cusShow()
			}
		},
		handleCusSelected() {
			this.$refs.cshopcar.edit(this.good)
		}
	}
}