import { popup } from 'mint-ui'
import cportnav from '@/components/portnav/index.vue'
import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'search1Result',
	data() {
		return {
			search: {
				name: this.$route.params.keyword,
				type: '全部商品',
				store: '全部库存',
				formulation: '全部剂型',
				manufacturers: [],
				result: []
			},
			stores: [
				{
					label: '全部库存',
					value: ''
				},
				{
					label: '库存>50',
					value: '50'
				},
				{
					label: '库存>100',
					value: '100'
				},
				{
					label: '库存>200',
					value: '200'
				}
			],
			formulations: [],
			manufacturers: [],
			filterVisible0: false,
			filterVisible1: false,
			filterVisible2: false,
			filterVisible3: false,
			cusVisible: false,
			isManuAll: false,
			goods: [],
			page: {
				current: 1,
				total: 1,
			},
			contentH: 0,
			popupVisible: false,
			selectedLot: {},
			selected: {
				lotnums: []
			},
			editingPrice: '',
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		currentCustomer() {
			return this.$store.state.shopcar.customer
		},
		manuSelected() {
			return this.search.manufacturers.length == this.manufacturers.length || this.search.manufacturers.length == 0 ? '全部厂家' : this.search.manufacturers.join(',').substr(0,4) + '...'
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
		monthFormat() {
			return this.msToDate(this.search.month).month
		},
		totalPrice() {
			let price = 0
			for(let item of this.selected.lotnums) {
				price += item.count * item.price
			}
			return price
		},
		totalCount() {
			let count = 0
			for(let item of this.selected.lotnums) {
				count += item.count
			}
			return count
		},
		shopcar() {
			return this.$store.state.shopcar.data
		}
	},
	watch: {
		'search.name'(newValue, oldValue) {
			this.$http.get('/api/m/product/findProductBySearchKey', {params: {key: newValue, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.search.result = res.data.data
			})
		}, 
		isManuAll(val, oldVal) {
			if(val == true) {
				this.search.manufacturers = this.manufacturers
			}
		},
		'search.manufacturers'(val, oldVal) {
			if(val.length == this.manufacturers.length) {
				this.isManuAll = true
			}else{
				this.isManuAll = false
			}
		}
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
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		manuAll() {
			this.search.manufacturers = this.manufacturers
			this.filterVisible3 = false
		},
		index(page) {
			this.$http.get('/api/m/product/findProductsBytenantIdDesc', {params: {tenantId: this.user.groupId, userId: this.user.id, key: this.search.name, size: 10, start: page, inventory: this.search.store == '全部库存' ? '' : this.search.store, formulation: this.search.formulation == '全部剂型' ? '' : this.search.formulation, vendor: this.search.manufacturers.join(','), range: this.search.type == '全部商品' ? '' : 0}}).then((res) => {
				this.goods = this.goods.concat(res.data.data)
				this.formulations = [...new Set(this.formulations.concat(this.goods.map((item) => {
					return item.jx
				})))]
				this.manufacturers = [...new Set(this.manufacturers.concat(this.goods.map((item) => {
					return item.shchchj
				})))]
				this.page.total = Math.ceil(res.data.totalSize/10)
			})
		},
		handleCusSelected(productId) {
			this.$http.get("/api/m/product/findProductById", {params: {productId: productId, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.$refs.cshopcar.edit(res.data.data.product)
			})
		},
		goodFilter(i) {
			this[`filterVisible${i}`] = false
			this.goods = []
			this.index(1)
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
		edit(productId) {
			if(this.currentCustomer.customerId || this.user.customerType == 1) {
				this.handleCusSelected(productId)
			}else{
				this.$refs.ccustomer.cusVisible = true
			}
		},
		searcher() {
			this.$router.push(`/good/search/result/${this.search.name}`)
			window.location.reload()
		}
	},
	components: {
		popup,
		cportnav,
		ccustomer,
		cshopcar
	}
}