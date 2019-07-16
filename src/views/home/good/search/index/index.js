import { MessageBox,Toast } from 'mint-ui'
import csearch from '@/components/search/index.vue'

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
	components: {
		csearch
	},
 	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
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
		}
	}
}