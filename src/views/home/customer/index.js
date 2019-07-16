import ccustomer from '@/components/customer/index.vue'
import cportnav from '@/components/portnav/index.vue'

export default {
	name: 'customer',
	data() {
		return {
			search: {
				name: ''
			},
			cusVisible: true,
			backDisplay: 'none',
			zIndex: 2010
		}
	},
	computed: {
	},
	components: {
		ccustomer,
		cportnav
	},
	created() {
		
	},
	mounted() {
		window.addEventListener("popstate", (e) => { 
			this.goHome()
		}, false)
	},
	methods: {
		goHome() {
			this.$router.replace({path: this.$store.state.user.customerType == 3 ? '/index' : '/index1'})
		},
		handleCusSelected() {
			this.$router.push('/order/good/none')
			window.location.reload()
		}
	}
}