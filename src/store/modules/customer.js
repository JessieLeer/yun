import Vue from 'vue'
import axios from 'axios'

// initial state
const state = {
	data: [
	  {
			group: 'A',
			datas: []
		},
		{
			group: 'B',
			datas: []
		},
		{
			group: 'C',
			datas: []
		},
		{
			group: 'D',
			datas: []
		},
		{
			group: 'E',
			datas: []
		},
		{
			group: 'F',
			datas: []
		},
		{
			group: 'G',
			datas: []
		},
		{
			group: 'H',
			datas: []
		},
		{
			group: 'I',
			datas: []
		},
		{
			group: 'C',
			datas: []
		},
		{
			group: 'J',
			datas: []
		},
		{
			group: 'K',
			datas: []
		},
		{
			group: 'L',
			datas: []
		},
		{
			group: 'M',
			datas: []
		},
		{
			group: 'N',
			datas: []
		},
		{
			group: 'O',
			datas: []
		},
		{
			group: 'P',
			datas: []
		},
		{
			group: 'Q',
			datas: []
		},
		{
			group: 'R',
			datas: []
		},
		{
			group: 'S',
			datas: []
		},
		{
			group: 'T',
			datas: []
		},
		{
			group: 'U',
			datas: []
		},
		{
			group: 'V',
			datas: []
		},
		{
			group: 'W',
			datas: []
		},
		{
			group: 'X',
			datas: []
		},
		{
			group: 'Y',
			datas: []
		},
		{
			group: 'Z',
			datas: []
		},
	],
}

// getters
const getters = {
}

// actions
const actions = {
	customerIndex({commit,rootState},context) {
		axios.get('/api/m/product', {params: {userId: rootState.user.id,isSalesman: rootState.user.customerType}}).then((res) => {
			commit('customerIndex',res.data.data)
		})
	}
}
 
// mutations
const mutations = {
  customerIndex(state,customers) {
		for(let item of state.data) {
			item.datas = []
		}
		for(let item of customers) {
			state.data.filter((customer) => {
				return customer.group == item.zjm[0]
			})[0].datas.push(item)
		}		
	},
	customerClear(state) {
		state.data = [
			{
				group: 'A',
				datas: []
			},
			{
				group: 'B',
				datas: []
			},
			{
				group: 'C',
				datas: []
			},
			{
				group: 'D',
				datas: []
			},
			{
				group: 'E',
				datas: []
			},
			{
				group: 'F',
				datas: []
			},
			{
				group: 'G',
				datas: []
			},
			{
				group: 'H',
				datas: []
			},
			{
				group: 'I',
				datas: []
			},
			{
				group: 'C',
				datas: []
			},
			{
				group: 'J',
				datas: []
			},
			{
				group: 'K',
				datas: []
			},
			{
				group: 'L',
				datas: []
			},
			{
				group: 'M',
				datas: []
			},
			{
				group: 'N',
				datas: []
			},
			{
				group: 'O',
				datas: []
			},
			{
				group: 'P',
				datas: []
			},
			{
				group: 'Q',
				datas: []
			},
			{
				group: 'R',
				datas: []
			},
			{
				group: 'S',
				datas: []
			},
			{
				group: 'T',
				datas: []
			},
			{
				group: 'U',
				datas: []
			},
			{
				group: 'V',
				datas: []
			},
			{
				group: 'W',
				datas: []
			},
			{
				group: 'X',
				datas: []
			},
			{
				group: 'Y',
				datas: []
			},
			{
				group: 'Z',
				datas: []
			},
		]
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}