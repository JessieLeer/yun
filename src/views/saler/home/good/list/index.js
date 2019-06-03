export default {
	name: 'goodList',
	data() {
		return {
			search: {
				name: ''
			},
			goods: [
				{
					id: '1',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					name: '口腔炎喷雾剂',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					store: '100',
					company: '四川异能药业有限公司',
					deadline: '2019-09-09'
				},
				{
					id: '2',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					name: '口腔炎喷雾剂',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					store: '100',
					company: '四川异能药业有限公司',
					deadline: '2019-09-09'
				},
				{
					id: '3',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					name: '口腔炎喷雾剂',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					store: '100',
					company: '四川异能药业有限公司',
					deadline: '2019-09-09'
				},
				{
					id: '4',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557389741298&di=31efb58a423ee236e999cb4345362a09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F21%2F20150321220253_HRsSm.jpeg',
					name: '口腔炎喷雾剂',
					specification: '0.25*10g/瓶',
					lotNum: '352642',
					store: '100',
					company: '四川异能药业有限公司',
					deadline: '2019-09-09'
				},
			],
			page: {
				current: 1,
				total: 1
			},
			contentH: 0
		}
	},
	computed: {
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		}
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
  },
	methods: {
		back() {
			this.$router.back()
		},
 		go(url) {
			this.$router.push(url)
		},
		index(page) {
			
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.integrals = []
			this.index(this.page.current)
      this.$refs.loadmore.onTopLoaded()
    },
		loadBottom() {
			this.index(this.page.current+1)
			this.page.current ++
      this.$refs.loadmore.onBottomLoaded()
		}
	}
}