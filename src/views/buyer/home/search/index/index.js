import { MessageBox } from 'mint-ui';

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
				'阿莫西林',
				'盘尼西林',
				'999感冒灵'
			]
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		clearHistory() {
			MessageBox({
				title: '',
				message: `确定清空搜索记录?`,
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				if(action == 'confirm'){
					this.histories = []
				}
			})
		}
	}
}