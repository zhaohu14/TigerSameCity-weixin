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
      defineComponent
  } from "vue"
  import { api } from '../../api/api'
  export default defineComponent({
    setup() {
      return {
        title: "hello",
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        imageList: ['https://img0.baidu.com/it/u=2521455223,3953349035&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', 'https://img0.baidu.com/it/u=1824155774,2992749210&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500', 'https://img2.baidu.com/it/u=2747068135,2426538140&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'],
        articleArr: [
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
      }
    },
    onLoad () {
      console.log('11111')
      // api.adminLogin({
      //   uid: 'admin',
      //   password: '111111'
      // }).then((ret: any) => {
      //   console.log(ret)
      // })
      // @ts-ignore
      uni.showLoading()
      // @ts-ignore
      uni.login({
        provider: 'weixin',
        success: res => {
          console.log(res, '---')
          if (res.code) {
            api.wxLogin({
              code: res.code
            }).then((ret: any) => {
              // @ts-ignore
              uni.hideLoading()
              console.log(ret)
            })
          }
        }
      })
      
    }
  })
</script>

<style>
@import url('./style/index.css');
  
</style>
