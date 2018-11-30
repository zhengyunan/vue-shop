<template>
	<div>
		<header class="top-header">
			<a class="text texta" href="index.html">取消</a>
			<h3>登录</h3>
			<a class="text" href="sign.html">注册</a>
	    </header>
	
		<div class="login">
			<form>
				<ul>
					<li>
						<img src="../assets/images/login.png"/>
						<label>账号</label>
						<input v-model="form.username" type="text" placeholder="请输入账号"/>
					</li>
					<li>
						<img src="../assets/images/password.png"/>
						<label>密码</label>
						<input v-model="form.password" type="password" placeholder="请输入密码"/>
					</li>
				</ul>
				<input @click.prevent="login" type="submit" value="登录"/>
			</form>
		</div>

	</div>
</template>
<style scoped>
	  
</style>
<script>
import { Dialog , Toast} from 'we-vue'
export default {
	data(){
		return{
			form:{
				username:'',
			    password:''
			}
			
		}
	
	},
	methods:{
		login(){
			this.axios.post('/authorization',this.form)
			    .then(res=>{
					if(res.data.status_code==200){
						Dialog({
							message: '登录成功',
							skin: 'ios'
						}).then(xxx=>{
                            localStorage.setItem('ACCESS_TOKEN',res.data.data.ACCESS_TOKEN)
							this.$router.push('/');
						});
					}else if(res.data.status_code==404){
                      Toast.fail({
							duration: 2000,
							message: '用户不存在'
					  });
					}else if(res.data.status_code==422){
                      Toast.fail({
							duration: 2000,
							message: '格式不正确'
					  })
					}else if(res.data.status_code==400){
                      Toast.fail({
							duration: 2000,
							message: '密码不正确'
					  })
					}

				})
		
		}
	}
}
</script>

