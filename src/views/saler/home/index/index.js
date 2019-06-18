import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'
import tabbar from '@/components/tabbar/index.vue'

export default {
	name: 'index',
	data() {
		return {
			banners: [
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				},
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				},
				{
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557812612473&di=c42118e41821b2e607131c2e643bdf6c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg',
					url: '/login',
				}
			],
			notices: [
				{
					id: '1',
					title: '日本女神长泽雅美秀中文，'
				},
				{
					id: '2',
					title: '电视剧版 / 行儿的中二幻想 / HiGH&LOW-THE STORY OF S.W.O.R.D'
				},
				{
					id: '3',
					title: '洼田正孝新剧开播收视率喜人，本田翼首次穿上白大褂'
				}
			],
			classOption: {
				step: 0.2,
				limitMoveNum: 2
			},
			hots: [
				{
					id: '1',
					name: '口腔炎喷雾剂口腔炎喷雾剂口腔炎喷雾剂口腔炎喷雾剂口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999
				},
				{
					id: '1',
					name: '口腔炎喷雾剂',
					specification: '0.25*100p/瓶',
					formulation: '片剂',
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557831533908&di=1e275391a00793ad285af39fd44f3a8e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172409_jk5cu.thumb.700_0.jpeg',
					sold: 9999
				},
			]
		}
	},
	components: {
		Swipe,
		SwipeItem,
		vueSeamlessScroll,
		tabbar
	},
	mounted() {
		let w = document.body.clientWidth > 750 ? 750 : document.body.clientWidth
		document.getElementsByClassName('mint-swipe')[0].style.height = w*310/614 + 'px'
	},
	created() {
	},
	methods: {
		go(url) {
			this.$router.push(url)
		}
	}
}