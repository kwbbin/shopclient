import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Regist from '@/components/Registered'
import GoodsDetail from '@/components/GoodsDetail'
import ShoppingCart from '@/components/ShoppingCart'
import GoPay from '@/components/GoPay'
import User from '@/components/User'
import CategoryGoods from '@/components/CategoryGoods'
import SearchGoods from '@/components/SearchGoods'

Vue.use(Router)

export default new Router({
  mode:"history",//去除哈希值的#号
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsDetails:id',
      name: 'GoodsDetail',
      component: GoodsDetail
    },{
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },{
      path:'/pay',
      name:'pay',
      component: GoPay
    },{
      path:'/user',
      name:'user',
      component: User
    },{
      path:'/categoryGoods',
      name:'categoryGoods',
      component: CategoryGoods
    },{
      path:'/searchGoods',
      name:'searchGoods',
      component: SearchGoods
    }
  ]
})
