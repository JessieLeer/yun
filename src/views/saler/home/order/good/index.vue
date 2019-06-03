<template>
  <div class='inner-main'>
	  <mt-header title="选择商品" class='header' fixed>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
		</mt-header>
		<mt-search v-model="search.name" cancel-text="取消" placeholder="商品名称/助记码" class='search'></mt-search>
		<div class='regular' v-if='search.results.length == 0'>
		  <mt-cell title="常购清单" class='bg-grey'></mt-cell>
			<div v-for='(item,index) in regulars' v-bind:key='index' class='mt-10'>
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
		<mt-popup v-model="popupVisible" position="bottom">
			<div class='pop-wrapper f-fs2'>
			  <header class='pop-header'>{{selected.name}}</header>
				<dl class='mr-30 f-ib'>
				  <dt class='f-ib'>库存：</dt>
					<dd class='f-ib'>{{selected.store}}</dd>
				</dl>
				<dl class='f-ib'>
				  <dt class='f-ib'>核算价：</dt>
					<dd class='f-ib'>{{selected.accounting}}</dd>
				</dl>
				<p class='color-7a7a7a mt-6 mb-6'>选择批号</p>
				<i class='lotnum f-csp f-fsn' v-for='(item,index) in selected.lotnums' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>{{item}}</i>
				<mt-field label="采购数量：" placeholder='请输入采购数量' v-model="selected.count" class='mt-10' type='number' v-bind:state='selected.count == "" ? "warning" : "success"'></mt-field>
				<mt-field label="销售价格：" placeholder='请输入销售价格' v-model="selected.price" type='number' v-bind:state='selected.price == "" ? "warning" : "success"'></mt-field>
				<mt-cell v-bind:value="'小计：¥' + Math.ceil(selected.count*selected.price)">
				</mt-cell>
				<section class='btn-wrapper'>
				  <mt-button type="default" size='small' class='pop-btn' v-on:click='popupVisible = false'>取消</mt-button>
          <mt-button type="danger" size='small' class='pop-btn pop-btn-sure'>确定</mt-button>
				</section>
			</div>
		</mt-popup>
	</div>	
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>