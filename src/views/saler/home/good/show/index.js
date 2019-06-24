import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
	name: 'goodShow',
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
				},
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				}
			],
			good: {},
			activited: '1',
			popupVisible: false,
			selected: {
				lotnums: [
				]
			},
			selectedLot: {},
			editingPrice: '',
			totalCount: 0,
			totalPrice: 0
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shopcar() {
			return this.$store.state.shopcar
		},
		pricePlaceholder() {
			return this.selectedLot.pihao ? `¥${this.selectedLot.price}（可修改销售单价）` : '选择批号即可修改价格'
		},
		priceUnsubable() {
			return isNaN(parseFloat(this.editingPrice)) ? true : false
		}
	}, 
	mounted() {
		let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
	},
	created() {
		this.show()
	},
	components: {
		Swipe,
		SwipeItem
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		show() {
			this.$http.get("/api/m/product/findProductById", {params: {productId: this.$route.params.id, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.good = res.data.data.product
			})
		},
		edit(item) {
			/*--获取该商品的批号--*/
			this.$http.get('/api/m/product/findProductPihao', {params: {productId: item.id, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				item.lotnums = res.data.data
				this.popupVisible = true
				this.selected = item
				this.$set(this.selected, 'totalSelected', 0)
				let lotPrices = this.selected.lotnums.map((item) => {
					return item.dbdj
				})
				let [min,max] = [
					Math.min(...lotPrices),
					Math.max(...lotPrices)
				]
				this.selected.dbdj = `${min}~${max}`
				for(let item of this.selected.lotnums){
					this.selected.price += item.count * item.price
				}
			})
		},
		changeLotnum(item) {
			this.selectedLot = item
			this.selected.dbdj = this.selectedLot.dbdj
			this.selected.stock = this.selectedLot.amount
		},
		changePrice() {
			this.selectedLot.price = this.editingPrice
			this.editingPrice = ''
			this.selectedLot = {}
			this.updateTotal()
		},
		indec(item, num) {
			if(item.count + num < 0) {
				item.count = 0
			}else if(item.count + num > item.amount) {
				item.count = item.amount
			}else{
				item.count += num
			}
			this.updateTotal()
			this.$forceUpdate()
		},
 		countInput(item){
			item.count = item.count > item.amount ? item.amount : item.count
			this.updateTotal()
			this.$forceUpdate()
		},
		updateTotal() {
			this.totalCount = 0
			for(let item of this.selected.lotnums) {
				this.totalCount += item.count
			}
			this.totalPrice = 0
			for(let item of this.selected.lotnums) {
				this.totalPrice += item.count * item.price
			}
		},
		closePop() {
			this.popupVisible = false
			window.location.reload()
		},
		/*-- 加入购物车 --*/
		shopcarAdd(good) {
			let lotnums = []
			for(let item of this.selected.lotnums) {
				lotnums.push({
					count: item.count,
					pihao: item.pihao,
					price: item.price
				})
			}
			let form = {
				categoryId: this.selected.categoryId,
				code: this.selected.code,
				groupId: this.user.groupId,
				hw: this.selected.hw,
				hz: this.selected.hz,
				jyfw: this.selected.jyfw,
				name: this.selected.name,
				productId: this.selected.id,
				userId: this.user.id,
				pihaoVO: lotnums
			}
			this.$http.post('/api/m/shopping/saveShoppingCart', form).then((res) => {
				console.log(res)
			})
		}
	}
}