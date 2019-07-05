import { MessageBox } from 'mint-ui'
import cportnav from '@/components/portnav/index.vue'
import ccustomer from '@/components/customer/index.vue'
import cshopcar from '@/components/shopcar/index.vue'

export default {
	name: 'goodList',
	data() {
		return {
			search: {
				name: ''
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
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		}
	},
	components: {
		cportnav,
		ccustomer,
		cshopcar
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
		
		handleCusSelected() {
			this.$refs.cshopcar.edit(this.good)
		}
	}
}