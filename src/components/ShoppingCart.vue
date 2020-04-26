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
        <li class="hd_menu_tit zhuce" data-addclass="hd_menu_hover">欢迎光临本店！<span class="red" v-if="user!=''">{{loginName}}</span><span class="red hand" v-if="user!=''" @click="loginOut()" style="cursor:pointer">注销</span>
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
       </div> 
     <div class="hd_Shopping_list" id="Shopping_list"> 
     </div> 
    </div> 
   </div> 


    <div class="middle">
        <div class="Inside_pages"> 
            <div class="shop_carts"> 
                <div class="Process"></div> 
                <div class="Shopping_list"> 
                
                <div class="shopping"> 
                    <el-table
                      ref="multipleTable"
                      :data="tableData"
                      tooltip-effect="dark"
                      style="width: 100%"
                      @selection-change="handleSelectionChange">
                      <el-table-column
                        type="selection"
                        width="55">
                      </el-table-column>
                      <el-table-column
                        label="商品名称"
                        width="120">
                        <template slot-scope="scope">{{ scope.row.name }}</template>
                      </el-table-column>
                      <el-table-column
                        prop="goodsDesc"
                        label="商品描述"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="price"
                        label="价格"
                        width="100">
                      </el-table-column>
                      <el-table-column
                        prop="spec"
                        label="规格"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="num"
                        label="购买数量"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="goodsStock"
                        label="库存"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="图片"
                        width="200">
                        <template slot-scope="scope">
                          <el-image
                            style="width: 150px; height: 150px"
                            :src="'http://127.0.0.1:8083/file'+scope.row.list[0].imageUrl" 
                            >
                          </el-image>
                        </template>
                      </el-table-column>
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            type="danger"
                            slot="reference"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div style="margin-top: 20px">
                      <el-button @click="toggleSelection(true)">全选</el-button>
                      <el-button @click="toggleSelection()">取消选择</el-button>
                      <el-button @click="handleDeleteSelect()">删除已选择的</el-button>
                      <el-button type="danger" @click="goPay()">去结算</el-button>
                    </div>
                    <el-dialog
                        title="请先登录"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                        <el-form ref="form"  label-width="80px">
                        <el-form-item label="用户名" >
                          <el-input v-model="loginName"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                          <el-input type="password" v-model="password" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="loginFun()">确 定</el-button>
                        </span>
                      </el-dialog>
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
      password:'',
      id:this.$route.params.id,
      loginName:'',
      goodsNum:1,
      goods:'',
      goodsSortAll:'',
      tableData: [],
      multipleSelection: [],
      dialogVisible: false,
      pass:true
    }
  },
  methods: {
    requestPost:function (str,obj,successfun,failfun){
      this.$axios({
              url:str,
              method:'post',
              data:obj,
              async:false,
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
      var Ids=new Array();
      var shoppingCart=JSON.parse(localStorage.getItem("shoppingCart"));

      
       

       // 检验登录
      if(localStorage.getItem('token')!=null){
        this.requestPost('/user/getLoginUser',null,function(){
          if(This.code== 0){
            This.user = This.mydata;
            This.loginName = This.mydata.loginName;

            //检查是否存在未付款的订单
            This.requestPost("/order/selectOrderNotPay",null,function(){
                if(This.mydata=="true"){
                  This.$notify.info({
                    title: '提示',
                    dangerouslyUseHTMLString: true,
                    message: '您还有未结算的订单，记得去结算哦！<a href="http://localhost:8082/pay" style="color:#008cd6" >点击这里去结算</a>',
                    duration: 0
                  });
                }
            },null);


            /**
             * 购物车存入数据库，以及数据读入购物车，实现数据交换
             */
            This.requestPost('/getshopCartByUid',{userId:This.user.userId},function(){
              if(This.code==0){
                var obj=This.mydata;
                
                //过滤掉已保存的购物车
                for(var i=0;i<obj.length;i++){
                  This.pass=true;
                  for(var j=0;j<shoppingCart.length;j++){
                    if((shoppingCart[j].goodsId==obj[i].goodsId)&&(shoppingCart[j].goodsNum==obj[i].num)){
                      This.pass=false;
                    }
                  }
                  if(This.pass){
                    var goods={goodsId:obj[i].goodsId,goodsNum:obj[i].num}
                    shoppingCart.push(goods);
                  }
                }


                for(var i=0;i<shoppingCart.length;i++){
                  var id=shoppingCart[i].goodsId;
                  if(id!=null&&id!=''&&id!=undefined){
                    Ids.push(id);
                  }
                }

//根据goodsId获取完整数据
                This.requestPost("/goods/getGoodsByIds",Ids,function(){
                  This.tableData=This.mydata;
                  for(var i=0;i<This.tableData.length;i++){
                    for(var j=0;j<shoppingCart.length;j++){
                      if(This.tableData[i].goodsId==shoppingCart[j].goodsId){
                        This.tableData[i].num=shoppingCart[j].goodsNum;
                      }
                    }
                  }

                   //把数据存入本地内容
                  localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
                  if(shoppingCart.length>0){
                    //把数据存入数据库
                    This.requestPost("/saveShopCart",shoppingCart,null,null);
                  }
                  
                },null);

               


              }
            },null);
          }

        },null)
      }else{
        // 未登录
        for(var i=0;i<shoppingCart.length;i++){
          var id=shoppingCart[i].goodsId;
          if(id!=null&&id!=''&&id!=undefined){
            Ids.push(id);
          }
        }

//根据goodsId获取完整数据
        This.requestPost("/goods/getGoodsByIds",Ids,function(){
          This.tableData=This.mydata;
          for(var i=0;i<This.tableData.length;i++){
            for(var j=0;j<shoppingCart.length;j++){
              if(This.tableData[i].goodsId==shoppingCart[j].goodsId){
                This.tableData[i].num=shoppingCart[j].goodsNum;
              }
            }
          }
        },null);

        


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

    },
    toggleSelection(rows) {
      var This=this;
        if (rows) {
          This.tableData.forEach(row => {this.$refs.multipleTable.toggleRowSelection(row)});
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleDelete(index, row) {
        var obj=row;
        var This = this;
        var cart=new Array();
        if(confirm('确定要删除吗')==true){
          /**区分登录和未登录 */
          This.requestPost('/user/getLoginUser',null,function(){
            if(This.code==0){
              This.requestPost('/deleteShopCartByGoodsId',{goodsId:obj.goodsId},null,null);
            }
            This.tableData.splice(index,1);
            for(var i=0;i<This.tableData.length;i++){
              var goods={goodsId:This.tableData[i].goodsId,goodsNum:This.tableData[i].num}
              cart.push(goods);
            }
            localStorage.setItem("shoppingCart",JSON.stringify(cart));

          },null);
          
        }

        

      },
      handleDeleteSelect(){
        var This=this;
        
        if(confirm('确定要删除吗')==true){
          var deleteId=new Array();
          for(var j=0;j<This.multipleSelection.length;j++){
            for(var i=0;i<This.tableData.length;i++){
              if(This.multipleSelection[j].goodsId==This.tableData[i].goodsId){
                This.tableData.splice(i,1);
                deleteId.push(This.multipleSelection[j].goodsId);
              }
            }
          }

          var car=new Array();
          for(var i=0;i<This.tableData.length;i++){
            var goods={goodsId:This.tableData[i].goodsId,goodsNum:This.tableData[i].num}
            car.push(goods);
          }
          localStorage.setItem("shoppingCart",JSON.stringify(car));
          This.requestPost('/user/getLoginUser',null,function(){
            if(This.code==0){
              This.requestPost('/deleteShopCartByGoodsIds',deleteId,null,null);
            }
          },null);
          
        }
        

    },
    goPay(){
      var This=this;
      This.requestPost('/user/getLoginUser',null,function(){
          if(This.code==0){
            // This.$router.push('/pay');
            if(This.multipleSelection.length>0){
            //把数据存入本地内容
              var orderLocal=This.multipleSelection;
              localStorage.setItem("newOrders",JSON.stringify(orderLocal));

              //删除购物车数据
              for(var i=0;i<orderLocal.length;i++){
                This.requestPost('/deleteShopCartByGoodsId',{goodsId:orderLocal[i].goodsId},null,null);
              }

              var shoppingCart=JSON.parse(localStorage.getItem("shoppingCart"));
              for(var j=0;j<orderLocal.length;j++){
                for(var i=0;i<shoppingCart.length;i++){
                  if(shoppingCart[i].goodsId==orderLocal[j].goodsId){
                    shoppingCart.splice(i,1);
                  }
                }
              }
              
              console.log(shoppingCart);
              localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));


              This.$router.push({path: '/pay', query: {ids: This.multipleSelection}});

            }
            else
              This.alertMessage(This,1,"请选择结算的商品");
          }else{
            This.dialogVisible = true;
          }
      },null)
      
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    loginFun(){
      var This = this;
      var jsons={loginName:this.loginName,password:this.password}
      this.requestPost('/user/login',jsons,function(){
        if(This.code == 0){
          This.dialogVisible=false;
          localStorage.setItem("token",This.mydata)
          This.alertMessage(This,0,"登录成功");
          location.reload()
        };
      });

    }
    
},
    created:function(){
      this.initData();
    }
}

</script>

<style scoped>
.GoodsDetail .middle{
    width: 1200px;
    min-height: 100px;
    margin: 0 auto;;
}


.el-table--border, .el-table--group{
  border: none;
}
</style>