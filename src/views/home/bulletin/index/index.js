export default {
	name: 'bulletin',
	data() {
		return {
			news: [
				{
					id: '1',
					type: '新闻公告',
					created_at: '2019-09-09 18:40',
					title: '上海长宁区一处正在改造的建筑发生坍塌',
					content: '央视网消息：5月16日11时30分左右，上海长宁区昭化路148号正在改建的东驰奔驰汽车4S店顶部坍塌，20余人被困。上海消防救援总队调动24辆消防车、150余名指战员赶赴现场救援。截至14时45分，上海一建筑坍塌救援现场，已救出17名被困人员，全部送往医院救治。 （央视记者 张倩 俞翔）'
				}
			]
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		}
	}
}