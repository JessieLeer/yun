export default {
	name: 'UserCustomer',
	data() {
		return {
			customers: [
				{
					name: '长清区万德镇小学卫生室',
					phone: '17076467717',
					address: '山东省济南市历下区和平路123号',
					license: '35487579',
					bussiness: '2019-09-09',
					commission: '2019-09-09',
					gsp: '2019-09-09'
				},
				{
					name: '长清区万德镇小学卫生室',
					phone: '17076467717',
					address: '山东省济南市历下区和平路123号',
					license: '35487579',
					bussiness: '2019-09-09',
					commission: '2019-09-09',
					gsp: '2019-09-09'
				},
			]
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		}
	}
}