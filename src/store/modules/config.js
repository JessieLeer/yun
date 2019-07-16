import Vue from 'vue'
import axios from 'axios'

// initial state
const state = {
	serverUrl: 'http://xt.ysk360.com:8086',
	tenantId: ''
}

// getters
const getters = {
}

// actions
const actions = {
	
}

// mutations
const mutations = {
	tenantShow(state,tenantId) {
		state.tenantId = tenantId
	},
}

export default {
  state,
  getters,
  actions,
  mutations
}