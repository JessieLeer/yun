import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/saler/user/login/index.vue'

/** 业务员端 **/
import User from '@/views/saler/user/index.vue'
import UserIndex from '@/views/saler/user/index/index.vue'
import UserInfo from '@/views/saler/user/info/index.vue'
import UserSetting from '@/views/saler/user/setting/index/index.vue'
import UserPassword from '@/views/saler/user/setting/password/index.vue'
import UserAccount from '@/views/saler/user/account/index.vue'
import UserOrder from '@/views/saler/user/order/index/index.vue'
import UserOrderSearch from '@/views/saler/user/order/search/index.vue'
import UserOrderShow from '@/views/saler/user/order/show/index.vue'
import UserCustomer from '@/views/saler/user/customer/index.vue'
import Shopcar from '@/views/saler/home/shopcar/index/index.vue'
import ShopcaResult from '@/views/saler/home/shopcar/result/index.vue'
import Order from '@/views/saler/home/order/customer/index.vue'
import OrderGood from  '@/views/saler/home/order/good/index.vue'
import Index from '@/views/saler/home/index/index.vue'
import GoodCate from '@/views/saler/home/good/cate/index.vue'
import GoodList from '@/views/saler/home/good/list/index.vue'
import GoodShow from '@/views/saler/home/good/show/index.vue'
import GoodPromotion from '@/views/saler/home/good/promotion/index.vue'
import Bulletin from '@/views/saler/home/bulletin/index/index.vue'
import BulletinShow from '@/views/saler/home/bulletin/show/index.vue'

/** 采购商端 **/
import User1 from '@/views/buyer/user/index.vue'
import User1Index from '@/views/buyer/user/index/index.vue'
import User1Order from '@/views/buyer/user/order/search/index.vue'
import User1Info from '@/views/buyer/user/info/index.vue'
import User1Setting from '@/views/buyer/user/setting/index/index.vue'
import User1Password from '@/views/buyer/user/setting/password/index.vue'
import Index1 from '@/views/buyer/home/index/index.vue'
import Shopcar1 from '@/views/buyer/home/shopcar/index/index.vue'
import GoodCate1 from '@/views/buyer/home/good/cate/index.vue'
import GoodShow1 from '@/views/buyer/home/good/show/index.vue'
import Search1 from '@/views/buyer/home/search/index/index.vue'
import Search1Result from '@/views/buyer/home/search/result/index.vue'
import Company from '@/views/buyer/home/company/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
		/** 业务员端 **/
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
					path: 'order/show',
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
			path: '/shopcar/result',
			name: 'shopcaResult',
			component: ShopcaResult
		},
		{
			path: '/order',
			name: 'order',
			component: Order
		},
		{
			path: '/order/good',
			name: 'orderGood',
			component: OrderGood
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/good/cate',
			name: 'goodCate',
			component: GoodCate
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
			path: '/bulletin/show',
			name: 'bulletinShow',
			component: BulletinShow
		},
		
		/** 采购商端 **/
		{
			path: '/user1',
			name: 'user1',
			component: User1,
      children: [
				{
          path: 'index',
					name: 'user1Index',
          component: User1Index
        },
				{
					path: 'order',
					name: 'user1Order',
					component: User1Order
				},
				{
					path: 'info',
					name: 'user1Info',
          component: User1Info
				},
				{
					path: 'setting',
					name: 'user1Setting',
					component: User1Setting
				},
				{
					path: 'password',
					name: 'user1Password',
					component: User1Password
				},
			]
		},
		{
			path: '/index1',
			name: 'index1',
			component: Index1
		},
		{
			path: '/company',
			name: 'company',
			component: Company
		},
		{
			path: '/shopcar1',
			name: 'shopcar1',
			component: Shopcar1
		},
		{
			path: '/good/cate1',
			name: 'goodCate1',
			component: GoodCate1
		},
		{
			path: '/good/show1',
			name: 'goodShow1',
			component: GoodShow1
		},
		{
			path: '/search1',
			name: 'search1',
			component: Search1
		},
		{
			path: '/search1/result',
			name: 'search1Result',
			component: Search1Result
		}
  ]
})
