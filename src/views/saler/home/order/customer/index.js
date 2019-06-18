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
						'阿亚拉',
						'阿迪达斯',
						'阿珂'
					]
				},
				{
					group: 'B',
					datas: [
						'鲍勃',
						'博里尼'
					]
				},
				{
					group: 'C',
					datas: [
						'卡里克',
						'卡梅伦'
					]
				}
			]
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		groupVisiable(group) {
			let datas = this.customers.filter((item) => {
				return item == group
			})[0].datas
			if(group.group == this.search.name.toUpperCase()){
				return true
			}else {
				for(let item of datas){
					if(item.indexOf(this.search.name) != -1){
						return true
					} 
				}
			}
			
			return false
		}
	}
}