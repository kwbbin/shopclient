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
<div class="rgister Narrow">
  <div class="Sign">
     <div class="AD_img">
         <img  src="../assets/images/adbg_03.png" />
    </div>
     <div class="rgister-form">
      <div class="rgister-name"><span class="name">用户注册</span> <span class="English">REGISTER</span></div>
	  <form id="form1" name="form1" method="post" action=""> 
	   <div class="form clearfix">	
	  <div class="item">
      <label class="rgister-label">用&nbsp;&nbsp;户&nbsp;&nbsp;名：</label>
      <input v-model.trim="username" :class="{'error': $v.username.$error}" name="" type="text"  class="text" /><b>*</b> 
      <span class="allowSend red" v-if="!$v.username.required" ><br> 用户名不能为空</span>
    </div>
    <div class="item">
      <label class="rgister-label">手&nbsp;&nbsp;机&nbsp;&nbsp;号：</label>
      <input v-model="phone" name="" type="text"  class="text" /><b>*</b> <br>
      <span class="allowSend red" v-if="!$v.phone.required" > 手机号不能为空</span>
      <span class="allowSend red" v-if="!$v.phone.phoneFormat" ><br> 请输入正确手机号</span>
    </div>
		<div class="item">
        <label class="rgister-label" >密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input v-model="password" name="" type="password"  class="text" p/><b>*</b> 
        <span class="allowSend red" v-if="!$v.password.required" ><br> 密码不能为空</span>
        <span class="red allowSend"
      v-if="!$v.password.minLength"><br>密码不能小于{{$v.password.$params.minLength.min}}位</span>
        <span class="red allowSend"
      v-if="!$v.password.maxLength"><br>密码不能大于{{$v.password.$params.maxLength.max}}位</span>
    </div> 
	    <div class="Password_qd">
            <ul v-if="checkPass(password) == 0">
                <li  class="r">弱</li><li class="z">中</li><li class="q">强</li>
            </ul>
            <ul v-if="checkPass(password) == 1">
                <li  class="r">弱</li><li class="z">中</li>
            </ul>
            <ul v-if="checkPass(password) == 2">
                <li  class="r">弱</li>
            </ul>
        </div>
		<div class="item">
      <label class="rgister-label " >确认密码：</label>
      <input v-model="passwordAgin" name="" type="password"  class="text" /><b>*</b> 
      <span class="message red" v-if="!$v.passwordAgin.required" ><br> 密码验证不能为空</span>
      <span class="red allowSend" v-if="!$v.passwordAgin.sameAsPassword"><br>两次输入的密码不一样</span>
    </div>
	    <div class="item">
        <label class="rgister-label" >电子邮箱：</label>
        <input v-model="email" name="" type="text"  class="text" /><b></b>
      </div> 
	 
	    <div class="item ">
        <label  class="rgister-label ">验&nbsp;证&nbsp;码：</label>
        <input v-model="vCode" name="" type="text"  class="Recommend_text" /><b>*</b>
        <span href="#" @click="getSMS();" style="color:#409EFF;cursor:pointer;">&nbsp;&nbsp;&nbsp;发送验证码</span> 
        <span class="allowSend red" v-if="!$v.vCode.required" ><br> 验证码不能为空</span>
      </div>
		<div class="item-ifo">
                    <input type="checkbox" class="checkbox left" checked="checked" id="readme" onclick="agreeonProtocol();">
                    <label for="protocol" class="left">我已阅读并同意<a href="#" class="blue" id="protocol">《旺旺超市用户注册协议》</a></label>
                </div>
	  </div>	
	  <div class="rgister-btn">
	  <a href="javascript:;" class="btn_rgister" @click="submit();">注&nbsp;&nbsp;&nbsp;&nbsp;册</a>
	  </div>
	  <div class="Note"><span class="login_link">已是会员 <router-link to="/login"> 请登录</router-link></span></div>	  
	  </form>
		</div>	
   </div>
</div>
<!--底部样式-->
 <div class="bottom_footer">
   <p><a href="#">关于我们</a> | <a href="#">联系我们</a> | <a href="#">商家入驻</a> | <a href="#">法律申明</a> | <a href="#">友情链接</a>  </p>
	 <p>Copyright©2014四川金祥保险销售有限公司.All Rights Reserved. </p>
	 <p>川ICP备09150084号</p>
   </div>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/common.css'
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import {phone} from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      phone:'',
      password: '',
      passwordAgin:'',
      email: '',
      vCode: '',
      msg: '',
      mydata: '',
      code: "",
      token: '',
      requestNum:0,
      allowSend:false
    }
  },
  methods: {
    requestPost:function (str,obj,successfun,failfun){
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
              if(successfun!=null)
              successfun();
          })
          .catch(Error=>{
              // this.requestNum++; 
              // console.log(Error)
              if(failfun!=null)
              failfun();
          })
    },
    submit:function(){
      var This= this;
       var allowSendNum = document.getElementsByClassName("allowSend").length;
       if(allowSendNum == 0){
        var oldToken = this.token;
        var jsons={loginName:this.username,password:this.password,passwordAgin:this.passwordAgin,phone:this.phone,email:this.email,code:this.vCode}
        this.requestPost('/user/reginster',jsons,function(){
          
          if(This.code == 0){
            // This.$message({
            //     message: "注册成功，正在跳转登录界面，请稍等",
            //     type: 'success'
            // });
            This.msg="注册成功，正在跳转登录界面，请稍等";
            setTimeout(function(){
              This.$router.push('/login');
            },4000);
          }else{
            this.requestNum++;
          }
        },null);
       }else{
         this.msg="请完整填写信息";
         this.requestNum++;
       }
    },
    getSMS:function(){
      var This = this;
      var jsons={phone:this.phone}
      this.requestPost('/user/SMSCode',jsons,null,function(){
          This.msg="发送失败";
          This.requestNum++;
      });
        
    }
    ,
    checkPass: function(str){
        // var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{8,30}');
        // if (!pwdRegex.test(str)) {
        //     alert("您的密码复杂度太低（密码中必须包含字母、数字），请及时修改密码！");
        // }
        // var pattern = /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#\$%\^&\*\?\(\),\.;:'"<>\{\}\[\]\\/\+-=\|_]).*$/;
        var lowRegex1 = new RegExp('(?=.*[a-z]).{8,30}');
        var lowRegex2 = new RegExp('(?=.*[A-Z]).{8,30}');
        var lowRegex3 = new RegExp('(?=.*[0-9]).{8,30}');

        var midRegex1 = new RegExp('(?=.*[0-9])(?=.*[a-z]).{8,30}');
        var midRegex2 = new RegExp('(?=.*[0-9])(?=.*[A-Z]).{8,30}');
        var midRegex3 = new RegExp('(?=.*[a-z])(?=.*[A-Z]).{8,30}');

        var powRegex = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}');

        if(powRegex.test(str)){
            return 0;
        }else if(midRegex3.test(str)||midRegex2.test(str)||midRegex1.test(str)){
            return 1;
        }else if(lowRegex3.test(str)||lowRegex2.test(str)||lowRegex1.test(str)){
            return 2;
        }

    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(0),
      maxLength: maxLength(20)
    },
    phone: {
      required,
      phoneFormat:function(phone){
        var pattern = /^1[34578]\d{9}$/;
          if (pattern.test(phone)) {
            return true;
          }else{ 
            return false;
          }
        }
    },
    vCode: {
      required,
      minLength: minLength(0),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(30)
    },
    passwordAgin: {
      required,
      sameAsPassword: sameAs('password')
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
.red{
  color: red;
}
</style>
