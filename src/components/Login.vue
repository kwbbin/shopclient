<template>
  <div class="login">
      <!--顶部样式-->
<div class="common_top">
 <div class="Narrow">
  <div class=" left logo"><a href="#"><img src="../assets/images/logo.png" /></a></div>
  <!--可修改图层-->
  <div class=" left festival"><a href="#"><img src="../assets/images/logo_yd.png" /></a></div>
  <!--电话图层-->
  <div class="phone">全国服务热线：<em>400-345-5633</em></div>
 </div>
</div>
<div class="login Narrow">
   <div class="login_advertising"><img src="../assets/images/login_img_03.png" /></div>
  <div class="login_frame">
   <div class="login-form right">
     <div class="login-name"><h1 class="name">用户登录</h1><span class="login_link"><router-link to="/regist"><b></b>用户注册</router-link></span></div>
	  <!--提示信息-->
	    <div class="Prompt" v-if="username==''||password==''" >账号密码不能为空！ </div>
	    <div class="form clearfix">
	     <div class="item item-fore1"><label for="loginname" class="login-label name-label"></label><input name="" type="text" v-model="username"  class="text" placeholder="请输入用户"/>
		 </div>
		 <div class="item item-fore2"><label for="nloginpwd" class="login-label pwd-label" ></label><input name="" type="password" v-model="password" class="text" placeholder="用户密码"/>
	     </div> 
	     <div class="Forgetpass"><a href="#">忘记密码？</a></div>
	    </div>	
	    <div class="login-btn">
	    <a href="javascript:;" @click="submit()" class="btn_login">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>
	  </div>
    </div>
  </div>
</div>
<!--底部样式-->
 <div class="bottom_footer">
   <p><a href="#">关于我们</a> | <a href="#">caos联系我们</a> | <a href="#">商家入驻</a> | <a href="#">法律申明</a> | <a href="#">友情链接</a>  </p>
	 <p>Copyright©2014湖北/旺旺公司cao's.All Rights Reserved. </p>
	 <p>川ICP备09150084号</p>
   </div>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/common.css'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      mydata: '',
      code: "",
      token: '',
      requestNum:0
    }
  },
  methods: {
    requestPost:function (str,obj,fun){
      this.$axios({
              url:str,
              method:'post',
              data:obj
          })
          .then(res=>{
              this.mydata = res.data.data;
              this.msg = res.data.message;
              this.code = res.data.code;
              this.requestNum++; 
              this.token = res.data.token;  
              fun();
          })
          .catch(Error=>{
              console.log(Error)
              fun();
          })
    },
    submit:function(){
      var This = this;
      var oldToken = this.token;
      var jsons={loginName:this.username,password:this.password}
      this.requestPost('/user/login',jsons,function(){
        if(This.code == 0){
          This.msg="注册成功，正在跳转登录界面，请稍等";
            setTimeout(function(){
              This.$router.push('/');
            },4000);
        };
      });

      
    }
  },
  watch: {
    msg: function (newVal, oldVal) {
      
    },
    requestNum: function(newVal, oldVal){
      var type= 'warning';
      if(this.code == "0")
        type= 'success';
      this.$message({
          message: this.msg,
          type: type
      });

      if(this.token != "" && this.token != null){
        window.localStorage.clear();
        window.localStorage.setItem('token',this.token);
        this.$router.push('/');
      } 
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
