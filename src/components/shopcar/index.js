export default {
	name: 'cshopcar',
	props: {
		selected: {
			type: Object,
			default: {
				lotnums: []
			}
		},
		selectedLot: {
			type: Object
		},
		editingPrice: {
			type: String,
			default: ''
		},
		totalCount: {
			type: Number,
			default: 0
		},
		totalPrice: {
			type: Number,
			default: 0
		}
	},
	methods: {
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