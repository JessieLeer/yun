import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'
import cportnav from '@/components/portnav/index.vue'

export default {
	name: 'orderGood',
	data() {
		return {
			search: {
				name: '',
				results: [
				]
			},
			page: {
				current: 1,
				total: 1
			},
			contentH: 0,
			goods: [],
			regulars: [],
			shopcars: [],
			cusVisible: this.$store.state.shopcar.customer.customerId || this.$store.state.user.customerType == 1 ? false : true,
			popupVisible: false,
			selected: {
				lotnums: []
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
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
	},
	watch: {
		'search.name'(newValue, oldValue) {
			this.$http.get('/api/m/product/findProductBySearchKey', {params: {key: newValue, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.search.results = res.data.data
			})
		}, 
		'search.results'(newVal, oldValue) {
			if(newVal.length > 0) {
				document.getElementsByClassName('mint-search')[0].style.height = '100vh'
			}else{
				document.getElementsByClassName('mint-search')[0].style.height = 'auto'
			}
		} 
	},
	components: {
		ccustomer,
		cshopcar,
		cportnav
	},
	mounted() {
		this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
	},
	created() {
		this.handleCusSelected(1)
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		handleCusSelected(page) {
			if(this.currentCustomer.customerId) {
				/*-- 获取购物车列表 --*/
				this.$http.get('/api/m/shopping/getShoppingCartByUser', {params: {
				customerId: this.currentCustomer.customerId,
					userId: this.user.id
				}}).then((res) => {
					this.shopcars = res.data.data
				})
				
				if(this.$route.params.keyword == 'none') {
					/*-- 获取用户常购清单 --*/
					this.$http.get('/api/m/product/findProductOftenByUser', {params: { userId: this.user.id}}).then((res) => {
						this.regulars = res.data.data
					})
				}else{
					/*-- 获取搜索结果 --*/
					this.$http.get('/api/m/product/findProductsBytenantIdDesc', {params: {tenantId: this.user.groupId, userId: this.user.id, key: this.$route.params.keyword, size: 10, start: page}}).then((res) => {
						this.goods = this.goods.concat(res.data.data)
						this.page.total = Math.ceil(res.data.totalSize/10)
					})
				}
			}
		},
		searcher() {
			this.$router.push(`/order/good/${this.search.name}`)
			window.location.reload()
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.goods = []
			this.handleCusSelected(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.handleCusSelected(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
		edit(productId) {
			this.$http.get("/api/m/product/findProductById", {params: {productId: productId, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.$refs.cshopcar.edit(res.data.data.product)
			})
		}
	}
}