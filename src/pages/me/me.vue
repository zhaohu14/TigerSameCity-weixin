<template>
  <view class="content">
      <view>
          <!-- <text class="title">{{ title }}</text> -->
          <userInfoCard :msg="'111111'" :count="0" :userInfo="userInfo" :isLogin="isLogin"></userInfoCard>
        </view>
  </view>
</template>

<script lang="ts">
  import {
      defineComponent,
      ref
  } from "vue";
  import userInfoCard from "@/components/userInfoCard/userInfoCard.vue";
  import { useStore } from 'vuex';
  export default defineComponent({
    components: {
      userInfoCard
    },
    setup() {
      const store = useStore()
      let userInfo = ref(store.state.userInfo)
      let isLogin = ref(store.state.isLogin)
      return {
        userInfo,
        isLogin
      }
    }
  })
</script>

<style>
  .content {
      text-align: center;
      height: 400upx;
  }

  .logo {
      height: 200upx;
      width: 200upx;
      margin-top: 200upx;
  }

  .title {
      font-size: 36upx;
      color: #8f8f94;
  }
</style>
