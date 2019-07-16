export default {
	name: 'csearch',
	props: {
		searchor: {
			type: Object
		},
	},
	data() {
		return {
			search: this.searchor
		}
	},
	mounted() {
		this.$refs.search.$refs.input.focus()
	},
	watch: {
		'search.name'(newValue, oldValue) {
			this.$http.get('/api/m/product/findProductBySearchKey', {params: {key: newValue, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.search.result = res.data.data
				this.$forceUpdate()
			})
		}, 
		'search.result'(newVal, oldValue) {
			if(newVal.length > 0) {
				document.getElementsByClassName('mint-search')[0].style.height = '100vh'
			}else{
				document.getElementsByClassName('mint-search')[0].style.height = 'auto'
			}
		} 
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		handleBack() {
			this.$emit('handleBack')
		},
		searcher() {
			this.$http.post('/api/m/search/saveSearchHostByUser', {searchKey: this.search.name, searchTenantId: this.user.groupId, searchUserId: this.user.id}).then((res) => {
				if(res.data.code == 'success') {
					this.$router.push(`/good/search/result/${this.search.name}`)
			    window.location.reload()
				}
			})
		}
	}
}