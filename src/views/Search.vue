<template>
	<div>
		<header class="top-header fixed-header">
		<a class="icona" href="javascript:history.go(-1)">
				<img src="../assets/images/left.png"/>
			</a>
		<h3>男装专区</h3>
			
			<a class="iconb" href="shopcar.html">
				<img src="../assets/images/shopbar.png"/>
			</a>
	</header>
	
	<div class="contaniner fixed-conta">
		<section class="list">
			<figure><img src="../assets/images/list-ban01.png"/></figure>
			<div class="search">
				<input v-model="search.keywords" type="search" placeholder="韩版卫衣" />
				<label><img @click="dosearch" src="../assets/images/list-search.png"/></label>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span>全部</span>
						</a>
					</li>
					<li class="list-active">
						<a href="#">
							<span>销量</span>
							<img src="../assets/images/up-red.png"/>
						</a>
					</li>
					<li>
						<a href="#">
							<span>价格</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>评价</span>
						</a>
					</li>
				</ul>
			</nav>
			<ul class="wall">
				<li class="pic" v-for="(v,k) in goods" :key="k">
					<a href="detail.html">
						<img :src="v.logo"/>
						<p>{{v.goods_name}}</p>
						<b>￥{{v.skus[0].price}}</b>
					</a>
				</li>
				
			</ul>
		</section>
	</div>
	
	</div>
</template>

<style >
/* @import './assets/style.css'; */
	 @import '../assets/loaders.min.css';
	 @import '../assets/loading.css';
	 
</style>

<script>
export default {
	data(){
		return{
			search:{
				"page":1,
			    "per_page":10,
			    "keywords":this.$route.query.keywords,
			    "sortby":"id",
			    "order":"desc"
			},
			goods:[],
		}
	},
	// 生命周期函数   初始化数据   当页面打开时第一时间操作
	created(){
       this.dosearch();
	},
	methods:{
		dosearch(){
			// console.log(this.$route.query.keywords);
			if(this.$route.query.keywords){
				this.axios.get('/goods',{
					params:this.search
					})
					.then(res=>{
						console.log(res.data.data)
						this.goods = res.data.data.data
					})
			}
			
		}
	}
}
</script>


