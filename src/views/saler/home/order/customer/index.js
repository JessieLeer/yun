export default {
	name: 'orderCustomer',
	data() {
		return  {
			search: {
				name: ''
			},
			customers: [
				{
					group: 'A',
					datas: [
						'Aaron',
						'Alden',
						'Austin'
					]
				},
				{
					group: 'B',
					datas: [
						'Baldwin',
						'Braden'
					]
				},
				{
					group: 'Z',
					datas: [
						'Zack',
						'Zane'
					]
				}
			]
		}
	},
	methods: {
		back() {
			this.$router.back()
		}
	}
}