<template>
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
    </view>
</template>

<script lang="ts">
  import {
      defineComponent
  } from "vue";
  export default defineComponent({
      setup() {
          return {
              title: "hello",
              indicatorDots: true,
              autoplay: true,
              interval: 3000,
              duration: 500,
              imageList: ['../../static//headerBanner/1.jpg', '../../static//headerBanner/2.jpg', '../../static//headerBanner/3.jpg']
          }
      },
  })
</script>

<style>
   .uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
  .headerSeach {
    width: 95%;
    height: 60rpx;
    margin-left: 2.5%;
    /* background: #FFFFFF; */
    border: 1rpx solid #dbdbdb;
    margin-bottom: 15rpx;
    border-radius: 45rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eeeeee;
    color: #7e7e7e;
    font-size: 32rpx;
    /* padding-left: 25rpx; */
  }
  .headerSeach image {
    width: 40rpx;
    height: 40rpx;
    margin-left: 25rpx;
  }
  .headerSeach view {
    width: calc(100% - 60rpx);
    margin-left: 20rpx;
  }
	.swiper {
    width: 95%;
    margin-left: 2.5%;
		height: 400rpx;
	}
	.swiper-item {
		display: block;
		height: 400rpx;
		/* line-height: 300rpx; */
		/* text-align: center; */
	}
  .swiper-item image {
    width: 100%;
    height: 100%;
    border-radius: 25rpx;
  }
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
