import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar1/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'index1',
	data() {
		return {
			shop: {
				name: '红星美凯龙'
			},
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
			notices: [
				{
					id: '1',
					title: '日本女神长泽雅美秀中文，'
				},
				{
					id: '2',
					title: '电视剧版 / 行儿的中二幻想 / HiGH&LOW-THE STORY OF S.W.O.R.D'
				},
				{
					id: '3',
					title: '洼田正孝新剧开播收视率喜人，本田翼首次穿上白大褂'
				}
			],
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
		}
	},
	components: {
		Swipe,
		SwipeItem,
		vueSeamlessScroll,
		tabbar,
		cshopcar
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
		this.regularIndex()
		this.index(1)
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
			
			let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
			
		  document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
			
			this.$refs.portnav.style.left = document.body.clientWidth > 750 ? (document.body.clientWidth - 750)/2 + 10 + 'px' : '10px'
			
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
		regularIndex() {
			this.$http.get('/api/m/product/findProductHomeRecommend', {params: {tenantId: this.user.groupId, userId: this.user.id, start: 1, size: 15}}).then((res) => {
				this.regulars = res.data.data
			})
		},
		index(page) {
			this.$http.get(this.goodUrl, {params: {userId: this.user.id, tenantId: this.user.groupId, start: page, size: 10}}).then((res) => {
				this.good.data = this.good.data.concat(res.data.data)
				this.good.total = res.data.totalSize
				this.page.total = Math.ceil(res.data.totalSize/10)
			})
		},
		goodFilter() {
			this.good.data = []
			this.index(1)
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.good.data = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
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