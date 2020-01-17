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
        <li class="hd_menu_tit zhuce" data-addclass="hd_menu_hover">欢迎光临本店！<router-link to="/login" class="red">[请登录]</router-link> 新用户<router-link to="/regist" class="red">[免费注册]</router-link></li>
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#">我的订单</a></li> 
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"> <a href="#">购物车(<b>0</b>)</a> </li>
        <li class="hd_menu_tit" data-addclass="hd_menu_hover"><a href="#">联系我们</a></li>
        <li class="hd_menu_tit list_name" data-addclass="hd_menu_hover"><a href="#" class="hd_menu">客户服务</a>
          <div class="hd_menu_list">
          <ul>
            <li><a href="#">常见问题</a></li>
          <li><a href="#">在线退换货</a></li>
            <li><a href="#">在线投诉</a></li>
          <li><a href="#">配送范围</a></li>
          </ul>
        </div>	   
        </li>
          <li class="hd_menu_tit phone_c" data-addclass="hd_menu_hover"><a href="#" class="hd_menu "><em class="iconfont icon-phone"></em>手机版</a>
          <div class="hd_menu_list erweima">
          <ul>
                <img src="images/erweima.png"  width="100px" height="100"/>
          </ul>
        </div>	   
        </li>
        </ul>
      </div>
        </div>
      </div>
      <!--样式-->
    <!--顶部样式2-->
    <div id="header "  class="header page_style">
      <div class="logo"><a href="#"><img  style="width:200px;" src="../assets/images/logo.png" /></a></div>
      <!--可修改图层-->
      <div class="festival"><a href="#"><img  src="../assets/images/logo_yd.png" /></a></div>
      <!--结束图层-->
      <div class="Search">
        <p><input name="" type="text"  class="text"/><input name="" type="submit" value="搜 索"  class="Search_btn"/></p>
      <p class="Words"><a href="#">苹果</a><a href="#">香蕉</a><a href="#">菠萝</a><a href="#">西红柿</a><a href="#">橙子</a><a href="#">苹果</a></p>
    </div>
    <!--可修改图层2-->
      <!--<div class="festival1"><a href="#"><img src="images/logo_sd.png" /></a></div>--><!--结束-->
    <!--购物车样式-->
    <div class="hd_Shopping_list" id="Shopping_list">
      <div class="s_cart"><em></em><a href="#">我的购物车</a> <i class="ci-right">&gt;</i><i class="ci-count" id="shopping-amount">0</i></div>
      <div class="dorpdown-layer">
        <div class="spacer"></div>
      <!-- <div class="prompt"></div><div class="nogoods"><b></b>购物车中还没有商品，赶紧选购吧！</div> -->
      <ul class="p_s_list">	   
        <li>
            <div class="img"><img src="images/tianma.png"></div>
            <div class="content"><p><a href="#">产品名称</a></p><p>颜色分类:紫花8255尺码:XL</p></div>
          <div class="Operations">
          <p class="Price">￥55.00</p>
          <p><a href="#">删除</a></p></div>
          </li>
        </ul>		
      <div class="Shopping_style">
      <div class="p-total">共<b>1</b>件商品　共计<strong>￥ 515.00</strong></div>
        <a href="#" title="去购物车结算" id="btn-payforgoods" class="Shopping">去购物车结算</a>
      </div>	 
      </div>
    </div>
    </div>
    <!--菜单导航样式-->
    <div id="Menu" class="clearfix">
    <div class="Inside_pages">
      <div id="allSortOuterbox">
        <div class="t_menu_img"></div>
        <div class="Category"  @mouseenter="CategoryBoxShow(true)" @mouseleave="CategoryBoxShow(false)"><a href="#"><i class="el-icon-s-fold"></i>&nbsp;&nbsp;&nbsp;所有产品分类</a></div>
        <div class="CategoryBox" @mouseenter="CategoryBoxShow(true)" @mouseleave="CategoryBoxShow(false)" >
            <div v-for="(item, i) in mydata">
                <div style="display:inline-block;float:left;width:155px;height:190px;margin:10px;border-right:1px solid #eee;">
                  <h3>{{i}}</h3>
                  <span v-for="(it, j) in item">
                    <span style="display:inline-block;float:left;width:75px;height:25px;text-align:left">{{it}}</span>
                  </span>
                </div>
            </div>
        </div>
      </div>
      
      <!--菜单栏-->
      <div class="Navigation" id="Navigation">
        <ul class="Navigation_name">
          <li><a href="#">美食</a></li>
          <li><a href="#">美妆</a></li>
          <li><a href="#">服饰</a></li>
          <li><a href="#">产品预订</a></li>
          <li><a href="#">积分商城</a></li>
          <li><a href="#">礼品DIY</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="index.html">简洁版</a></li>
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
        <ul class="service_list">
        <li class="xianduan"><a href="#"><em class="iconfont icon-plane"></em><h2>机票</h2></a></li>
        <li><a href="#"><em class="iconfont icon-train"></em><h2>火车票</h2></a></li>
        <li><a href="#"><em class="iconfont icon-friendfill"></em><h2>便民服务</h2></a></li>
        <li><a href="#"><em class="iconfont icon-jianzhutubiao"></em><h2>同城</h2></a></li>
        <li><a href="#"><em class="iconfont icon-jiudian"></em><h2>酒店</h2></a></li>
        <li><a href="#"><em class="iconfont icon-chongzhi"></em><h2>充值</h2></a></li>
        <li><a href="#"><em class="iconfont icon-car"></em><h2>交通违章</h2></a></li>
        <li><a href="#"><em class="iconfont icon-xiangzi"></em><h2>成人用品</h2></a></li>
        </ul>
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
     
      <!--产品版块样式图层-->
      <div class="Product_area clearfix">
      <div class="area_title"><div class="name"><span class="floors">1F</span>男装女装</div></div>
      <div class="list_style clearfix">
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/AD-1.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-2.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-3.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-4.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="middle">
        <!--广告-->
          <div class="hd">
            <a class="prev" href="javascript:void(0)">&gt;</a>
        <a class="next" href="javascript:void(0)">&lt;</a>
          </div>
          <div class="bd">
          <ul>
            <li><a href="#"><img src="../assets/Products/AD-5.jpg" /></a></li>
            <!-- <li><a href="#"><img src="../assets/Products/AD-6.jpg" /></a></li> -->
          </ul>
          </div>    
        </div>
        
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/AD-1.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-2.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-3.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-4.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="advertising">
        <a href="#"><img src="../assets/Products/AD-7.jpg"  width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-8.jpg" width="219" height="150"/></a>
        <a href="#" class="da_AD"><img src="../assets/Products/AD-9.jpg" width="318" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-10.jpg" width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-7.jpg" width="219" height="150"/></a>
        </div>
        <!--品牌-->
        <div class="Brand_Gallery">
        <a href="#"><img src="../assets/Brand/p-1.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-4.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-6.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-11.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-14.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-17.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-19.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-13.jpg"  width="120" height="32"/></a>
        </div>
      </div>
      </div>
        <!--产品版块样式图层-->
      <div class="Product_area clearfix">
      <div class="area_title"><div class="name"><span class="floors">2F</span>个人美妆</div></div>
      <div class="list_style clearfix">
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/AD-1.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-2.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-3.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-4.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="middle">
        <!--广告-->
          <div class="hd">
            <a class="prev" href="javascript:void(0)">&gt;</a>
        <a class="next" href="javascript:void(0)">&lt;</a>
          </div>
          <div class="bd">
          <ul>
          <li><a href="#"><img src="../assets/Products/AD-5.jpg" /></a></li>
            <!-- <li><a href="#"><img src="../assets/Products/AD-6.jpg" /></a></li> -->
          </ul>
          </div>    
        </div>
        
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/AD-15.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-16.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-17.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-18.jpg" /><div class="Layers"><img src="../assets/images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="advertising">
        <a href="#"><img src="../assets/Products/AD-11.jpg"  width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-12.jpg" width="219" height="150"/></a>
        <a href="#" class="da_AD"><img src="../assets/Products/AD-14.jpg" width="318" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-13.jpg" width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-19.jpg" width="219" height="150"/></a>
        </div>
        <!--品牌-->
        <div class="Brand_Gallery">
        <a href="#"><img src="../assets/Brand/p-1.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-4.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-6.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-11.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-14.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-17.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-19.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-13.jpg"  width="120" height="32"/></a>
        </div>
      </div>
      </div>
        <!--产品版块样式图层-->
      <div class="Product_area clearfix">
      <div class="area_title"><div class="name"><span class="floors">3F</span>美食保健</div></div>
      <div class="list_style clearfix">
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/S-AD-5.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/S-AD-6.jpg" width="200" height="220" /><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-3.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-4.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="middle">
        <!--广告-->
          <div class="hd">
            <a class="prev" href="javascript:void(0)">&gt;</a>
        <a class="next" href="javascript:void(0)">&lt;</a>
          </div>
          <div class="bd">
          <ul>
          <li><a href="#"><img src="../assets/Products/AD-5.jpg" /></a></li>
            <!-- <li><a href="#"><img src="../assets/Products/AD-6.jpg" /></a></li> -->
          </ul>
          </div>    
        </div>
        
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/S-AD-1.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/S-AD-2.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/S-AD-3.jpg" width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/S-AD-4.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
        </ul>
        </div>
        <div class="advertising">
        <a href="#"><img src="../assets/Products/S-AD-X-1.jpg"  width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/S-AD-X-2.jpg" width="219" height="150"/></a>
        <a href="#" class="da_AD"><img src="../assets/Products/AD-14.jpg" width="318" height="150"/></a>
        <a href="#"><img src="../assets/Products/S-AD-X-3.jpg" width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/AD-19.jpg" width="219" height="150"/></a>
        </div>
        <!--品牌-->
        <div class="Brand_Gallery">
        <a href="#"><img src="../assets/Brand/p-1.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-4.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-6.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-11.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-14.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-17.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-19.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-13.jpg"  width="120" height="32"/></a>
        </div>
      </div>
      </div>
        <!--产品版块样式图层-->
      <div class="Product_area clearfix">
      <div class="area_title"><div class="name"><span class="floors">4F</span>鞋子箱包</div></div>
      <div class="list_style clearfix">
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/X-AD-5.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/X-AD-6.jpg" width="200" height="220" /><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/X-AD-7.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
          <li><a href="#"><img src="../assets/Products/AD-4.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png" /></div></a></li>
        </ul>
        </div>
        <div class="middle">
        <!--广告-->
          <div class="hd">
            <a class="prev" href="javascript:void(0)">&gt;</a>
        <a class="next" href="javascript:void(0)">&lt;</a>
          </div>
          <div class="bd">
          <ul>
          <li><a href="#"><img src="../assets/Products/AD-5.jpg" /></a></li>
            <!-- <li><a href="#"><img src="../assets/Products/AD-6.jpg" /></a></li> -->
          </ul>
          </div>    
        </div>
        
        <div class="Left_side">
        <ul>
          <li><a href="#"><img src="../assets/Products/X-AD-1.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/X-AD-2.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/X-AD-3.jpg" width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
          <li><a href="#"><img src="../assets/Products/S-AD-4.jpg"  width="200" height="220"/><div class="Layers"><img src="images/bg_img.png"  width="220" height="220"/></div></a></li>
        </ul>
        </div>
        <div class="advertising">
        <a href="#"><img src="../assets/Products/S-AD-X-1.jpg"  width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/S-AD-X-2.jpg" width="219" height="150"/></a>
        <a href="#" class="da_AD"><img src="../assets/Products/AD-14.jpg" width="318" height="150"/></a>
        <a href="#"><img src="../assets/Products/S-AD-X-3.jpg" width="219" height="150"/></a>
        <a href="#"><img src="../assets/Products/X-AD-1.jpg" width="219" height="150"/></a>
        </div>
        <!--品牌-->
        <div class="Brand_Gallery">
        <a href="#"><img src="../assets/Brand/p-1.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-4.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-6.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-11.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-14.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-17.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-19.jpg"  width="120" height="32"/></a>
        <a href="#"><img src="../assets/Brand/p-13.jpg"  width="120" height="32"/></a>
        </div>
      </div>
      </div>
      <!--热销-->
    <div id="showcase" class="advanced">
      <div id="guessyou" class="m"><div class="mt"><h2>猜你喜欢</h2><a href="javascript:;" class="extra">更多</a></div>
        <div class="mc"><div class="spacer"><i></i></div>
        <ul id="lists">        
        <li class="fore1">           
        <div class="p-img">
        <a data-clk="" href="" target="_blank"><img data-lazy-img="done" width="130" height="130" title="夏普（SHARP）LCD-50V3A 50英寸安卓智能液晶电视（黑色）" src="Products/product_img.jpg" class=""></a>
        </div>                
        <div class="p-info">               
          <div class="p-name">
          <a data-clk="" href="" target="_blank" title="夏普（SHARP）LCD-50V3A 50英寸安卓智能液晶电视（黑色）">夏普（SHARP）LCD-50V3A 50英寸安卓智能液晶电视（黑色）</a></div>
          <div class="p-price" data-lazyload-fn="done"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>            
          </div> 
          <div class="Detailed" style="display: none;">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>       
          </li>        
          <li class="fore2">           
          <div class="p-img"><a data-clk="" href="h" target="_blank">
          <img data-lazy-img="done" width="130" height="130" title="海信（Hisense）LED55EC520UA 55英寸 VIDAA3 14核 炫彩4K智能电视(黑色)" src="Products/product_img1.jpg" class=""></a></div>              
            <div class="p-info">              
              <div class="p-name">
              <a data-clk="" href="" target="_blank" title="海信（Hisense）LED55EC520UA 55英寸 VIDAA3 14核 炫彩4K智能电视(黑色)">海信（Hisense）LED55EC520UA 55英寸 VIDAA3 14核 炫彩4K智能电视(黑色)</a></div>
              <div class="p-price"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>            
          </div> 
            <div class="Detailed" style="display: none;">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>       
            </li>        
            <li class="fore3">            
            <div class="p-img">
            <a data-clk="" href="" target="_blank">
            <img data-lazy-img="done" width="130" height="130" title="联想 扬天W4090V 台式税控专用电脑（G3260双核 4G1T DVD WIN7) 标配主机(无显示器)" src="Products/product_img2.jpg" class=""></a></div>             
            <div class="p-info">               
            <div class="p-name">
            <a href="" target="_blank" title="联想 扬天W4090V 台式税控专用电脑（G3260双核 4G1T DVD WIN7) 标配主机(无显示器)">联想 扬天W4090V 台式税控专用电脑（G3260双核 4G1T DVD WIN7) 标配主机(无显示器)</a></div>
              <div class="p-price"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>       
                </div> 
                  <div class="Detailed">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>     
              </li>        
              <li class="fore4">         
                <div class="p-img">
                <a href="" target="_blank">
                <img data-lazy-img="done" width="130" height="130" title="联想（Lenovo） 扬天R4905d 台式电脑 （G1820 4G 500G） 商用电脑 20英寸普通LED屏" src="Products/product_img3.jpg" class=""></a></div>
                <div class="p-info">             
                  <div class="p-name">
                  <a href="" target="_blank" title="联想（Lenovo） 扬天R4905d 台式电脑 （G1820 4G 500G） 商用电脑 20英寸普通LED屏">联想（Lenovo） 扬天R4905d 台式电脑 （G1820 4G 500G） 商用电脑 20英寸普通LED屏</a></div>
                    <div class="p-price"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>          
              </div>  
              <div class="Detailed">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>    
              </li>       
                <li class="fore5">       
                <div class="p-img">
                <a data-clk="" href="" target="_blank"><img data-lazy-img="done" width="130" height="130" title="金正（NINTAUS）韩式 电火锅 多用锅 家用 5L" src="Products/product_img4.jpg" class=""></a></div>
                    <div class="p-info">                
                      <div class="p-name">
                      <a href="" target="_blank" title="金正（NINTAUS）韩式 电火锅 多用锅 家用 5L">金正（NINTAUS）韩式 电火锅 多用锅 家用 5L</a>
                      </div>
                      <div class="p-price"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>          
              </div>   
              <div class="Detailed">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>  
              </li>       
            <li class="fore6">           
              <div class="p-img">
              <a data-clk="" href="" target="_blank">
              <img data-lazy-img="done" width="130" height="130" title="洗颜专科 柔澈泡沫 洁面乳 120g（资生堂授权）" src="Products/product_img5.jpg" class=""></a>  
              </div>          
            <div class="p-info">                
            <div class="p-name">
            <a data-clk="" href="#" target="_blank" title="洗颜专科 柔澈泡沫 洁面乳 120g（资生堂授权）">洗颜专科 柔澈泡沫 洁面乳 120g（资生堂授权）</a></div>
            <div class="p-price"><span class="left"><i>¥</i>48.00</span><span class="Original_Price">45.9</span></div>     
            </div>
              <div class="Detailed">
        <div class="content">
          <p class="center"><a href="#" class="Buy_btn">立即购买</a></p>
          </div>
        </div>        
            </li>
          </ul>
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

      <!--认证-->
    <!--认证展示样式-->
    <div class="Authenticate left clearfix" id="Authenticate_show">
      <div class="Authenticate_show">
      <div class="picMarquee-left">
          <div class="hd">
            <a class="next">&lt;</a>
            <a class="prev">&gt;</a>
          </div>
          <div class="bd">
            <ul class="picList">
              <li>
                <div class="pic"><a href="" target="_blank"><img src="../assets/images/pic1.jpg" /></a></div>
                              <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图1</a></div>-->					
                        </li>
              <li>
                <div class="pic"><a href="" target="_blank"><img src="../assets/images/pic2.jpg" /></a></div>
                <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图2</a></div>-->
              </li>
              <li>
                <div class="pic"><a href="" target="_blank"><img src="../assets/images/pic3.jpg" /></a></div>
                
              </li>
              <li>
                <div class="pic"><a href="" target="_blank"><img src="../assets/images/pic4.jpg" /></a></div>
                
              </li>
              <li>
                <div class="pic"><a href="" target="_blank"><img src="../assets/images/pic5.jpg" /></a></div>
                
              </li>
              
            </ul>
          </div>
        </div>

        
      </div>
    </div>
      </div>
    <div class="text_link">
      <p>
      <a href="#">关于我们</a>｜ <a href="#">公开信息披露</a>｜ <a href="#">加入我们</a>｜ <a href="#">联系我们</a>｜ <a href="#">版权声明</a>｜ <a href="#">隐私声明</a>｜ <a href="#">网站地图</a></p>
      <p>蜀ICP备11017033号 Copyright ©2011 成都福际生物技术有限公司 All Rights Reserved. Technical support:CDDGG Group</p>
      </div>
      </div>
    </div>
    <!--右侧菜单栏购物车样式-->
    <div class="fixedBox">
      <ul class="fixedBoxList">
          <li class="fixeBoxLi user"><a href="#"> <span class="fixeBoxSpan iconfont icon-my"></span> <strong>用户</strong></a> </li>
        <li class="fixeBoxLi cart_bd" style="display:block;" id="cartboxs">
        <p class="good_cart">0</p>
          <span class="fixeBoxSpan iconfont icon-cart"></span> <strong>购物车</strong>
          <div class="cartBox">
              <div class="bjfff"></div><div class="message">购物车内暂无商品，赶紧选购吧</div>    </div></li>
        <li class="fixeBoxLi Service "> <span class="fixeBoxSpan iconfont icon-qq1"></span> <strong>客服</strong>
          <div class="ServiceBox">
            <div class="bjfffs"></div>
            <dl onclick="javascript:;">
            <dt><img src=""></dt>
              <dd><strong>QQ客服1</strong>
                  <p class="p1">9:00-22:00</p>
                  <p class="p2"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=123456&amp;site=DGG三端同步&amp;menu=yes">点击交谈</a></p>
                  </dd>
                </dl>
            <dl onclick="javascript:;">
                  <dt><img src=""></dt>
                  <dd> <strong>QQ客服1</strong>
                    <p class="p1">9:00-22:00</p>
                    <p class="p2"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=123456&amp;site=DGG三端同步&amp;menu=yes">点击交谈</a></p>
                  </dd>
                </dl>
                </div>
        </li>
      <li class="fixeBoxLi code cart_bd " style="display:block;" id="cartboxs">
          <span class="fixeBoxSpan iconfont icon-weixin"></span> <strong>微信</strong>
          <div class="cartBox">
              <div class="bjfff"></div>
          <div class="QR_code">
          <p><img src="" width="150px" height="150px" style=" margin-top:10px;" /></p>
          <p>微信扫一扫，关注我们</p>
          </div>		
          </div>
          </li>

        <li class="fixeBoxLi Home"> <a href="./"> <span class="fixeBoxSpan iconfont  icon-collect"></span> <strong>收藏</strong> </a> </li>
        <li class="fixeBoxLi BackToTop"> <span class="fixeBoxSpan iconfont icon-top"></span> <strong>返回顶部</strong> </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/css/style.css'
import '@/assets/css/common.css'
import '@/assets/js/common_js.js'
import '@/assets/js/footer.js'
import '@/assets/font/iconfont.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      welcome: '',
      mydata:'',
      msg:'',
      code:'',
      token:''
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
      if(show==true)
        $(".CategoryBox").css("display","block");
      else
        $(".CategoryBox").css("display","none");
    },
    initData:function(){
      this.requestPost('/user/home/Category');
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


</style>
