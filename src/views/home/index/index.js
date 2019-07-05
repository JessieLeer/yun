import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar/index.vue'

export default {
	name: 'index',
	data() {
		return {
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
		this.bannerIndex()
		this.noticeIndex()
		this.hotIndex(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		bannerIndex() {
			this.$http.get('/api/m/notice/findBannerByTenantId', {params: {tenantId: this.user.groupId}}).then((res) => {
				this.banners = res.data.data
			})
		},
		noticeIndex() {
			this.$http.get('/api/m/notice/getAllNotice', {params: {tenantId: this.user.groupId}}).then((res) => {
				this.notices = res.data.data
			})
		},
		/* 获取热销产品 */
		hotIndex(page) {
			this.$http.get('/api/m/product/findProductsBySalesDesc', {params: {tenantId: this.user.groupId, userId: this.user.id, start: page, size: 10}}).then((res) => {
				this.hots = this.hots.concat(res.data.data)
				this.page.total = Math.ceil(res.data.totalSize/10)
			})
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