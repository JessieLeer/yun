export default {
	name: 'goodPromotion',
	data() {
		return {
			hots: [
			],
			page: {
				current: 1,
				total: 0
			},
			contentH: 0
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		}
	},
	created() {
		this.index(1)
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
			this.$http.get('/api/m/product/findProductsBytenantIdDesc',{params: {tenantId: this.user.groupId, userId: this.user.id, start: page, size: 10, range: 0}}).then((res) => {
				this.hots = this.hots.concat(res.data.data)
				this.page.total = Math.ceil(res.data.totalSize/10)
			})
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.hots = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		}
	}
}