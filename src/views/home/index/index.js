import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar/index.vue'

export default {
	name: 'index',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			banners: [],
			notices: [],
			classOption: {
				step: 0.2,
				limitMoveNum: 2
			},
			hots: [],
			page: {
				current: 1,
				total: 1
			},
			contentH: 0,
			moreshow: false
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
	components: {
		Swipe,
		SwipeItem,
		vueSeamlessScroll,
		tabbar
	},
	mounted() {
		this.$nextTick(() => {
			let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		  document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
			
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
	},
	created() {
		this.tenantShow()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		tenantShow() {
			let url = window.location.href
			this.$http.get('/api/m/user/findTenantId', {params: {url: url}}).then((res) => {
				this.$store.commit('tenantShow')
				this.bannerIndex(res.data.data)
		    this.noticeIndex(res.data.data)
				this.hotIndex(1,res.data.data)
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
		/* 获取热销产品 */
		hotIndex(page,tenantId) {
			if(this.user.id) {
				this.$http.get('/api/m/product/findProductsBySalesDesc', {params: {tenantId: this.user.groupId, userId: this.user.id, start: page, size: 10}}).then((res) => {
					this.hots = this.hots.concat(res.data.data)
					this.page.total = Math.ceil(res.data.totalSize/20)
				})
			}else{
				this.$http.get('/api/m/product/findProductByTenantId', {params: {tenantId: tenantId, start: page, size: 10}}).then((res) => {
					this.hots = this.hots.concat(res.data.data)
					this.page.total = Math.ceil(res.data.totalSize/20)
				})
			}
			
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.hots = []
			this.hotIndex(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.hotIndex(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
	}
}