export default {
	name: 'bulletinShow',
	data() {
		return {
			notice: {
				article: {}
			}
		}
	},
	created() {
		this.show()
	},
	methods: {
		back() {
			this.$router.back()
		},
		show() {
			this.$http.get('/api/m/notice/getNotice', {params: {id: this.$route.params.id}}).then((res) => {
				console.log(res)
				this.notice = res.data.data
			})
		}
	}
}