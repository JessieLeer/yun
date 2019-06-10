export default {
	name: 'orderGood',
	data() {
		return {
			search: {
				name: '',
				results: [
				]
			},
			regulars: [
				{
					id: '1',
					name: '999鼻炎宁颗粒',
					specification: '0.25*10g/瓶',
					store: 100, 
					deadline: '2010-11-01',
					company: '四川异能药业有限公司',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					price: 0,
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
			popupVisible: false,
			selected: {},
			selectedLot: {},
			editingPrice: '',
		}
	},
	computed: {
		pricePlaceholder() {
			return this.selectedLot.editable == undefined ? '选择批号即可修改价格' : this.selectedLot.editable == true ? `¥${this.selectedLot.price}（可修改销售单价）` : `¥${this.selectedLot.price}（价格已锁定，无法修改）`
		},
		priceUnsubable() {
			return this.selectedLot.editable && !isNaN(parseFloat(this.editingPrice)) ? false : true
		}
	},
	methods: {
		back() {
			this.$router.back()
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
		changePrice() {
			this.selectedLot.price = this.editingPrice
			this.editingPrice = ''
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
		closePop() {
			this.popupVisible = false
			window.location.reload()
		}
	}
}