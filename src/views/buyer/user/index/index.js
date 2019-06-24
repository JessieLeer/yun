import tabbar from '@/components/tabbar1/index.vue'

export default {
	name: 'user1Index',
	data() {
		return {
			user: {
				name: '毛利小萌萌',
				phone: '170****7717',
				avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556360175017&di=68c8a1242f15b3842dbe5e36a7d57752&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fblog%2F201506%2F05%2F20150605123522_QrniU.jpeg',
				money: '1000.00',
				notice: '您的身份证已经到期，请及时更新',
				score: 10
			}
		}
	},
	components: {
		tabbar,
	}
}