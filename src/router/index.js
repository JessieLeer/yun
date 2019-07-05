import Vue from 'vue'
import Store from '../store'
import Router from 'vue-router'

import Login from '@/views/user/login/index.vue'
import User from '@/views/user/index.vue'
import UserIndex from '@/views/user/index/index.vue'
import UserIndex1 from '@/views/user/index1/index.vue'
import UserInfo from '@/views/user/info/index.vue'
import UserSetting from '@/views/user/setting/index/index.vue'
import UserPassword from '@/views/user/setting/password/index.vue'
import UserAccount from '@/views/user/account/index.vue'
import UserOrder from '@/views/user/order/index/index.vue'
import UserOrderSearch from '@/views/user/order/search/index.vue'
import UserOrderShow from '@/views/user/order/show/index.vue'
import UserCustomer from '@/views/user/customer/index.vue'
import Shopcar from '@/views/home/shopcar/index/index.vue'
import ShopcaResult from '@/views/home/shopcar/result/index.vue'
import Order from '@/views/home/order/customer/index.vue'
import OrderGood from  '@/views/home/order/good/index.vue'
import Index from '@/views/home/index/index.vue'
import Index1 from '@/views/home/index1/index.vue'
import GoodSearch from '@/views/home/good/search/index/index.vue'
import SearchResult from '@/views/home/good/search/result/index.vue'
import GoodCate from '@/views/home/good/cate/index.vue'
import GoodList from '@/views/home/good/list/index.vue'
import GoodShow from '@/views/home/good/show/index.vue'
import GoodPromotion from '@/views/home/good/promotion/index.vue'
import Bulletin from '@/views/home/bulletin/index/index.vue'
import BulletinShow from '@/views/home/bulletin/show/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{ 
			path: '/user',
			name: 'user',
			component: User,
      children: [
				{
          path: 'index',
					name: 'userIndex',
          component: UserIndex
        },
				{
          path: 'index1',
					name: 'userIndex1',
          component: UserIndex1
        },
        {
          path: 'info',
					name: 'userInfo',
          component: UserInfo
        },
				{
					path: 'setting',
					name: 'userSetting',
					component: UserSetting
				},
				{
					path: 'password',
					name: 'userPassword',
					component: UserPassword
				},
				{
					path: 'account',
					name: 'userAccount',
					component: UserAccount
				},
				{
					path: 'order',
					name: 'userOrder',
					component: UserOrder
				},
				{
					path: 'order/search',
					name: 'userOrderSearch',
					component: UserOrderSearch
				},
				{
					path: 'order/show/:id',
					name: 'userOrderShow',
					component: UserOrderShow
				},
				{
					path: 'customer',
					name: 'UserCustomer',
					component: UserCustomer
				}
      ]
    },
		{
			path: '/shopcar',
			name: 'shopcar',
			component: Shopcar
		},
		{
			path: '/shopcar/result/:amount',
			name: 'shopcaResult',
			component: ShopcaResult
		},
		{
			path: '/order',
			name: 'order',
			component: Order
		},
		{
			path: '/order/good/:keyword',
			name: 'orderGood',
			component: OrderGood
		},
		/*-- 业务员首页 --*/
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		/*-- 采购商首页 --*/
		{
			path: '/index1',
			name: 'index1',
			component: Index1
		},
		{
			path: '/good/cate',
			name: 'goodCate',
			component: GoodCate
		},
		{
			path: '/good/search',
			name: 'goodSearch',
			component: GoodSearch
		},
		{
			path: '/good/search/result/:keyword',
			name: 'searchResult',
			component: SearchResult
		},
		{
			path: '/good/list',
			name: 'goodList',
			component: GoodList
		},
		{
			path: '/good/promotion',
			name: 'goodPromotion',
			component: GoodPromotion
		},
		{
			path: '/good/show/:id',
			name: 'goodShow',
			component: GoodShow
		},
		{
			path: '/bulletin',
			name: 'bulletin',
			component: Bulletin
		},
		{
			path: '/bulletin/show/:id',
			name: 'bulletinShow',
			component: BulletinShow
		}
  ]
})

router.beforeEach((to, from, next) => {
	let noUserPaths = ['/login']
	if(noUserPaths.indexOf(to.path) == -1 && Store.state.user.id == undefined) {
		router.push({ name: 'login' })
	}
	next()
})

export default router
