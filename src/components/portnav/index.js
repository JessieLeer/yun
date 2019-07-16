export default {
	name: 'portnav',
	props: {
		zIndexer: {
			type: Number,
			default: 2
		}
	},
	data() {
		return {
			zIndex: this.zIndexer,
			docmHeight: '0',  
      showHeight: '0', 
      hidshow: true, 
      isResize: false
		}
	},
	watch: {
		showHeight() {        
			if(this.docmHeight > this.showHeight){           
				this.hidshow = false        
			}else{           
				this.hidshow = true       
			}   
		}
	},
	mounted() {
		window.onresize = ()=>{        
			return(()=>{                     
				if (!this.isResize) {                             
					//默认屏幕高度                               
					this.docmHeight = document.documentElement.clientHeight
					this.isResize = true          
				}                      
				//实时屏幕高度                       
				this.showHeight = document.body.clientHeight         
			})()    
		}

		this.$nextTick(() => {
			this.$refs.portnav.style.left = document.body.clientWidth > 750 ? (document.body.clientWidth - 750)/2 + 10 + 'px' : '10px'
		})
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shopcar() {
			return this.$store.state.shopcar.data
		}
	}
}