<template>
<!--  style="background: linear-gradient(rgba(40,140,234,0.4), rgba(40,140,234, 0.4));background-image: url('../../static/background.jpg');background-size: 100%100%;-->
    <view class="content">
      <view class="headerSeach">
        <image src="../../static/icon/search.png"></image>
        <view class="pleaceoder">点击搜索</view>
      </view>
      <view class="uni-margin-wrap">
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
          :duration="duration">
          <swiper-item v-for="(item, index) in imageList" :key="index">
            <view class="swiper-item">
              <image :src="item"></image>
            </view>
          </swiper-item>
        </swiper>
      </view>
      <view class="recommendList">
        <view class="recommend" v-for="(item, index) in articleArr" :key="index">
          <view v-if="item.imageUrl || item.imageUrl !== ''" class="articleImage">
            <image :src="item.imageUrl"></image>
            <view class="articleTitle">{{ item.title }}</view>
          </view>
          <view class="content">
            <view class="contentTitle">{{ item.title }}</view>
            <view class="contentData">
              <view>文章来源：{{ item.source }}</view>
              <view>浏览次数: {{ item.browse }}</view>
            </view>
          </view>
          <view class="positionTitle">{{ item.tag }}</view>
        </view>
      </view>
    </view>
</template>

<script lang="ts">
  import {
      defineComponent,
      ref,
      reactive
  } from "vue"
  import { useStore } from 'vuex';
  import { api } from '../../api/api'
  export default defineComponent({
    setup() {
      const store = useStore();
      let isLogin = ref(store.state.isLogin)
      let userInfo = ref(store.state.userInfo)
      let title = "hello"
      let indicatorDots = true
      let autoplay = true
      let interval = 3000
      let duration = 500
      let imageList = ['http://127.0.0.1:3001/static/media/bj.1eed8397.png', 'http://127.0.0.1:3001/static/media/carousel01.a07414fb.png', 'http://127.0.0.1:3001/static/media/carousel02.b19cf631.png']
      let articleArr = [
        {
          id: 1,
          title: '代码太多if else？教你优化代码，老大对你刮目相看！',
          imageUrl: 'https://img0.baidu.com/it/u=2346750071,2418836909&fm=253&fmt=auto&app=138&f=JPEG?w=1015&h=500',
          source: '站长',
          browse: '146',
          tag: 'JavaScript'
        },
        {
          id: 2,
          title: '代码太多if else？教你优化代码，老大对你刮目相看！',
          imageUrl: 'https://img1.baidu.com/it/u=317791204,3405437293&fm=253&fmt=auto&app=138&f=JPEG?w=1254&h=500',
          source: '站长',
          browse: '146',
          tag: 'JavaScript'
        }
      ]
      const wxgetUserInfo = ()=> {
        api.getUserInfo({}).then((ret: any) => {
          console.log(ret, '*----')
          if (ret.state !== 'ok') {
            return uni.showModal({
              title: '错误提示',
              content: ret.msg
            })
          }
          store.commit('updataIsLogin', true);
          console.log(store.state.isLogin, '----')
          isLogin.value = store.state.isLogin
          store.commit('updataUserInfo', ret.obj);
          userInfo.value = store.state.userInfo
        })
      }
      const login = ()=> {
        uni.showLoading()
        uni.login({
          provider: 'weixin',
          success: res => {
            console.log(res, '---')
            if (res.code) {
              api.wxLogin({
                code: res.code
                // code: '111111'
              }).then((ret: any) => {
                // @ts-ignore
                uni.hideLoading()
                console.log(ret)
                if (ret.state !== 'ok') {
                  uni.showModal({
                    title: '错误提示',
                    content: ret.msg
                  })
                  return
                }
                uni.setStorageSync('authorization', ret.token)
                wxgetUserInfo()
              })
            }
          }
        })
      }
      return {
        title,
        indicatorDots,
        autoplay,
        interval,
        duration,
        imageList,
        articleArr,
        isLogin,
        userInfo,
        wxgetUserInfo,
        login
      }
    },
    onLoad () {
      console.log('11111')
      this.login()
      api.chatGptApi({}).then(ret => {
        console.log(ret)
      })
    }
  })
</script>

<style>
@import url('./style/index.css');

</style>
