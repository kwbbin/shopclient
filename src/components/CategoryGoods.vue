<template>
  <div class="GoodsDetail">
   <!--顶部样式--> 
   <div id="header_top"> 
    <div id="top"> 
     <div class="Inside_pages"> 
      <div class="Collection">
       {{getTime()}}欢迎光临旺旺超市！
       <em></em>
       <a href="#">收藏我们</a>
      </div> 
      <div class="hd_top_manu clearfix"> 
       <ul class="clearfix"> 
        <li class="hd_menu_tit zhuce" data-addclass="hd_menu_hover">欢迎光临本店！<span class="red" v-if="user!=''">{{loginName}}</span><span class="red hand" v-if="user!=''" @click="loginOut()">注销</span>
         <router-link to="/login" class="red" v-if="user==''">
          [请登录]
         </router-link> <span v-if="user==''">新用户</span>
         <router-link to="/regist" v-if="user==''" class="red">
          [免费注册]
         </router-link></li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#"><router-link to="/">首页</router-link></a></li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#"><router-link to="/pay">我的订单</router-link></a></li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"> <a href="#"><router-link to="/ShoppingCart">购物车</router-link></a> </li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#">联系我们</a></li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#"><router-link to="/user">我的信息</router-link></a></li> 
       </ul> 
      </div> 
     </div> 
    </div> 
    <!--样式--> 
    <!--顶部样式2--> 
    <div id="header " class="header page_style"> 
     <div class="logo">
      <a href="#"><img src="../assets/images/logo.png" /></a>
     </div> 
     <!--可修改图层--> 
     <div class="festival">
      <!-- <a href="#"><img src="../assets/images/logo_yd.png" /></a> -->
     </div> 
     <!--结束图层--> 
     <div class="Search"> 
      <p><input name="" type="text" class="text" v-model="searchStr" /><input name="" type="submit" @click="searchGoods()" value="搜 索" class="Search_btn" /></p> 
      <!-- <p class="Words"><a href="#">苹果</a><a href="#">香蕉</a><a href="#">菠萝</a><a href="#">西红柿</a><a href="#">橙子</a><a href="#">苹果</a></p>  -->
     </div> 
     <!--可修改图层2--> 
     <!--<div class="festival1"><a href="#"><img src="images/logo_sd.png" /></a></div>-->
     <!--结束--> 
     <!--购物车样式--> 
     <div class="hd_Shopping_list" id="Shopping_list"> 
      <div class="s_cart">
       <em></em>
       <a href="#"><router-link to="/ShoppingCart">我的购物车</router-link></a> 
       <i class="ci-right">&gt;</i>
      </div> 
     </div> 
    </div> 
   </div> 


    <div class="middle clearfix">
        <div>
            <el-breadcrumb separator="/" style="margin-bottom:20px">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品分类</el-breadcrumb-item>
                <el-breadcrumb-item>{{categoryName}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
           <div class="imageBox"  v-for="(item, i) in goods">
               <router-link v-bind:to="'/goodsDetails'+item.goodsId" ><img class="img" :src="'http://127.0.0.1:8083/file'+item.imageUrl" :alt="item.goodsDesc"></router-link>
               <div class="detail">
                   <div class="name"><p>{{item.name}}</p></div>
                   <div class="desc"><p>{{item.goodsDesc}}</p></div>
               </div>
           </div>
        </div>
    </div>


   <!--底部样式-->
    <div class="ft_footer_service " id="footer">
      <div class="footerbox" >
      <!--底部-->
      <div class="Menu_style ensure ">
        <div class="phone">
          400-3456-333
        </div>
        <div class="icon_en">
        <a href="#" class="icon_link" style="padding-left:0"><img src="../assets/images/footer_icon_31.png" /><span class="left"><h2>退换货</h2>7天无理由退换货</span></a>
        <a href="#" class="icon_link"><img src="../assets/images/footer_icon_33.png" /><span class="left"><h2>正品保障</h2>企业认证产品</span></a>
        <a href="#" class="icon_link"><img src="../assets/images/footer_icon_35.png" /><span class="left"><h2>满包邮</h2>满68元包邮</span></a>
        <a href="#" class="icon_link"><img src="../assets/images/footer_icon_37.png" /><span class="left"><h2>直供产品</h2>厂家直销平台</span></a>
        </div>
      </div>
      </div>
    </div>
    <!--底部样式-->
    <div class="footer">
      <div class="footerbox clearfix">
      <div class="clearfix">
      <div class="left help_link">
        <dl>
      <dt>投保指南</dt>
      <dd><a href="#">保险需求测试</a></dd>
        <dd><a href="#">专题及活动</a></dd>
        <dd><a href="#">挑选保险产品</a> </dd>
        <dd><a href="#">常见问题 </a></dd>
      </dl>
      <dl>
      <dt>保险服务</dt>
      <dd><a href="#">保险需求测试</a></dd>
        <dd><a href="#">专题及活动</a></dd>
        <dd><a href="#">挑选保险产品</a> </dd>
        <dd><a href="#">常见问题 </a></dd>
      </dl>
      <dl>
      <dt>支付方式</dt>
      <dd><a href="#">保险需求测试</a></dd>
        <dd><a href="#">专题及活动</a></dd>
        <dd><a href="#">挑选保险产品</a> </dd>
        <dd><a href="#">常见问题 </a></dd>
      </dl>
      <dl>
      <dt>帮助中心</dt>
      <dd><a href="#">保险需求测试</a></dd>
        <dd><a href="#">专题及活动</a></dd>
        <dd><a href="#">挑选保险产品</a> </dd>
        <dd><a href="#">常见问题 </a></dd>
      </dl>	   
      </div>
      <!--信息内容-->
      </div>

    <div class="text_link">
      <p>
      <a href="#">关于我们</a>｜ <a href="#">公开信息披露</a>｜ <a href="#">加入我们</a>｜ <a href="#">联系我们</a>｜ <a href="#">版权声明</a>｜ <a href="#">隐私声明</a>｜ <a href="#">网站地图</a></p>
      <p>蜀ICP备11017033号 Copyright ©2011 成都福际生物技术有限公司 All Rights Reserved. Technical support:CDDGG Group</p>
      </div>
   </div> 
  </div>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/common.css'
import '@/assets/js/common_js.js'
import '@/assets/js/footer.js'
import '@/assets/font/iconfont.css'
import { hostname } from 'os'
import { log } from 'util'

export default {
  name: 'GoodsDetail',
  data () {
    return {
      mydata:'',
      msg:'',
      code:'',
      token:'',
      url:'',
      user:'',
      loginName:'',
      categoryName:'',
      categoryId:this.$route.query.cId,
      goods:'',
      searchStr:''
    }
  },
  methods: {
    requestPost:function (str,obj,successfun,failfun){
      this.$axios({
              url:str,
              method:'post',
              data:obj,
              headers: {'token':localStorage.getItem("token")},
          })
          .then(res=>{
              this.response = res.data;
              this.mydata = res.data.data;
              this.msg = res.data.message;
              this.code = res.data.code;
              this.requestNum++; 
              this.token = res.data.token;  
              if(successfun!=null)
              successfun();
          })
          .catch(Error=>{
              if(failfun!=null)
              failfun();
          })
    },
    jqueryAjax:function(url,obj,successfun,failfun){
      $.ajax({
            url: url,//请求路径
            data: JSON.stringify(obj),
            dataType: 'json',
			      async: false,
            contentType:'application/json',
            type: "POST",//GET
            headers: {'token':localStorage.getItem("token")},
            //dataType: "JSON",//需要返回JSON对象(如果Ajax返回的是手动拼接的JSON字符串,需要Key,Value都有引号)
            success: function(resp) {
              successfun(resp);
            },
            error: function(a, b, c) {
                //a,b,c三个参数,具体请参考JQuery API
                // failfun(a,b,c);
            }
        })
    },
    getTime: function(){
      var t = new Date();
      var h = t.getHours();
      if((h>0&&h<=4)||(h<24&&h>17))
        return "晚上好，"
      
      if(h>=5&&h<=11)
        return "上午好，"
      
      if(h>11&&h<14)
        return "中午好，"
      
      if(h>=14&&h<=17)
        return "下午好，"
    },
    loginOut:function(){
      this.requestPost('/user/loginOut');
      localStorage.removeItem("token");
      this.loginName = '';
      this.user = '';
      alert("已注销");
    },
    initData:function(){
        var This=this;
        This.requestPost("/getCategoryNameById",{goodsSortTwoId:This.categoryId},function () {
            This.categoryName=This.mydata;
        },null);

        //得到数据
        This.requestPost("/goods/getCategoryGoodsByCId",{goodsSortTwoId:This.categoryId},function () {
            This.goods=This.mydata;
        },null);

        this.requestPost('/user/getLoginUser',null,function(){
          if(This.code== 0){
            This.user = This.mydata;
            This.loginName = This.mydata.loginName;
          }
        },null);
    },
    alertMessage:function(This,type,message){
      if(type == 0){
        type= 'success';
      }else if(type == 1){
        type= 'warning';
      }else if(type == 2){
        type= 'info';
      }else{
        type='info';
      }
      This.$message({
          message: message,
          type: type
      });

    },
    searchGoods:function(){
      var This = this;
        This.$router.push({path: '/searchGoods', query: {searchStr: This.searchStr}});
    }
    
},
    created:function(){
      this.initData();
    }
}

</script>

<style scoped>

.clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size:0;
}
.GoodsDetail .middle{
    width: 1140px;
    min-height: 100px;
    padding-top: 100px;
    margin: 0 auto;;
    text-align: left;
}

.middle .imageBox{
    background: lightcyan;
    width:180px;
    height: 240px;
    margin-right: 10px;;
    float: left;
    margin-bottom: 10px;;
    margin-top: 20px;
}
.middle .imageBox .img{
    width:180px;
    height: 180px;


}
.middle .imageBox .detail{
    height: 60px;
    background: #fff;
    text-align: left ;;
}
.middle .imageBox .detail .name{
    height: 30px;;
    line-height: 30px;
    font-size: 16px;

}
.middle .imageBox .detail .desc{
    height: 30px;;
    line-height: 30px;
    color: #999;
    font-size: 14px;
    
}

/* 180*6= 1080+50=1130 */

</style>