import { MessageBox,Toast } from 'mint-ui';

export default {
	name: 'search1',
	data() {
		return {
			search: {
				name: '',
				result: [
				]
			},
			histories: [
			]
		}
	},
	watch: {
		'search.name'(newValue, oldValue) {
			this.$http.get('/api/m/product/findProductBySearchKey', {params: {key: newValue, tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.search.result = res.data.data
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
	created() {
		this.historyIndex()
	},
	mounted() {
		this.$nextTick(() => {
      
    })
	},
 	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			console.log('hello')
			this.$router.push(url)
		},
		historyIndex() {
			this.$http.get('/api/m/search/findSearchHostByUser', {params: {tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
				this.histories = res.data.data
			})
		},
		clearHistory() {
			MessageBox({
				title: '',
				message: `确定清空搜索记录?`,
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				if(action == 'confirm'){
					this.$http.delete('/api/m/search/deleteSearchHostByUser', {params: {tenantId: this.user.groupId, userId: this.user.id}}).then((res) => {
						Toast({
							message: res.data.message
						})
						if(res.data.code == 'success') {
							this.histories = []
						}
					})
				}
			})
		},
		searcher() {
			this.$router.push(`/good/search/result/${this.search.name}`)
			window.location.reload()
		}
	}
}