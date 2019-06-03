import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar1/index.vue'

export default {
	name: 'index',
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
				step: 0.4,
				limitMoveNum: 2
			},
			current: '1',
			regulars: [
				{
					id: '1',
					name: '999鼻炎宁颗粒',
					specification: '0.25*10g/瓶',
					store: 28890,
					deadline: '2010-11-01',
					company: '四川异能药业有限公司',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					accounting: 3.45,
					price: 4.85,
					lotnums: ['1111','2222','3333','4444'],
					count: '',
					sold: 23
				},
			],
			selected: {},
			selectedLot: '',
			popupVisible: false,
			good: {
				data: [
					{
						id: '1',
						name: '999鼻炎宁颗粒',
						specification: '0.25*10g/瓶',
						store: 28890,
						deadline: '2010-11-01',
						company: '四川异能药业有限公司',
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
						accounting: 3.45,
						price: 4.85,
						lotnums: ['1111','2222','3333','4444'],
						count: '',
						sold: 23
					},
				],
				total: 1000,
				filter: '推荐'
			},
			page: {
				current: 1,
				total: 1,
				pageSize: 5
			},
			contentH: 0,
		}
	},
	components: {
		Swipe,
		SwipeItem,
		vueSeamlessScroll,
		tabbar
	},
	computed: {
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
  },
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index(page) {
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.integrals = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		},
		edit(item) {
			this.popupVisible = true
			this.selected = item
		},
		changeLotnum(item) {
			this.selectedLot = item
		},
		changeFilter(val) {
			this.good.filter = val
		}
	}
}