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
				step: 0.2,
				limitMoveNum: 2
			},
			current: '1',
			regulars: [
				{
					id: '1',
					name: '999鼻炎宁颗粒',
					specification: '0.25*10g/瓶',
					store: 100, 
					deadline: '2010-11-01',
					company: '四川异能药业有限公司',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					price: 100,
					oldPrice: 200,
					accounting: 0,
					count: 0,
					lotnums: [
						{
							id: 11111111,
							accounting: 3.55,
							price: 3.45,
							store: 10,
							editable: true,
							count: 0
						},
						{
							id: 22222222,
							accounting: 4.55,
							price: 4.45,
							store: 18,
							editable: true,
							count: 0
						},
						{
							id: 33333333,
							accounting: 5.55,
							price: 5.45,
							store: 30,
							editable: false,
							count: 0
						},
						{
							id: 44444444,
							accounting: 6.55,
							price: 6.45,
							store: 40,
							editable: false,
							count: 10
						}
					],
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
					store: 100, 
					deadline: '2010-11-01',
					company: '四川异能药业有限公司',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					price: 100,
					oldPrice: 200,
					accounting: 0,
					count: 0,
					lotnums: [
						{
							id: 11111111,
							accounting: 3.55,
							price: 3.45,
							store: 10,
							editable: true,
							count: 0
						},
						{
							id: 22222222,
							accounting: 4.55,
							price: 4.45,
							store: 18,
							editable: true,
							count: 0
						},
						{
							id: 33333333,
							accounting: 5.55,
							price: 5.45,
							store: 30,
							editable: false,
							count: 0
						},
						{
							id: 44444444,
							accounting: 6.55,
							price: 6.45,
							store: 40,
							editable: false,
							count: 10
						}
					],
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
			selected: {
				lotnums: []
			},
			selectedLot: {},
			editingPrice: '',
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
		totalPrice() {
			let price = 0
			for(let item of this.selected.lotnums) {
				price += item.count * item.price
			}
			return price
		}
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
			
			let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		  document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
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
			let lotPrices = this.selected.lotnums.map((item) => {
				return item.price
			})
			let [min,max] = [
				Math.min(...lotPrices),
			  Math.max(...lotPrices)
			]
			this.selected.accounting = `${min}~${max}`
			for(let item of this.selected.lotnums){
				this.selected.count += item.count
				this.selected.price += item.count * item.price
			}
		},
		changeLotnum(item) {
			this.selectedLot = item
			this.selected.accounting = this.selectedLot.accounting
			this.selected.store = this.selectedLot.store
		},
		indec(item, num) {
			if(item.count + num < 0) {
				item.count = 0
			}else if(item.count + num > item.store) {
				item.count = item.store
			}else{
				item.count += num
			}
		},
 		countInput(item){
			item.count = item.count > item.store ? item.store : item.count
		},
		closePop() {
			this.popupVisible = false
		},
		changeFilter(val) {
			this.good.filter = val
		}
	}
}