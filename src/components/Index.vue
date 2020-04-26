<template>
  <div class="Index">
    <!-- <router-link to="/">ç™»å½•</router-link> 
    <router-link to="/helloWorld">helloworld</router-link>     -->
    <!-- <router-link to="/index">ä¸»é¡µ</router-link> -->
    <!-- <router-view/> -->
    <div id="header_top">
      <div id="top">
        <div class="Inside_pages">
          <div class="Collection">{{getTime()}}欢迎光临旺旺超市！<em></em><a href="#">收藏我们</a></div>
      <div class="hd_top_manu clearfix">
        <ul class="clearfix">
        <li class="hd_menu_tit zhuce" data-addclass="hd_menu_hover">欢迎光临本店！<span class="red" v-if="user!=''">{{loginName}}</span><span class="red hand" v-if="user!=''" @click="loginOut()">注销</span><router-link to="/login" class="red" v-if="user==''">[请登录]</router-link> <span v-if="user==''">新用户</span><router-link to="/regist" v-if="user==''" class="red">[免费注册]</router-link></li>
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
    <div id="header "  class="header page_style">
      <div class="logo"><a href="#"><img  style="width:200px;" src="../assets/images/logo.png" /></a></div>
      <!--可修改图层-->
      <!-- <div class="festival"><a href="#"><img  src="../assets/images/logo_yd.png" /></a></div> -->
      <!--结束图层-->
      <div class="Search">
        <p><input name="" v-model="searchStr" type="text"  class="text"/><input name="" type="submit" value="搜 索"   @click="searchGoods()"  class="Search_btn"/></p>
      <!-- <p class="Words"><a href="#">苹果</a><a href="#">香蕉</a><a href="#">菠萝</a><a href="#">西红柿</a><a href="#">橙子</a><a href="#">苹果</a></p> -->
    </div>
    <!--可修改图层2-->
      <!--<div class="festival1"><a href="#"><img src="images/logo_sd.png" /></a></div>--><!--结束-->
    <!--购物车样式-->
    <div class="hd_Shopping_list" id="Shopping_list">
      <div class="s_cart"><em></em><a href="#"><router-link to="/ShoppingCart">我的购物车</router-link></a> <i class="ci-right">&gt;</i></div>
     
    </div>
    </div>
    <!--菜单导航样式-->
    <div id="Menu" class="clearfix">
    <div class="Inside_pages">
      <div id="allSortOuterbox">
        <div class="t_menu_img"></div>
        <div class="Category"  @mouseenter="CategoryBoxShow(true)" @mouseleave="CategoryBoxShow(false)"><a href="#"><i class="el-icon-s-fold"></i>&nbsp;&nbsp;&nbsp;所有产品分类</a></div>
        <div class="CategoryBox" @mouseenter="CategoryBoxShow(true)" @mouseleave="CategoryBoxShow(false)" >
            <div v-for="(item, i) in category">
                <div style="display:inline-block;float:left;width:155px;height:190px;margin:10px;border-right:1px solid #eee;">
                  <h3>{{i}}</h3>
                  <span v-for="(it, j) in item">
                    <span style="display:inline-block;float:left;width:75px;height:25px;text-align:left"><router-link :to="{path:'/categoryGoods', query:{cId:it.twoId}}">{{it.sortTwo}}</router-link></span>
                  </span>
                </div>
            </div>
        </div>
      </div>
      
      <!--菜单栏-->
      <div class="Navigation" id="Navigation">
        <ul class="Navigation_name" >
          <li><router-link :to="{path:'/categoryGoods', query:{cId:133}}">休闲食品</router-link></li>
          <li><router-link :to="{path:'/categoryGoods', query:{cId:138}}">美容护肤</router-link></li>
          <li><router-link :to="{path:'/categoryGoods', query:{cId:159}}">水果</router-link></li>
        </ul>			 
        </div>	
      </div>
    </div>
    </div>
    <div class="Slide_style" >
    <!--幻灯片样式1-->
    <div class="Menu_style clearfix" id="Slide">
        <div id="xiao_slideBox" class="xiao_slideBox">
          <div class="hd">
            <ul class="smallUl"></ul>
          </div>
          <div class="bd">
            <ul>
              <li><a href="#" target="_blank"><div id="imageBug1" ></div></a></li>
              <li><a href="#" target="_blank"><div id="imageBug2" ></div></a></li>
              <li><a href="#" target="_blank"><div id="imageBug3"></div></a></li>
            </ul>
          </div>
          <!-- 下面是前/后按钮代码，如果不需要删除即可 -->
          <a class="prev" href="javascript:void(0)"></a>
          <a class="next" href="javascript:void(0)"></a>

        </div>
    </div>
    <!--幻灯片样式-->
        <div id="slideBox" class="slideBox">
          <div class="hd">
            <ul class="smallUl"></ul>
          </div>
          <div class="bd">
            <el-carousel  arrow="never"  height="550px">
              <el-carousel-item v-for="item in 3" :key="item">
                <a href="#" target="_blank"><div :id="'imageBug'+(item+3)" ></div></a>
              </el-carousel-item>
            </el-carousel>
          </div>

        </div>
        
    </div>
    <div class="index_style clearfix" id="service_list">
      <div class="service_style">
        <!-- <ul class="service_list">
        <li class="xianduan"><a href="#"><em class="iconfont icon-plane"></em><h2>机票</h2></a></li>
        <li><a href="#"><em class="iconfont icon-train"></em><h2>火车票</h2></a></li>
        <li><a href="#"><em class="iconfont icon-friendfill"></em><h2>便民服务</h2></a></li>
        <li><a href="#"><em class="iconfont icon-jianzhutubiao"></em><h2>同城</h2></a></li>
        <li><a href="#"><em class="iconfont icon-jiudian"></em><h2>酒店</h2></a></li>
        <li><a href="#"><em class="iconfont icon-chongzhi"></em><h2>充值</h2></a></li>
        <li><a href="#"><em class="iconfont icon-car"></em><h2>交通违章</h2></a></li>
        <li><a href="#"><em class="iconfont icon-xiangzi"></em><h2>成人用品</h2></a></li>
        </ul> -->
      </div>
    </div>
    <div class="index_style clearfix">
    <!--推荐图层样式-->
      <div class="recommend">
      <div class="recommend_bg"></div>
      <div class="list">
        <div class="picScroll">
            
            <div class="bd" style="padding-left:10px;" >
                <el-carousel arrow="never" trigger="click" height="180px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              
            </div>			
        </div>
        
      </div>
      </div>
     
     <div>
      <!--产品版块样式图层-->
      <div class="Product_area clearfix" v-for="(item, index) in hotShowHome" :key="index">
      <div class="area_title"><div class="name"><span class="floors">{{item.num}}F</span>{{item.name}}</div></div>
            <!-- {{item.list}} -->
            <div class="imageBox" v-for="(item1, index) in item.list" v-if="index<12" >
               <router-link v-bind:to="'/goodsDetails'+item1.goodsId" ><img class="img" :src="'http://127.0.0.1:8083/file'+item1.imageUrl" :alt="item1.goodsDesc"></router-link>
               <div class="detail">
                   <div class="name"><p>{{item1.name}}</p></div>
                   <div class="desc"><p>{{item1.goodsDesc}}</p></div>
               </div>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      welcome: '',
      mydata:'',
      msg:'',
      code:'',
      token:'',
      user:'',
      loginName:'',
      hotShowHome:'',
      str:'',
      category:'',
      searchStr:'',
      guessGoods:'',
      notice:''
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
    CategoryBoxShow:function (show){
      var This=this;
      if(show==true){
        $(".CategoryBox").css("display","block");
      }
      else
        $(".CategoryBox").css("display","none");
    },
    initData:function(){
      var This = this;
      this.requestPost('/user/home/CategoryDetail',null,function() {
        This.category=This.mydata;
      },null);
      if(localStorage.getItem('token')!=null){
        this.requestPost('/user/getLoginUser',null,function(){
          if(This.mydata!= null)
          This.user = This.mydate;
          This.loginName = This.mydata.loginName;
        },null)
      }
      This.initHomeShow();
      This.guessUserLove();
      This.getNotice();

    },
    loginOut:function(){
      this.requestPost('/user/loginOut');
      localStorage.removeItem("token");
      this.loginName = '';
      this.user = '';
      alert("已注销");
    },
    initHomeShow:function(){
      var This = this;
      this.requestPost('/home/goods',null,function(){
        if(This.mydata!= null){
          This.hotShowHome=This.mydata;
        }
      },null)
    },
    searchGoods:function(){
      var This = this;
        This.$router.push({path: '/searchGoods', query: {searchStr: This.searchStr}});
    },
    guessUserLove:function(){
      var This = this;
      this.requestPost('/goods/guessUserLove',null,function(){
        if(This.mydata!= null){
          This.guessGoods=This.mydata;
        }
      },null)
    },getNotice:function(){
      
      var This = this;
      this.requestPost('/getNotLookNitice',null,function(){
        if(This.mydata!= null){
          This.notice=This.mydata;
          for(var i=0;i<This.notice.length;i++){
            This.$notify.info({
              title: '通知',
              dangerouslyUseHTMLString: true,
              message: "<h6>标题："+This.notice[i].title+"</h6><p >内容："+This.notice[i].noticeContent+"</p>",
              duration: 0
            });
          }
          
        }
      },null)
    }

  },
  created:function(){
    initScript();
    this.initData();
  }
}



function initScript(){
  
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#imageBug1{
  background:url(../assets/images/520_AD_03.jpg) no-repeat; 
  background-position:center; width:100%; height:645px;
}

#imageBug2{
  background:url(../assets/images/1234_03.jpg) no-repeat; 
  background-position:center; width:100%; height:645px;
}

#imageBug3{
  background:url(../assets/images/AD-03.jpg) no-repeat; 
  background-position:center; width:100%; height:645px;
}

#imageBug4{
  background:url(../assets/images/ADimg_14.jpg) no-repeat; 
  background-position:center; 
  width:100%; 
  height:645px; 
  background-size:100% 100%
}

#imageBug5{
  background:url(../assets/images/AD-02.jpg) no-repeat; 
  background-position:center; 
  width:100%; 
  height:645px;
  background-size:100% 100%
}

#imageBug6{
  background:url(../assets/images/AD-03.jpg) no-repeat; 
  background-position:center; width:100%; 
  height:645px;background-size:100% 100%
}

.Product_area{
  padding-top: 30px;
}

 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 180px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .CategoryBox{
    display: none;
    background: #fff;
    height:500px;
    width:1060px;
    position: absolute;
    top:40px;
    border:1px solid #008cd6;
  }

.hand{
  cursor:pointer;
}
.Product_area  .list_style ul>li>a:hover .Layers{
  display: block;
}
.Product_area  .list_style ul>li>a .Layers{
  display: none;
  background: #000;
  opacity:0.1;
  width: 219px;
  height: 219px;
  position: relative;
  top:-222px;
}

.Product_area  .list_style ul>li a.big:hover .Layers{
  display: block;
}
.Product_area  .list_style ul>li a.big .Layers{
  display: none;
  background: #000;
  opacity:0.1;
  width: 317px;
  height: 440px;
  position: relative;
  top:-440px;
}
.Product_area  .list_style .ulImg a:hover .Layers{
  display: block;
}
.Product_area  .list_style .ulImg a.middle .Layers{
  width: 318px;
}
.Product_area  .list_style .ulImg a .Layers{
  display: none;
  background: #000;
  opacity:0.1;
  width: 219px;
  height: 150px;
  position: relative;
  top:-150px;
}



.imageBox{
    background: lightcyan;
    width:180px;
    height: 240px;
    margin-right: 10px;;
    float: left;
    margin-bottom: 10px;;
    margin-top: 20px;
}
.imageBox .img{
    width:180px;
    height: 180px;


}
.imageBox .detail{
    height: 60px;
    background: #fff;
    text-align: center ;;
}
.imageBox .detail .name{
    height: 30px;;
    line-height: 30px;
    font-size: 16px;

}
.imageBox .detail .desc{
    height: 30px;;
    line-height: 30px;
    color: #999;
    font-size: 14px;
    
}

</style>
