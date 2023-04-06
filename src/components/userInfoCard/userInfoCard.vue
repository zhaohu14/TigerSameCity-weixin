<template>
  <view class="userInfoCard">
    <view v-if="isLogin" class="trueLogin">
      <!-- {{ userInfo.userName }} -->
      <view class="image">
        <image src="../../static/icon/user.png"></image>
      </view>
      <view class="userInfoContent">
        <view>{{ userInfo.userName }}</view>
        <view>{{ userInfo.grade === 'admin' ? '管理员' : '普通用户' }}</view>
      </view>
    </view>
    <view v-else class="falseLogin">
      未登录/未注册
    </view>
  </view>
</template>
<script lang="ts">
// import { ref } from 'vue'
// export default {
//   // props: {},
//   setup() {
//     // let a = ref('111')
//     return {
//       // a
//     }  
//   }
// }
import { defineComponent, PropType } from 'vue'

interface Props {
  userInfo: {
    userName: String,
    grade: String,
    mobile: String,
    patId: Number
  }
  isLogin: boolean
}

export default defineComponent({
  props: {
    userInfo: {
      type: Object as PropType<Props['userInfo']>,
      required: true,
      default: {}
    },
    isLogin: {
      type: Boolean as PropType<Props['isLogin']>,
      required: true,
      default: false
    }
  },
  setup(props: Props) {
    // 在这里使用props
    console.log(props.userInfo)
    console.log(props.isLogin)
    // ...
  }
})
</script>
<style scoped>
.userInfoCard {
  width: 95%;
  height: 250rpx;
  border: 1rpx solid #dbdbdb;
  border-radius: 25rpx;
  margin: 0 auto;
}

.userInfoCard {
  /* width: 190px;
  height: 254px; */
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  padding: 15rpx;
}


.userInfoCard::before {
  content: '';
  position: absolute;
  width: 350rpx;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 300%;
  animation: rotBGimg 3s linear infinite;
  transition: all 1s linear;
  border-radius: 20px;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.userInfoCard::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5rpx;
  border-radius: 30rpx;
}  
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
.trueLogin {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  z-index: 2;
  /* border: 1rpx solid #dbdbdb; */
  display: flex;
}
.trueLogin .image {
  width: 150rpx;
  height: 150rpx;
  margin-top: 50rpx;
  margin-left: 25rpx;
}
.trueLogin .image image {
  width: 100%;
  height: 100%;
  border-radius: 75rpx;
  /* border-radius: 50%; */
}
.trueLogin .userInfoContent {
  width: calc(100% - 230rpx);
  height: 200rpx;
  text-align: left;
  line-height: 100rpx;
  margin-left: 30rpx;
  margin-top: 25rpx;
}
.trueLogin .userInfoContent view:nth-child(2) {
  line-height: 80rpx;
}
</style>