<template>
  <div class='inner-main f-pr'>
	  <mt-header title="购物车" class='header'>
			<i class='iconfont ml-10' v-on:click='back' slot='left'>&#xe625;</i>
			<i slot='right' class='f-fsn' v-on:click='delShow = !delShow'>{{delShow ? '完成' : '编辑'}}</i>
		</mt-header>
		<mt-cell v-bind:title="customer" is-link class='shopcar-cell'></mt-cell>
		<div v-for='(item,index) in orders' v-bind:key='index' class='mt-10'>
			<div class='order-wrapper'>
		    <input type='checkbox' v-bind:value='item.id' v-model='selectedOrders' class='check'>
			  <section class='order-image'>
			    <img v-bind:src='item.image' width='75' class='f-fl'>
				</section>
				<section class='order-info' v-on:click='go("/good/show1")'>
				  <h4 class='order-title f-fs2'>{{item.name}}</h4>
					<p class='order-bread f-fs1'>{{item.specification}} 批号：{{item.lotNum}}</p>
					<p class='order-bread f-fs1'>{{item.company}}</p>
				</section>
			</div>
			<mt-cell label="修改" class='shopcar-cell'>
				<section class='price' slot='title' v-on:click='edit(item)'>
					<i class='price-now f-fsn f-fs1'>¥{{item.price}}</i>
					<i class='price-old f-fsn f-fs1'>¥{{item.oldPrice}}</i>
					<i class='order-count f-fsn'>{{item.count}}</i>
					<i class='iconfont color-grey f-fr' style='font-size: 12px' slot='icon'>修改 &#xe631;</i>
				</section>
			</mt-cell>
			<mt-cell v-if='item.remark' class='shopcar-cell'>
			  <p class='remark f-fs1' slot='title'><i class='offer f-ib f-tac f-fsn'>惠</i>{{item.remark}}</p>
			</mt-cell>
		</div>
		<footer class='footer' v-if='delShow'>
		  <label class='amount'>
		    <input type='checkbox' class='' v-model='selectedAll' v-on:click='toggleAll'> {{selectedAll ? '全不选' : '全选'}}
			</label>
			<mt-button type="default" v-bind:disabled='selectedOrders.length == 0 ? true : false' class='sub' size='small' v-on:click='del'>删除</mt-button>
		</footer>
		<footer class='footer' v-else>
		  <label class='amount'>
		    <input type='checkbox' class='' v-model='selectedAll' v-on:click='toggleAll'> {{selectedAll ? '全不选' : '全选'}}
			</label>
		  <section class='amount'>合计：<i class='f-fsn'>¥338.00</i></section>
			<mt-button type="default" v-bind:disabled='selectedOrders.length == 0 ? true : false' class='sub' size='small' v-on:click='go("/shopcar/result")'>提交({{selectedOrders.length}})</mt-button>
		</footer>
		<tabbar selected='/shopcar1'></tabbar>
		<mt-popup v-model="popupVisible" position="bottom" v-bind:closeOnClickModal='false' class='popup'>
			<div class='pop-wrapper f-fs2'>
				<mt-cell class='good-cell' v-bind:value="'核算价:' + selected.accounting">
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
						<dd class='f-ib'>¥{{totalPrice }}</dd>
					</dl>
				</section>
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