<template>
  <div class="GoodsDetail">
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
      <a href="#"><img src="../assets/images/logo_yd.png" /></a>
     </div> 
     <!--结束图层--> 
     <div class="Search"> 
        </div> 
     <div class="hd_Shopping_list" id="Shopping_list"> 
      <div class="s_cart">
       <em></em>
      
       <a href="#"><router-link to="/ShoppingCart">我的购物车</router-link></a> 
       <i class="ci-right">&gt;</i>
      </div> 
     </div> 
    </div> 
   </div> 
   <!--产品详细页--> 
   <div class="clearfix  Inside_pages"> 
    <!--位置--> 
    <div id="goodsInfo"> 
     <div class="Location_link"> 
      <em></em>
      <a href="#">{{goodsSortAll.sortOne}}</a> &lt; 
      <a href="#">{{goodsSortAll.sortTwo}}</a>
     </div> 
     <!--产品详细介绍--> 
     <div class="Details_style clearfix"> 
      <div class="mod_picfold clearfix"> 
       <div class="clearfix" id="detail_main_img"> 
        <div class="layout_wrap preview"> 
          <div class="block">
            <!-- <span class="demonstration">Click 指示器触发</span> -->
            <el-carousel trigger="click" height="450px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div> 
       </div> 


       <div class="Sharing"> 
        <div class="bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1441079683326"></div> 
        <!--收藏--> 
        <div class="Collect">
         <a href="javascript:collect(92)"><em class="ico1"></em>收藏商品( 2345 )</a>
        </div> 
       </div> 
      </div> 
      <!--信息样式--> 
      <div class="textInfo"> 
       <form action="javascript:addToCart(97)" name="ECS_FORMBUY" id="ECS_FORMBUY"> 
        <div class="title">
         <h1>{{goods.name}}</h1>
         <p>{{goods.goodsDesc}}</p>
        </div> 
        <div class="mod_detailInfo_priceSales"> 
         <div class="margins"> 
          <div class="Price clearfix">
           <label>价格</label>
           <span>&yen;{{goods.price}} <b></b></span>
          </div> 
          <div class="Activity clearfix">
           <label>活动</label>
           <span>暂无</span>
          </div> 
          <div class="p_Size clearfix">
           <label>规格</label>
           <dd class="left"> 
            <div class="item  selected">
             <b></b>
             <a href="#none" title="规格">{{goods.spec}}</a>
            </div> 
           </dd>
          </div> 
         </div> 
         <div class="s_Review"> 
          <a href="#">[评论<b>87653</b>条]</a> 
         </div> 
        </div> 
        <div class="buyinfo" id="detail_buyinfo"> 
         <dl> 
          <dt>
           数量
          </dt> 
          <dd> 
           <div class="choose-amount left"> 
            <a class="btn-reduce" href="javascript:;" @click="goodsNumChange('-')">-</a> 
            <a class="btn-add" href="javascript:;" @click="goodsNumChange('+')">+</a> 
            <input class="text" id="buy-num" v-model="goodsNum" value="1" @keyup="goodsNumChange('*')" /> 
           </div> 
           <div class="P_Quantity">
            剩余：{{goods.goodsStock}}件
           </div> 
          </dd> 
          <dd> 
           <div class="wrap_btn"> 
             {{cart}}
            <a href="#" @click="shoppingCartAdd(goods.goodsId,goodsNum)" class="wrap_btn1" title="加入购物车"></a> 
            <!-- <a href="#" @click="shoppingAccount()" class="wrap_btn2" title="立即购买"></a>  -->
           </div> 
          </dd> 
         </dl> 
        </div> 
        <div class="Guarantee clearfix"> 
         <dl>
          <dt>
           支付方式
          </dt>
          <dd>
           <em></em>在线支付
          </dd> 
         </dl>
        </div> 
       </form> 
      </div> 
      <!--产品推荐--> 
      <div class="Recommend"> 
       <div class="title_name">
        同类产品推荐
       </div> 
       <div class="Recommend_list"> 
        <ul> 
         <li class="clearfix"> 
          <div class="pic_img">
           <a href=""><img src="../assets/images/Products/x-3.jpg" /></a>
          </div> 
          <div class="r_content"> 
           <div class="title">
            <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
           </div> 
           <div class="p_Price">
            ￥32.50
           </div> 
          </div> </li> 
         <li class="clearfix"> 
          <div class="pic_img">
           <a href=""><img src="../assets/images/Products/x-3.jpg" /></a>
          </div> 
          <div class="r_content"> 
           <div class="title">
            <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
           </div> 
           <div class="p_Price">
            ￥32.50
           </div> 
          </div> </li> 
         <li class="clearfix"> 
          <div class="pic_img">
           <a href=""><img src="../assets/images/Products/x-3.jpg" /></a>
          </div> 
          <div class="r_content"> 
           <div class="title">
            <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
           </div> 
           <div class="p_Price">
            ￥32.50
           </div> 
          </div> </li> 
         <li class="clearfix"> 
          <div class="pic_img">
           <a href=""><img src="../assets/images/Products/x-3.jpg" /></a>
          </div> 
          <div class="r_content"> 
           <div class="title">
            <a href="#">金龙鱼 东北大米 蟹稻共生 盘锦大米5KG</a>
           </div> 
           <div class="p_Price">
            ￥32.50
           </div> 
          </div> </li> 
        </ul> 
       </div> 
      </div> 
     </div> 
    </div> 
    <!--产品--> 
    <div class="clearfix"> 
     <div class="left_style"> 
     </div> 
     <div id="miqsp"> 
     </div> 
     <div id="coms1"> 
     </div> 
    </div> 
   </div> 
  </div> 
  <!--底部样式-->
    <div class="ft_footer_service" id="footer">
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

export default {
  name: 'GoodsDetail',
  data () {
    return {
      msg: '',
      welcome: '',
      mydata:'',
      msg:'',
      code:'',
      token:'',
      user:'',
      id:this.$route.params.id,
      loginName:'',
      goodsNum:1,
      goods:'',
      goodsSortAll:'',
      cart:''
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
      var json={goodsId:This.id}
      this.requestPost('/goods/getGoodsById',json,function(){
        This.goods=This.mydata;
      },null);

      json={goodsId:This.id}
      this.requestPost('/goods/getSortAllById',json,function(){
        This.goodsSortAll=This.mydata;
      },null);

      this.requestPost('/user/home/Category');
        if(localStorage.getItem('token')!=null){
          this.requestPost('/user/getLoginUser',null,function(){
            if(This.mydata!= null)
            This.user = This.mydate;
            This.loginName = This.mydata.loginName;
          },null)
      }
    },
    goodsNumChange:function(obj){
      if(obj=="+"&&this.goodsNum<this.goods.goodsStock)
      this.goodsNum++;
      if(obj=="-"&&this.goodsNum>0){
          this.goodsNum--;
      }
      
      if(obj=="*"){
        if(this.goodsNum>this.goods.goodsStock){
          this.goodsNum=this.goods.goodsStock;
          this.alertMessage(this,1,"商品数量已达到最大")
        }
      }
    },
    shoppingCartAdd:function(id,num){
      // 存：localStorage.setItem('weekDay',JSON.stringify(weekArray));
      // 取： weekArray = JSON.parse(localStorage.getItem('weekDay'));

      var Is=true;
      var shoppingCart=JSON.parse(localStorage.getItem("shoppingCart"));
      if(shoppingCart==null||shoppingCart==''){
          shoppingCart=new Array();
      }
      for(var i=0;i<shoppingCart.length;i++){
        if(id==shoppingCart[i].goodsId){
          Is=false;
        }
      }
      if(Is){
        var goods={goodsId:id,goodsNum:num}
        shoppingCart.push(goods);
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
        this.alertMessage(this,0,"添加成功")
      }else{
        this.alertMessage(this,1,"添加失败,商品已添加")
      }
      
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

    }
    
},
    created:function(){
      this.initData();
    }
}

</script>

<style scoped>
.Location_link{
  text-align: left;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-carousel__item{
    height: 450px;
  }
</style>