export default {
	name: 'tabbar',
	props: {
		selected: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			currentIndex: this.selected
		}
	},
	computed: {
		currentCustomer() {
			return this.$store.state.shopcar.customer
		},
	},
	methods: {
	},
	watch: {
		currentIndex(val, oldVal) {
			this.$router.push(val)
		}
	}
}