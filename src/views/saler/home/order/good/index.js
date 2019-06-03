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
					store: 28890,
					deadline: '2010-11-01',
					company: '四川异能药业有限公司',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					accounting: 3.45,
					price: 4.85,
					lotnums: ['1111','2222','3333','4444'],
					count: ''
				},
			],
			popupVisible: false,
			selected: {},
			selectedLot: ''
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		edit(item) {
			this.popupVisible = true
			this.selected = item
		},
		changeLotnum(item) {
			this.selectedLot = item
		}
	}
}