import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar/index.vue'

export default {
	name: 'index',
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
				}
			],
			notices: [
				{
					id: '1',
					title: '日本女神长泽雅美秀中文，'
				},
				{
					id: '2',
					title: '电视剧版 / 行儿的中二幻想 / HiGH&LOW-THE STORY OF S.W.O.R.D'
				}
			],
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
		this.hotIndex(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
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