import Vue from 'vue'
import axios from 'axios'

// initial state
const state = {
	shopcar: []
}

// getters
const getters = {
}

// actions
const actions = {
	shopcarIndex({commit,rootState},context) {
		axios.get('/api/m/shopping/getShoppingCartByUser', {params: {userId: rootState.user.id}}).then((res) => {
			commit('shopcarIndex',res.data.data)
		})
	}
}

// mutations
const mutations = {
	shopcarIndex(state,shopcar) {
		state.shopcar = shopcar
	},
}

export default {
  state,
  getters,
  actions,
  mutations
}