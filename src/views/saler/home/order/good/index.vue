<template>
  <div class='inner-main'>
	  <mt-header title="选择商品" class='header' fixed>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<mt-search v-model="search.name" cancel-text="取消" placeholder="商品名称/助记码" class='search'></mt-search>
		<div class='regular' v-if='search.results.length == 0'>
		  <mt-cell title="常购清单" class='bg-grey'></mt-cell>
			<div v-for='(item,index) in regulars' v-bind:key='index' class='mt-10'>
				<div class='order-wrapper' v-on:click='go("/good/show")'>
					<section class='order-image'>
						<img v-bind:src='item.image' width='120' class='f-fl'>
					</section>
					<section class='order-info'>
						<h4 class='order-title f-fs2'>{{item.name}}</h4>
						<p class='order-bread mb-6 f-fs1'>{{item.specification}}</p>
						<dl class='order-bread mr-30 f-fs1 f-ib'>
						  <dt>库存</dt>
							<dd class='order-dd'>{{item.store}}</dd>
						</dl>
						<dl class='order-bread f-fs1 f-ib'>
						  <dt>失效日期</dt>
							<dd class='order-dd'>{{item.deadline}}</dd>
						</dl>
						<p class='order-bread f-fs1'>{{item.company}}</p>
						<p class='opera f-csp f-pr f-fs1' v-on:click.prevent.stop='edit(item)'>销售价格急啊购时可修改<i class='add f-fsn'>+</i></p>
					</section>
				</div>
			</div>
		</div>
		<div v-else v-for='(item,index) in search.results' v-bind:key='index' class='mt-10'>
			<div class='order-wrapper'>
				<section class='order-image'>
					<img v-bind:src='item.image' width='120' class='f-fl'>
				</section>
				<section class='order-info'>
					<h4 class='order-title f-fs2'>{{item.name}}</h4>
					<p class='order-bread mb-6 f-fs1'>{{item.specification}}</p>
					<dl class='order-bread mr-30 f-fs1 f-ib'>
					  <dt>库存</dt>
						<dd class='order-dd'>{{item.store}}</dd>
					</dl>
					<dl class='order-bread f-fs1 f-ib'>
					  <dt>失效日期</dt>
						<dd class='order-dd'>{{item.deadline}}</dd>
					</dl>
					<p class='order-bread f-fs1'>{{item.company}}</p>
					<p class='opera f-csp f-pr f-fs1' v-on:click='edit(item)'>销售价格急啊购时可修改<i class='add f-fsn'>+</i></p>
				</section>
			</div>
		</div>
		<nav class='portnav'>
		  <router-link to='/index'>
			  <i class='iconfont'>&#xe60c;</i>
			</router-link>
			<router-link to='/index'>
			  <i class='iconfont'>&#xe60f;</i>
			</router-link>
			<router-link to='/index' class='f-pr'>
			  <i class='iconfont' style='border-right: none; font-size: 28px; top: 1px;'>&#xe605;</i>
				<mt-badge type="error" size='small' class='badge'>10</mt-badge>
			</router-link>
		</nav>
		<mt-popup v-model="popupVisible" position="bottom" v-bind:closeOnClickModal='false' class='popup'>
			<div class='pop-wrapper f-fs2'>
				<mt-cell class='good-cell'  v-bind:value="'核算价:' + selected.accounting">
				  <h4 slot='title' class='medicine-name'>{{selected.name}}</h4>
				</mt-cell>
				<section class='bread'>
				  <dl class='f-ib'>
						<dt class='f-ib'>库存：</dt>
						<dd class='f-ib'>{{selected.store}}</dd>
					</dl>
					<dl class='f-ib'>
						<dt class='f-ib'>已选：</dt>
						<dd class='f-ib'>{{selected.count}}件</dd>
					</dl>
					<dl class='color-E43A3D f-fwb f-ib f-tar'>
						<dt class='f-ib'>小计：</dt>
						<dd class='f-ib'>¥{{totalPrice}}</dd>
					</dl>
				</section>
				<mt-field class='price-input shopcar-cell' v-bind:placeholder="pricePlaceholder" v-model='editingPrice' type='number' v-bind:min='0' v-bind:disabled='selectedLot.editable ? false : true'>
				  <mt-button class='sure' size="small" v-bind:disabled='priceUnsubable' v-on:click='changePrice'>确定</mt-button>
				</mt-field>
				<div class='lotnum-area'>
					<mt-cell class='shopcar-cell' v-for='(item,index) in selected.lotnums' v-bind:key='index'>
						<div slot='title' class='lotnum-wrapper'>
							<mt-button  size='small' class='lotnum' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>
								<i class='f-fl f-fsn'>{{item.id}}</i> 
								<i class='f-fr f-fsn'>¥{{item.price}}</i>
							</mt-button>
							<section class='count-wrapper f-tar'>
								<mt-button size='small' class='count-opera' v-bind:disabled='item.count == "0" ? true : false' v-on:click='indec(item,-5)'>-</mt-button>
								<input type='text' v-model='item.count' class='count-count f-tac f-ib' v-on:change='countInput(item)'>
								<mt-button size='small' class='count-opera' v-bind:disabled='item.count == item.store ? true : false' v-on:click='indec(item,5)'>+</mt-button>
							</section>
						</div>
					</mt-cell>
				</div>
			</div>
			<br>
			<footer class='btn-wrapper'>
				<mt-button type="default" size='small' class='pop-btn' v-on:click='closePop'>取消</mt-button>
        <mt-button type="danger" size='small' class='pop-btn pop-btn-sure'>确定</mt-button>
		  </footer>
		</mt-popup>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>