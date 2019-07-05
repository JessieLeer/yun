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
}

// mutations
const mutations = {
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