import { popup } from 'mint-ui'

export default {
	name: 'search1Result',
	data() {
		return {
			search: {
				name: '',
				type: '全部商品',
				store: '库存>500',
				formulation: '剂型',
				manufacturers: [
					'制药一厂',
					'制药二厂',
					'制药三厂',
					'制药四厂'
				],
				result: []
			},
			filterVisible0: false,
			filterVisible2: false,
			filterVisible3: false,
			manufacturers: [
				'制药一厂',
				'制药二厂',
				'制药三厂',
				'制药四厂'
			],
			goods: [
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
			page: {
				current: 1,
				total: 1,
				pageSize: 5
			},
			contentH: 0,
			popupVisible: false,
			selectedLot: '',
			selected: {}
		}
	},
	computed: {
		manuSelected() {
			return this.search.manufacturers.length == this.manufacturers.length ? '全部厂家' : this.search.manufacturers.join(',').substr(0,8) + '...'
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
		monthFormat() {
			return this.msToDate(this.search.month).month
		}
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
		manuAll() {
			this.search.manufacturers = this.manufacturers
			this.filterVisible3 = false
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
		}
	},
	components: {
		popup
	}
}