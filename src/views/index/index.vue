<template>
      <div>
       <header class="page-header">
		<h4>CAST商城</h4>
	</header>
	
	<div class="contaniner fixed-contb">
		<figure class="ban swiper-container">
			<wv-swipe class="swiper-wrapper" :height="225" :autoplay="4000">
				<wv-swipe-item class="swiper-slide"><a href="#">
						<img src="../../assets/images/index-ban01.png"/>
					</a></wv-swipe-item>
				<wv-swipe-item class="swiper-slide"><a href="#">
						<img src="../../assets/images/index-ban02.png"/>
					</a></wv-swipe-item>
				<wv-swipe-item class="swiper-slide"><a href="#">
						<img src="../../assets/images/index-ban03.png"/>
					</a></wv-swipe-item>
			</wv-swipe>
			
		</figure>
		
		<section class="shop">
			<h3>
				<a href="#">
					服装
					<span><img src="../../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-ph01.png"/>
						<b>男装</b>
					</a>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-ph02.png"/>
						<b>女装</b>
					</a>
				</dd>
			</dl>
		</section>
		
		<section class="shop">
			<h3>
				<a href="list.html">
					食品
					<span><img src="../../assets/images/right.png"/></span>
				</a>
			</h3>
			<dl>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-03.png"/>
						<b>切糕</b>
					</a>
				</dd>
				<dd>
					<a href="list.html">
						<img src="../../assets/images/index-ph04.png"/>
						<b>酥饼</b>
					</a>
				</dd>
			</dl>
		</section>
	</div>
	
	
    </div>
</template>
