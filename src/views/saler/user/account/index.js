export default {
	name: 'userAccount',
	data() {
		return {
			account: '5500.90',
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
				month: '2019-05-08'
			},
			typePickerShow: false,
			monthPickerShow: false,
			page: {
				current: 1,
				total: 1,
				pageSize: 5
			},
			contentH: 0,
			bills: [
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
				{
					type: '充值',
					conType: '余额',
					time: '2019-05-08 12:35:44',
					amount: '+100.50'
				},
			]
		}
	},
	computed: {
		isAllLoaded() {
			return this.page.current == this.page.total ? true : false
		},
		monthFormat() {
			return this.msToDate(this.search.month).month
		}
	},
	mounted() {
    this.$nextTick(() => {
      this.contentH = document.documentElement.clientHeight - 
      this.$refs.wrapper.getBoundingClientRect().top
    })
  },
	created() {
	},
	methods: {
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
		},
		loadTop() {
			//重置分页为1
			this.page.current = 1
			this.integrals = []
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