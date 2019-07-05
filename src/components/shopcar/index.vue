<template>
  <mt-popup v-model="popVisable" position="bottom" v-bind:closeOnClickModal='false' class='popup'>
		<div class='pop-wrapper f-fs2'>
			<mt-cell class='good-cell' v-bind:value="'核算价:' + selected.dbdj">
				<h4 slot='title' class='medicine-name'>{{selected.name}}</h4>
			</mt-cell>
			<section class='bread'>
				<dl class='f-ib'>
					<dt class='f-ib'>库存：</dt>
					<dd class='f-ib'>{{selected.stock}}</dd>
				</dl>
				<dl class='f-ib'>
					<dt class='f-ib'>已选：</dt>
					<dd class='f-ib'>{{totalCount}}件</dd>
				</dl>
				<dl class='color-E43A3D f-fwb f-ib f-tar'>
					<dt class='f-ib'>小计：</dt>
					<dd class='f-ib'>¥{{totalPrice}}</dd>
				</dl>
			</section>
			<mt-field class='price-input shopcar-cell' v-bind:placeholder="pricePlaceholder" v-model='editingPrice' type='number' v-bind:min='0' v-if='user.customerType == 3' v-bind:disabled='selectedLot.pihao ? false : true'>
				<mt-button size="small" class='sure' v-bind:disabled='priceUnsubable' v-on:click='changePrice'>确定</mt-button>
			</mt-field>
			<div class='lotnum-area'>
				<mt-cell class='shopcar-cell' v-for='(item,index) in selected.lotnums' v-bind:key='index'>
					<div slot='title' class='lotnum-wrapper'>
						<mt-button  size='small' class='lotnum' v-bind:class='item == selectedLot ? "lotnum-cur" : "lotnum-def"' v-on:click='changeLotnum(item)'>
							<i class='f-fl f-fsn'>{{item.pihao}}</i> 
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
      <mt-button type="danger" size='small' v-on:click='shopcarAdd' class='pop-btn pop-btn-sure'>确定</mt-button>
		</footer>
	</mt-popup>
</template>

<style lang='stylus' scoped>
@import '~@/assets/css/mixin.styl'
@import './index.styl'
</style>

<script src='./index'></script>