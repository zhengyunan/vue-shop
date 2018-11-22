<template>
  <div>
     <router-view></router-view>
     <footer class="page-footer fixed-footer">
		<ul>
			<li :class="{'active':$route.name=='Index'}">
				<router-link to="/">
				    <img v-if="$route.name=='Index'" src="../assets/images/footer01.png"/> 
					<img v-else src="../assets/images/footer001.png"/>
					<p>首页</p>
				</router-link>
			</li>
			<li :class="{'active':$route.name=='category'}">
				<router-link to="/category">
				<img v-if="$route.name=='category'" src="../assets/images/footer02.png"/>
					<img v-else src="../assets/images/footer002.png"/>
					<p>分类</p>
				</router-link>
			</li>
			<li :class="{'active':$route.name=='goods_car'}">
				<router-link to="/goods_car">
				    <img v-if="$route.name=='goods_car'" src="../assets/images/footer03.png"/>
					<img v-else src="../assets/images/footer003.png"/>
					<p>购物车</p>
				</router-link>
			</li>
			<li :class="{'active':$route.name=='profile'}">
				<router-link to="profile">
					<img v-if="$route.name=='profile'" src="../assets/images/footer04.png"/>
					<img v-else src="../assets/images/footer004.png"/>
					<p>个人中心</p>
				</router-link>
			</li>
		</ul>
	</footer>
  </div>
</template>
