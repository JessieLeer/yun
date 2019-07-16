import Vue from 'vue'
import axios from 'axios'

// initial state
const state = {
	data: [],
	customer: {}
}

// getters
const getters = {
}

// actions
const actions = {
	shopcarIndex({commit,rootState},context) {
		axios.get('/api/m/shopping/getShoppingCartByUser', {params: {
			customerId: rootState.shopcar.customer.customerId,
			userId: rootState.user.id,
			tenantId: rootState.user.groupId
		}}).then((res) => {
			commit('shopcarIndex',res.data.data.shoppingCarts)
		})
	}
}

// mutations
const mutations = {
	shopcarIndex(state,shopcar) {
		state.data = shopcar
	},
	shopcarClear(state) {
		state.data = []
	},
	cusChose(state,customer) {
		state.customer = customer
	},
	shopcarCusClear(state) {
		state.customer = {}
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}