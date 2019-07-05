import { Toast } from 'mint-ui'

export default {
	name: 'cshopcar',
	props: {
		popupVisible: {
			type: Boolean,
			default: false
		},
		selecteder: {
			type: Object,
			default: {
				lotnums: []
			}
		},
		selectedLoter: {
			type: Object
		},
		editingPricer: {
			type: String,
			default: ''
		},
		totalCounter: {
			type: Number,
			default: 0
		},
		totalPricer: {
			type: Number,
			default: 0
		}
	},
	
	data() {
		return {
			popVisable: this.popupVisible,
			selected: this.selecteder,
			selectedLot: this.selectedLoter,
			editingPrice: this.editingPricer,
			totalCount: this.totalCounter,
			totalPrice: this.totalPricer
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		customer() {
			return this.$store.state.shopcar.customer
		},
		pricePlaceholder() {
			return this.selectedLot.pihao ? `¥${this.selectedLot.price}（可修改销售单价）` : '选择批号即可修改价格'
		},
		priceUnsubable() {
			return isNaN(parseFloat(this.editingPrice)) ? true : false
		}
	},
	methods: {
		edit(item) {
			/*--获取该商品的批号--*/
			this.$http.get('/api/m/product/findProductPihao', {params: {productId: item.id, tenantId: this.user.groupId, userId: this.user.id, customerId: this.customer.customerId}}).then((res) => {
				item.lotnums = res.data.data
				this.popVisable = true
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
					this.totalCount += item.count
					this.totalPrice += item.count * item.price
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
			this.popVisable = false
		},
		/*-- 加入购物车 --*/
		shopcarAdd(good) {
			let lotnums = []
			for(let item of this.selected.lotnums) {
				lotnums.push({
					accountingPrice: item.dbdj,
					count: item.count,
					customerId: this.customer.customerId,
					pihao: item.pihao,
					price: item.price,
					productId: this.selected.id,
					hw: item.hw,
			  	hz: item.hz,
				})
			}
			let form = {
				chpgg: this.selected.chpgg,
				customerId: this.customer.customerId,
				groupdId: this.user.groupId,
				photos: this.selected.photos,
				categoryId: this.selected.categoryId,
				code: this.selected.code,
				groupId: this.user.groupId,
				jyfw: this.selected.jyfw,
				name: this.selected.name,
				productId: this.selected.id,
				userId: this.user.id,
				shchchj: this.selected.shchchj,
				pihaoVO: lotnums
			}
			this.$http.post('/api/m/shopping/saveShoppingCart', form).then((res) => {
				Toast({
					message: res.data.message
				})
				if(res.data.code == 'success') {
					this.popVisable = false
					window.setTimeout(() => {
						window.location.reload()
					},1000)
				}
			})
		}
	}
}