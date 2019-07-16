import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar1/index.vue'
import cportnav from '@/components/portnav/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'index1',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			shop: {
				name: '红星美凯龙'
			},
			banners: [],
			notices: [],
			classOption: {
				step: 0.2,
				limitMoveNum: 2
			},
			current: '1',
			regulars: [],
			popupVisible: false,
			good: {
				data: [],
				total: 0,
				filter: ''
			},
			page: {
				current: 1,
				total: 1,
			},
			contentH: 0,
			selected: {
				lotnums: [],
				count: 0
			},
			selectedLot: {},
			editingPrice: '',
			tenantId: ''
		}
	},
	components: {
		Swipe,
		SwipeItem,
		vueSeamlessScroll,
		tabbar,
		cshopcar,
		cportnav
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
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
		goodUrl() {
			let url
			switch(this.good.filter) {
				case '':
				  url = '/api/m/product/findProductsBytenantIdDesc'
					break
				case '推荐':	
				  url = '/api/m/product/findProductHomeRecommend'
					break
				case '新品':
					url = '/api/m/product/findProductsBytenantIdDesc'
					break
				case '销量':
					url = '/api/m/product/findProductsBySalesDesc'
					break
			}
			return url
		}
	},
	watch: {},
	created() {
		this.tenantShow()
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
			
			let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
			
		  document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
			
			window.addEventListener('scroll', this.handleScroll, true)
    })
  },
	methods: {
		go(url) {
			this.$router.push(url)
		},
		handleScroll () {
			let st = document.body.scrollTop
			if(document.getElementsByClassName('tab-nav')[0] != undefined) {
				if(st > 530) {
					document.getElementsByClassName('tab-nav')[0].style.position = 'fixed'
					document.getElementsByClassName('tab-nav')[0].style.left = document.body.clientWidth > 750 ? (document.body.clientWidth - 750)/2 + 'px' : '0'
					document.getElementsByClassName('tab-nav')[0].style.top = '60px'

					document.getElementsByClassName('good-header')[0].style.position = 'fixed'
					document.getElementsByClassName('good-header')[0].style.left = document.body.clientWidth > 750 ? (document.body.clientWidth - 750)/2 + 'px' : '0'
					document.getElementsByClassName('good-header')[0].style.top = '100px'
				}else{
					document.getElementsByClassName('tab-nav')[0].style.position = 'inherit'
					document.getElementsByClassName('good-header')[0].style.position = 'inherit'
				}
			}
		},
		tenantShow() {
			let url = window.location.href
			this.$http.get('/api/m/user/findTenantId', {params: {url: url}}).then((res) => {
				this.$store.commit('tenantShow',res.data.data)
				this.bannerIndex(res.data.data)
		    this.noticeIndex(res.data.data)
				this.regularIndex(res.data.data)
				this.index(1,res.data.data)
			})
		},
		bannerIndex(tenantId) {
			this.$http.get('/api/m/notice/findBannerByTenantId', {params: {tenantId: tenantId}}).then((res) => {
				this.banners = res.data.data
			})
		},
		noticeIndex(tenantId) {
			this.$http.get('/api/m/notice/getAllNotice', {params: {tenantId: tenantId}}).then((res) => {
				this.notices = res.data.data
			})
		},
		regularIndex(tenantId) {
			if(this.user.id) {
				this.$http.get('/api/m/product/findProductsBySalesDesc', {params: {tenantId: tenantId, userId: this.user.id, start: 1, size: 20}}).then((res) => {
					this.regulars = res.data.data
					console.log(res.data.data)
				})
			}else{
				this.$http.get('/api/m/product/findProductsBySalesDesc', {params: {tenantId: tenantId, start: 1, size: 20}}).then((res) => {
					this.regulars = res.data.data
				})
			} 
			
		},
		index(page,tenantId) {
			if(this.user.id) {
				this.$http.get(this.goodUrl, {params: {userId: this.user.id, tenantId: tenantId, start: page, size: 20}}).then((res) => {
					this.good.data = this.good.data.concat(res.data.data)
					this.good.total = res.data.totalSize
					this.page.total = Math.ceil(res.data.totalSize/20)
				})
			}else{
				this.$http.get('/api/m/product/findProductByTenantId', {params: {tenantId: tenantId, start: page, size: 20}}).then((res) => {
					this.good.data = this.good.data.concat(res.data.data)
					this.good.total = res.data.totalSize
					this.page.total = Math.ceil(res.data.totalSize/20)
				})
			}
		},
		goodFilter() {
			this.good.data = []
			this.index(1, this.$store.state.config.tenantId)
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.good.data = []
			this.index(this.page.current, this.$store.state.config.tenantId)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1,this.$store.state.config.tenantId)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
		edit(productId) {
			this.$http.get("/api/m/product/findProductById", {params: {productId: productId, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.$refs.cshopcar.edit(res.data.data.product)
			})
		},
		changeFilter(val) {
			this.good.filter = val
			this.goodFilter()
		}
	}
}