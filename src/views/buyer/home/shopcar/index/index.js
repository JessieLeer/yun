import { MessageBox } from 'mint-ui'

export default {
	name: 'shopcar',
	data() {
		return {
			customer: '荣成医药诊所',
			orders: [
				{
					id: '1',
					customer: '荣成医药诊所',
					status: '未提取',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					title: '美国大豆协会发布公告 敦促美国政府迅速与中国达成协议',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					company: '四川异能药业有限公司',
					price: '169.00/盒',
					oldPrice: '200.00/盒',
					count: 'x19',
					remark: '已经享受满减优惠'
				},
				{
					id: '2',
					customer: '荣成医药诊所',
					status: '未提取',
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
					id: '3',
					customer: '荣成医药诊所',
					status: '未提取',
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
					id: '4',
					customer: '荣成医药诊所',
					status: '未提取',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					title: '美国大豆协会发布公告 敦促美国政府迅速与中国达成协议',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					company: '四川异能药业有限公司',
					price: '169.00/盒',
					oldPrice: '200.00/盒',
					count: 'x19'
				}
			],
			selectedOrders: [],
			delShow: false,
			selectedAll: false
		}
	},
	watch: {
		selectedOrders(val, oldVal) {
			if(val.length == this.orders.length) {
				this.selectedAll = true
			}else{
				this.selectedAll = false
			}
		}
	},
	methods: {
		back() {
			this.$router.back()
		},
		go(url) {
			this.$router.push(url)
		},
		toggleAll() {
			this.selectedOrders = []
			if(this.selectedAll) {
			}else{
				for(let item of this.orders){
					this.selectedOrders.push(item.id)
				}
			}
			
		},
		del() {
			MessageBox({
				title: '',
				message: `确定删除这${this.selectedOrders.length}件商品?`,
				showCancelButton: true,
				cancelButtonText: '我再想想',
			}).then((action) => {
				console.log(action)
			})
		}
	}
}