export default {
	name: 'goodCate',
	data() {
		return {
			curcate: '1',
			cate: {
				firsts: [
				]
			},
			cateData: [
			]
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
 	created() {
		this.firstIndex()
	},
	mounted() {
		let wh = window.innerHeight
		let ww = window.innerWidth > 750 ? window.innerWidth : 750
		this.$refs.aside.style.height = wh + 'px'
		this.$refs.aside.style.left = (ww-750)/2 + 'px'
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		/*-- 获取一级分类 --*/
		firstIndex() {
			this.$http.get('/api/m/product/findProductCategorysFirst', {params: {tenantId: this.user.groupId}}).then((res) => {
				this.cate.firsts = res.data.data
			})
		},
		/*-- 获取二级分类及商品 --*/
		changeCate(cate) {
			this.curcate = cate
			this.$http.get('/api/m/product/findProductCategorys', {params: {id: cate}}).then((res) => {
				this.cateData = res.data.data
			})
		}
	}
}