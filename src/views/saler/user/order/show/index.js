import { MessageBox } from 'mint-ui'

export default {
	name: 'userOrderShow',
	data() {
		return {
			customer: '荣成医药诊所',
			order: {
				amount: '10000',
				number: '1111111111',
				customer: '漱玉平民大药房',
				created_by: 'lucy',
				created_at: '2019-09-09',
				goods: [
					{
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
						title: '美国大豆协会发布公告 敦促美国政府迅速与中国达成协议',
						specification: '0.25*10g/瓶',
						lotNum: '352642',
						company: '四川异能药业有限公司',
						price: '169.00/盒',
						oldPrice: '200.00/盒',
						count: 'x19'
					},
					{
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
						title: '美国大豆协会发布公告 敦促美国政府迅速与中国达成协议',
						specification: '0.25*10g/瓶',
						lotNum: '352642',
						company: '四川异能药业有限公司',
						price: '169.00/盒',
						oldPrice: '200.00/盒',
						count: 'x19'
					},
					{
						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
						title: '美国大豆协会发布公告 敦促美国政府迅速与中国达成协议',
						specification: '0.25*10g/瓶',
						lotNum: '352642',
						company: '四川异能药业有限公司',
						price: '169.00/盒',
						oldPrice: '200.00/盒',
						count: 'x19'
					}
				]
			}
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		cancel() {
			MessageBox({
				title: '',
				message: '确定删除该组商品?',
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				console.log(action)
			})
		}
	}
}