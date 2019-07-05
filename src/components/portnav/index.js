export default {
	name: 'portnav',
	data() {
		return {}
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.portnav.style.left = document.body.clientWidth > 750 ? (document.body.clientWidth - 750)/2 + 10 + 'px' : '10px'
		})
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shopcar() {
			return this.$store.state.shopcar.data
		}
	}
}