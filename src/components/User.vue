<template>
  <div class="big">
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

    <div class="section">
        <h3 class="title">个人信息</h3>
        <el-table
        :data="userTable"
        style="width: 100%">
        <el-table-column
            prop="loginName"
            label="登录id"
            width="80">
            <template slot-scope="{row}">
                {{ row.loginName || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="trueName"
            label="真实姓名">
            <template slot-scope="{row}">
                {{ row.trueName || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="phone"
            label="手机号码"
            width="180">
            <template slot-scope="{row}">
                {{ row.phone || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别">
            <template slot-scope="{row}">
                {{ row.sex || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="birthday"
            label="出生日期">
            <template slot-scope="{row}">
                {{ row.birthday || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="userPhoto"
            label="用户头像">
            <template slot-scope="{row}">
                {{ row.userPhoto || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="userQq"
            label="用户QQ">
            <template slot-scope="{row}">
                {{ row.userQq || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱">
            <template slot-scope="{row}">
                {{ row.email || '未填写' }}
            </template>
        </el-table-column>
        <el-table-column
            prop="userScore"
            label="积分">
            <template slot-scope="{row}">
                {{ row.userScore || '0' }}
            </template>
        </el-table-column>
    <el-table-column label="操作" width="180px">
      <template slot-scope="scope">
        <el-button
          size="mini"
           @click="userDialogVisible = true">编辑</el-button>
           
        <el-button
          size="mini"
           @click="resetPassword=true">修改密码</el-button>
      </template>
    </el-table-column>
        </el-table>
   </div>

    <div class="section">
        <h3 class="title">我的订单</h3>
        <el-table
      :data="NoFailureOrders"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsDesc"
        label="商品描述">
      </el-table-column>
      <el-table-column
        prop="num"
        label="商品数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderId"
        label="订单id">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="totalPrice"
        label="总价">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        :formatter="onLineStatus"
        >
      </el-table-column>
    </el-table>
   </div>

   <div class="section">
        <h3 class="title">位置管理</h3>
        <div>
            <h4 class="padd">我的位置</h4>
            <div>
                <ul>
                    <li  v-for="(item, i) in myPosition"  style="margin-bottom:20px;">
                        <el-tag type="success">{{item.position}}</el-tag> 
                        <el-button style="margin-left:50px;"
                            size="mini"
                            type="danger"
                            @click="deletePosition(item.id)">删除</el-button>
                    </li>
                </ul>
            </div>
        <el-divider></el-divider>
            <div>
                <el-select value-key="id" v-model="regionOne" placeholder="请选择">
                    <el-option
                    v-for="item in province"
                    :key="item.id"
                    :label="item.name"
                    :value="{id:item.id,str:item.name}">
                    </el-option>
                </el-select>
                <el-select  value-key="id" v-model="regionTwo" placeholder="请选择">
                    <el-option
                    v-for="item in regionTwos"
                    :key="item.id"
                    :label="item.name"
                    :value="{id:item.id,str:item.name}">
                    </el-option>
                </el-select>
                <el-select  value-key="id" v-model="regionThree" placeholder="请选择">
                    <el-option
                    v-for="item in regionThrees"
                    :key="item.id"
                    :label="item.name"
                    :value="{id:item.id,str:item.name}">
                    </el-option>
                </el-select>
                <el-select  value-key="id" v-model="regionFour" placeholder="请选择">
                    <el-option
                    v-for="item in regionFours"
                    :key="item.id"
                    :label="item.name"
                    :value="{id:item.id,str:item.name}">
                    </el-option>
                </el-select>
                <el-select  value-key="id" v-model="regionFive" placeholder="请选择">
                    <el-option
                    v-for="item in regionFives"
                    :key="item.id"
                    :label="item.name"
                    :value="{id:item.id,str:item.name}">
                    </el-option>
                </el-select>
                <div style="width:94%;">
                    <el-form ref="form" label-width="80px" style="margin-top:20px;">
                        <el-form-item label="补充地址">
                            <el-input v-model="positionDetail"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div style="margin-top: 20px">
                <el-button @click="addPosition()">添加位置</el-button>
            </div>
        </div>
   </div>


   </div> 
   
    

    <el-dialog
        title="提示"
        :visible.sync="userDialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
         <el-form-item label="真实姓名">
            <el-input v-model="form.trueName"></el-input>
        </el-form-item>
         <el-form-item label="手机号码" prop='phone'>
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-date-picker type="date" placeholder="出生日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
         <!-- <el-form-item label="用户头像">
            <el-input v-model="form.userPhoto"></el-input>
        </el-form-item> -->
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
                <el-radio label="0" name="sex" >女</el-radio>
                <el-radio label="1" name="sex" >男</el-radio>
            </el-radio-group>
        </el-form-item>
         <el-form-item label="QQ" prop="userQq">
            <el-input v-model="form.userQq"></el-input>
        </el-form-item>
         <el-form-item label="email" prop="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="userDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="userFormSubmit('form')">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog
        title="修改密码"
        :visible.sync="resetPassword"
        width="30%"
        :before-close="handleCloseResetPass">
        <el-form label-width="90px">
         <el-form-item label="密码">
            <el-input type="password" v-model="oldPass"></el-input>
        </el-form-item>
         <el-form-item label="新密码" >
            <el-input type="password" v-model="newPass"></el-input>
        </el-form-item>
         <el-form-item  label="确认新密码" >
            <el-input type="password" v-model="newPassAgain"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="resetPassword = false">取 消</el-button>
            <el-button type="primary" @click="resetPassSubmit()">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'user',
    data () {
            var checkPhone = (rule, value, callback) => {
            const phoneReg = /^1[34578]\d{9}$$/
            if (!value) {
            return callback(new Error('电话号码不能为空'))
            }
            setTimeout(() => {
            // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
            // 所以在前面加了一个+实现隐式转换
        
            if (!Number.isInteger(+value)) {
                callback(new Error('请输入数字值'))
            } else {
                if (phoneReg.test(value)) {
                callback()
                } else {
                callback(new Error('电话号码格式不正确'))
                }
            }
            }, 100)
        }
        var checkEmail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
            return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
            if (mailReg.test(value)) {
                callback()
            } else {
                callback(new Error('请输入正确的邮箱格式'))
            }
            }, 100)
        }
        return {
            province:[],
            regionOne: '',
            regionTwos: '',
            regionTwo: '',
            regionThrees: '',
            regionThree: '',
            regionFours: '',
            regionFour: '',
            regionFives: '',
            regionFive: '',
            positionDetail:'',
            myPosition:'',
            user:'',
            userTable:[],
            tableData:'',
            code:'',
            loginName:'',
            NoFailureOrders:[],
            form: {
                trueName: '',
                birthday: '',
                userPhoto: '',
                userQq: '',
                email: '',
                sex:''
            },
            newPass:'',
            newPassAgain:'',
            oldPass:'',
            rules: {
                phone: { validator: checkPhone, trigger: 'blur' },
                email: { validator: checkEmail, trigger: 'blur' },
                userQq: { min: 5, message: '请正确填写qq'}
            },
            userDialogVisible: false,
            resetPassword:false
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
        initData(){
            var This = this;
             // 检验登录
            if(localStorage.getItem('token')!=null){
                this.requestPost('/user/getLoginUser',null,function(){
                    if(This.code== 0){
                        This.user = This.mydata;
                        This.loginName = This.mydata.loginName;
                        This.user.birthday = This.FormatTime(This.user.birthday,"Y");
                        This.getUserInfo();
                        
                    }
                },null);
            }else{
                This.alertMessage(This,1,"请先登录")
                this.$router.push('/Login');
                return;
            }
            this.requestPost("/user/getProvince",{},function(){
                This.province=This.mydata;
            },null);
            
            this.requestPost("/user/selectUserPosition",{},function(){
                This.myPosition = This.mydata;
            },null);
            //获取个人信息

            this.requestPost("/order/getAllNoFailureOrders",{},function(){
                This.NoFailureOrders = This.mydata;
                console.log(This.NoFailureOrders)
            },null);
        },
        //上线状态
        onLineStatus: function(row, column) {
            if(row.status==0){
                return '已付款';
            }else if(row.status==1){
                return '未付款';
            }else if(row.status==3){
                return '派送中';
            }
        },
        getUserInfo:function(){
            var This=this;
            This.userTable.push(This.user);
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
            var This = this;
            this.requestPost('/user/loginOut');
            localStorage.removeItem("token");
            this.loginName = '';
            this.user = '';
            This.alertMessage(This,1,"已注销")
        },
        handleClick(row) {
            console.log(row);
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleCloseResetPass(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      userFormSubmit:function (formName) {
          var This = this;
          this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            This.userDialogVisible = false;

            var json={trueName:This.form.trueName,birthday:This.form.birthday,userPhoto:This.form.userPhoto,email:This.form.email,userQq:This.form.userQq}
            This.requestPost("/user/updateUserInfo",json,function() {
                // alert(This.code);
            },null)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        
      },
      resetPassSubmit:function(){
          var This = this;
        if(This.newPass ==''||This.oldPass == '' || This.newPassAgain == ''){
            This.alertMessage(This,1,"密码不能为空")
        }
        else if(This.newPass == This.oldPass){
            This.alertMessage(This,1,"新密码不能和旧密码一样")
        }else if(This.newPass != This.newPassAgain){
            This.alertMessage(This,1,"两次输入的新密码不一致")
        }else{
            var json = {newPass:This.newPass,oldPass:This.oldPass,newPassAgain:This.newPassAgain}
             This.requestPost("/user/updateUserPass",json,function() {
                This.alertMessage(This,1,This.mydata);
                if(This.code == 0){
                    This.resetPassword = false;
                    This.loginOut();
                
                }
            },null)
        }
      },
    FormatTime:function (data,type){
      var _data = data;
      //如果是13位正常，如果是10位则需要转化为毫秒
      if (String(data).length == 13) {
        _data = data
      } else {
        _data = data*1000
      }
      const time = new Date(_data);    
      const Y = time.getFullYear();
      const Mon = time.getMonth() + 1;
      const Day = time.getDate();
      const H = time.getHours();
      const Min = time.getMinutes();
      const S = time.getSeconds();
      //自定义选择想要返回的类型
      if(type=="Y"){
        return `${Y}-${Mon}-${Day}`
      }else if(type=="H"){
        return `${H}:${Min}:${S}`
      }else{
        return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`
      }
    },
    addPosition(){
        var This = this;
        var position1;
        if(This.regionOne==''||This.regionTwo==''||This.regionThree==''||This.regionFour==''||This.regionFive==''||This.positionDetail==''){
            This.alertMessage(This,1,"请填写完整的地址")
        }else{
            position1 =This.regionOne.str+"，"+This.regionTwo.str+"，"+This.regionThree.str+"，"+This.regionFour.str+"，"+This.regionFive.str+'，'+This.positionDetail;
            var json={position:position1}
            This.requestPost("/user/addUserPosition",json,function(){
                if(This.code == 0){
                    This.alertMessage(This,0,"保存成功");
                    location.reload();
                }else{
                    This.alertMessage(This,1,"保存失败");
                }
            },null);
        }
    },
    deletePosition(id){
        var This = this;
        var json = {id:id};
        This.requestPost("/user/deleteUserPositionById",json,function(){
                if(This.code == 0){
                    This.alertMessage(This,0,"删除成功");
                    location.reload();
                }else{
                    This.alertMessage(This,1,"删除失败");
                }
            },null);
    },
    alertMessage:function(This,type,message){
      if(type == 0){
        type= 'success';
      }else if(type == 1){
        type= 'warning';
      }else{
        type= 'success';
      }
      This.$message({
          message: message,
          type: type
      });

    }
    },
    created:function(){
      this.initData();
    },
    watch: {
        regionOne:function(newVal, oldVal){
            var This = this;
            if(newVal!=''){
                this.requestPost("/user/getCityById",newVal.id,function(){
                    This.regionTwos=This.mydata;
                },null);
            }
        },
        regionTwo:function(newVal, oldVal){
            var This = this;
            if(newVal!=''){
                this.requestPost("/user/getCityById",newVal.id,function(){
                    This.regionThrees=This.mydata;
                },null);
            }
        },
        regionThree:function(newVal, oldVal){
            var This = this;
            if(newVal!=''){
                this.requestPost("/user/getCityById",newVal.id,function(){
                    This.regionFours=This.mydata;
                },null);
            }
        },
        regionFour:function(newVal, oldVal){
            var This = this;
            if(newVal!=''){
                this.requestPost("/user/getCityById",newVal.id,function(){
                    This.regionFives=This.mydata;
                },null);
            }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big{
    background: #e3e4e5;
    min-height: 800px;
}
.section{
    width: 80%;
    margin: 30px auto;
    min-height: 100px;
    background: #fff;
    text-align: left;
    padding: 5px 10px;
}

.section .title{
    text-align: left;
    padding: 5px 0 5px 10px;
    border-bottom: 1px solid #9999;
}

.padd{
    padding: 5px 0 5px 10px;
}
</style>
