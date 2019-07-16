import { MessageBox } from 'mint-ui'
import csearch from '@/components/search/index.vue'
import cportnav from '@/components/portnav/index.vue'
import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'goodList',
	data() {
		return {
			search: {
				name: '',
				result: []
			},
			goods: [
				
			],
			page: {
				current: 1,
				total: 1
			},
			cusVisible: false,
			contentH: 0,
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
		}
	},
	watch: {
		'search.name'(newValue, oldValue) {
			this.$http.get('/api/m/product/findProductBySearchKey', {params: {key: newValue, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.search.result = res.data.data
			})
		}, 
	},
	components: {
		csearch,
		cportnav,
		ccustomer,
		cshopcar
	},
	created() {
		this.index(1)
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
  },
	methods: {
		back() {
			this.$router.back()
		},
 		go(url) {
			this.$router.push(url)
		},
		index(page) {
			this.$http.get('/api/m/product/findProductByCategory', {params: {categoryId: this.$route.params.cid, size: 10, start: page, tenantId: this.user.groupId}}).then((res) => {
				this.goods = this.goods.concat(res.data.data)
				this.page.total = Math.ceil(res.data.totalSize/10)
			})
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.goods = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
		handleCusSelected(product) {
			this.$refs.cshopcar.edit(product)
		},
		edit(product) {
			if(this.currentCustomer.customerId || this.user.customerType == 1) {
				this.handleCusSelected(product)
			}else{
				this.$refs.ccustomer.cusVisible = true
			}
		},
		searcher() {
			this.$router.push(`/good/search/result/${this.search.name}`)
			window.location.reload()
		}
	}
}