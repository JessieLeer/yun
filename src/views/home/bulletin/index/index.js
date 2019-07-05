export default {
	name: 'bulletin',
	data() {
		return {
			news: [
				
			]
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
 	created() {
		this.index()
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		index() {
			this.$http.get('/api/m/notice/getAllNotice', {params: {tenantId: this.user.groupId}}).then((res) => {
				console.log(res.data.data)
				this.news = res.data.data
			})
		},
	}
}