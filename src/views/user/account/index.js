export default {
	name: 'userAccount',
	data() {
		return {
			balance: 0,
			slots: [
        {
          flex: 1,
          values: ['全部','充值','扣款'],
          className: 'slot0',
          textAlign: 'center'
        }
      ],
			search: {
				type: '全部',
				month: ''
			},
			rechargeTotal: 0,
			deductionTotal: 0,
			typePickerShow: false,
			monthPickerShow: false,
			page: {
				current: 1,
				total: 1,
			},
			contentH: 0,
			bills: []
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
		monthFormat() {
			return this.msToDate(this.search.month).month
		}
	},
	created() {
		this.initDate()
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
			this.index(1)
    })
  },
	methods: {
		initDate() {
			let now = new Date()
			let year = now.getFullYear()
			let month = now.getUTCMonth() + 1 + ''
			let day = now.getUTCDate() + ''
			let strmonth = month.length == 1 ? '0' + month : month
			let strday = day.length == 1 ? '0' + day : day
			this.search.month = year + '-'  +  strmonth + '-' + strday
		},
    onValuesChange(picker, values) {
			this.type = values[0]
    },
		openMonth() {
			this.$refs.monthPicker.open()
		},
		/** 转换日期格式 **/
		msToDate (msec) {
			let datetime = new Date(msec)
			let year = datetime.getFullYear()
			let month = datetime.getMonth()
			let date = datetime.getDate()
			let hour = datetime.getHours()
			let minute = datetime.getMinutes()
			let second = datetime.getSeconds()

			let result1 = year + '-' + ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + '-' + ((date + 1) < 10 ? '0' + date : date) + ' ' + ((hour + 1) < 10 ? '0' + hour : hour) + ':' + ((minute + 1) < 10 ? '0' + minute : minute) + ':' + ((second + 1) < 10 ? '0' + second : second)

			let result2 = year + '-' + ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + '-' + ((date + 1) < 10 ? '0' + date : date)
			
			let result3 = year + '-' + ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1))

			let result = {
				hasTime: result1,
				withoutTime: result2,
				month: result3
			}
			return result
		},
		index(page) {
			this.search.type = this.$refs.typePicker.getValues()[0]
			this.typePickerShow = false
			let type
			switch (this.search.type) {
				case '全部':
					type = ''
					break
				case '充值':
					type = 0
					break
				case '扣款':
					type = 1
					break
			}
			this.$http.get('/api/m/balance/getAllMx', {params: {userId: this.user.id, start: page, size: 10, type: type, beginDate: this.monthFormat.substr(0,7)}}).then((res) => {
				this.balance = res.data.data.balance
				this.deductionTotal = res.data.data.deductionTotal
				this.rechargeTotal = res.data.data.rechargeTotal
				let arr = []
				for(let item of res.data.data.balanceWaterVO) {
					arr.push({
						type: item.waterType == 0 ? '充值' : '扣款',
					  conType: item.waterType == 0 ? item.type == 0 ? '回款' : '余额' : item.type == 0 ? '增加' : '减少',
					  time: item.date,
					  amount: item.waterType == 0 ? `+${item.amount}` : `-${item.amount}`
					})
				}
				this.bills = this.bills.concat(arr)
			})
		},
		filterBalance() {
			this.bills = []
			this.index(1)
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.bills = []
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