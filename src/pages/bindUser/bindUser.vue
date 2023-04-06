<template>
  <view class="content">
    <form class="form">
        <div class="header">Sign In</div>
        <div class="inputs">
            <input placeholder="用户名" v-model="userName" class="input" type="text">
            <input placeholder="手机号" v-model="mobile" class="input" type="mobile">
        <button class="sigin-btn" @click="subMitInfo">绑定</button>
        <p class="signup-link">初次使用用户将自动注册！ </p>
        </div>
    </form>
  </view>
</template>

<script lang="ts">
  import {
      defineComponent, ref
  } from "vue"
  import { api } from '../../api/api'
  export default defineComponent({
      setup() {
        let userName = ref('')
        let mobile = ref('')
        const subMitInfo = ()=> {
          api.bindUserInfo({
            userName: userName,
            mobile: mobile
          }).then((ret:any) => {
            if (ret.state !== 'ok') {
              return uni.showModal({
                title: '错误提示',
                content: ret.msg
              })
            }
          })
          
        } 
        return {
          title: "我的",
          userName,
          mobile,
          subMitInfo
        }
      }
  })
</script>

<style>
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: #fff;
  color: rgb(97 97 97);
  box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
  width:90%;
  background-clip: border-box;
  margin-left: 5%;
}

.header {
  position: relative;
  background-clip: border-box;
  background-color: #1e88e5;
  background-image: linear-gradient(to top right,#1e88e5,#42a5f5);
  margin: 10px;
  border-radius: 0.75rem;
  overflow: hidden;
  color: #fff;
  box-shadow: 0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,rgba(33,150,243,.4);
  height: 7rem;
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.9rem;
  font-family: Roboto, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inputs {
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
.inputs input {
  width: 90%;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 200px;
  width: 100%;
  height: 2.75rem;
  position: relative;
}

.input {
  border: 1px solid rgba(128, 128, 128, 0.61);
  outline: 0;
  color: rgb(69 90 100);
  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
  padding: 0.75rem;
  background-color: transparent;
  border-radius: .375rem;
  width: 100%;
  height: 100%;
}

.input:focus {
  border: 1px solid #1e88e5;
}

.checkbox-container {
  margin-left: -0.625rem;
  display: inline-flex;
  align-items: center;
}

.checkbox {
  position: relative;
  overflow: hidden;
  padding: .55rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.027);
  height: 35px;
  width: 35px;
}

.checkbox input {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.checkbox-text {
  cursor: pointer;
}

.sigin-btn {
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  line-height: 1rem;
  text-align: center;
  padding: .75rem 1.5rem;
  background-color: #1e88e5;
  background-image: linear-gradient(to top right,#1e88e5,#42a5f5);
  border-radius: .5rem;
  width: 100%;
  outline: 0;
  border: 0;
  color: #fff;
}

.signup-link {
  line-height: 1.5;
  font-weight: 300;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-link a, .forget {
  line-height: 1.5;
  font-weight: 700;
  font-size: .875rem;
  margin-left: .25rem;
  color: #1e88e5;
}

.forget {
  text-align: right;
  font-weight: 600;
}
</style>
