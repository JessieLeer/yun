import { Swipe, SwipeItem } from 'mint-ui'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
	name: 'goodShow',
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
			good: {
				price: '¥5.6',
				name: '999感冒灵颗粒',
				specification: '0.25g*100片/瓶',
				formulation: '片剂',
				store: 234,
				package: 10,
				manufacturer: '吉林延边制药厂',
				numbering: '123123',
				buscope: '药品生产',
				prescription: '非处方'
			},
			activited: '1',
			shopcars: [
				{
					id: '1',
					name: 'good0'
				}
			]
		}
	},
	components: {
		Swipe,
		SwipeItem
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