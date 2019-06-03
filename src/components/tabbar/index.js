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
	methods: {
	},
	watch: {
		currentIndex(val, oldVal) {
			this.$router.push(val)
		}
	}
}