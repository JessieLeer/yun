import tabbar from '@/components/tabbar/index.vue'

export default {
	name: 'userIndex',
	data() {
		return {
			notice: '',
			balance: 0
		}
	},
	components: {
		tabbar
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.balanceShow()
	},
	methods: {
		balanceShow() {
			this.$http.get('/api/m/balance/findBalanceByUser', {params: {userId: this.user.id}}).then((res) => {
				this.balance = res.data.data.balance
				this.notice = res.data.data.message
			})
		}
	}
}