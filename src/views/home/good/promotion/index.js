export default {
	name: 'goodPromotion',
	data() {
		return {
			hots: [
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999,
					price: 444
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999,
					price: 444
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999,
					price: 444
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999,
					price: 444
				},
			],
			page: {
				current: 1,
				total: 2
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