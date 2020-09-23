<template>
  <div class="enter-box">
    <div class="enter-top">
      <div class="enter-top-left" @click="toNext">
        <img src="../assets/left.png" alt />
      </div>
      <div class="enter-top-mid">京东登录注册</div>
      <div class="enter-top-left"></div>
    </div>
    <div class="enter-username">
      <input type="text" placeholder="用户名/邮箱/手机号" v-model="usernameMsg" @keyup.enter="enter" />
      <i class="enter-username-icon" v-if="isShow" @click="delNum"></i>
    </div>
    <div class="enter-username">
      <input type="password" v-model="msg" placeholder="请输入密码" v-if="eyestate" @keyup.enter="enter" />
      <input type="text" v-model="msg" placeholder="请输入密码" v-else @keyup.enter="enter" />
      <i class="enter-username-icon qwd-icon" v-if="isShow2" @click="delNum2"></i>
      <span class="enter-username-eye" @click="eye">
        <img src="../assets/close.png" alt v-if="eyestate" />
        <img src="../assets/open.png" alt v-else />
      </span>
      <div class="enter-username-forget">忘记密码</div>
    </div>
    <div :class="{'enter-login':isActive,'enter-login-in':isOther}" @click="enter">
      <a>登&nbsp;录</a>
    </div>
    <div class="enter-login-one">
      <a>一键登录</a>
    </div>
    <div class="enter-sign">
      <span>短信验证码登录</span>
      <span>手机快速注册</span>
    </div>
    <div class="enter-orther">
      <div class="enter-line"></div>
      <div>其他登录方式</div>
      <div class="enter-line"></div>
    </div>
    <div class="enter-icon">
      <div class="enter-icon-img">
        <img src="../assets/qq.png" alt />
        <span>QQ</span>
      </div>
      <div class="enter-icon-img">
        <img src="../assets/wechat.png" alt />
        <span>微信</span>
      </div>
    </div>
    <div class="enter-agree">
      登录既代表您已同意
      <a href="https://in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eyestate: true,
      msg: "",
      usernameMsg: "",
      username: 123456,
      password: 654321,
      isActive: true,
      isOther: false,
      valueNum: false,
      valueNumber: false,
      isShow: false,
      isShow2: false,
    };
  },
  methods: {
    eye() {
      this.eyestate = !this.eyestate;
    },
    enter() {
      if (this.usernameMsg == this.username && this.msg == this.password) {
        this.$router.push({
          path: "mine",
        });
      } else {
        alert("用户名或密码有误");
      }
    },
    Show(n) {
      // console.log(n)
      if (n == 1) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    delNum() {
      this.usernameMsg = "";
    },
    delNum2() {
      this.msg = "";
    },
    toNext() {
      this.$router.go(-1);
      this.usernameMsg = "";
      this.msg = "";
    },
  },
  watch: {
    msg(value) {
      if (value) {
        this.valueNum = true;
        this.isShow2 = true;
      }
      if (this.valueNum == true && this.valueNumber == true) {
        this.isOther = true;
      }
      if (value.length == 0) {
        this.valueNum = false;
        this.isOther = false;
        this.isShow2 = false;
      }
    },
    usernameMsg(value) {
      if (value) {
        this.valueNumber = true;
        this.isShow = true;
      }
      if (this.valueNum == true && this.valueNumber == true) {
        this.isOther = true;
      }
      if (value.length == 0) {
        this.valueNumber = false;
        this.isOther = false;
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.enter-box {
  height: 100%;
  padding: 10px 25px;
}
.enter-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.enter-top-left {
  width: 30px;
  height: 30px;
}
.enter-top-left img {
  width: 100%;
}
.enter-top-mid {
  font-size: 17px;
}
.enter-username {
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  align-items: center;
  position: relative;
}
.enter-username input {
  width: 100%;
  border: none;
  font-size: 16px;
  outline: none;
}
.enter-username input::-webkit-input-placeholder {
  color: rgb(189, 187, 187);
  font-size: 16px;
}
.enter-username-forget {
  flex-shrink: 0;
  width: 80px;
  height: 23px;
  text-align: center;
  line-height: 23px;
  font-size: 13px;
  padding: 0 10px;
  margin-left: 5px;
  border-left: 1px solid rgb(204, 202, 202);
}
.enter-username-eye {
  width: 40px;
  display: flex;
  align-items: center;
  margin: 0 30px 0 20px;
}
.enter-username-eye img {
  width: 100%;
}
.enter-login {
  width: 100%;
  color: #fff;
  border-radius: 25px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  line-height: 50px;
  margin-bottom: 10px;
  background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
}
.enter-login-in {
  width: 100%;
  color: #fff;
  border-radius: 25px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  line-height: 50px;
  margin-bottom: 10px;
  background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18);
}
.enter-login-one {
  width: 100%;
  border-radius: 25px;
  height: 48px;
  text-align: center;
  text-decoration: none;
  line-height: 48px;
  border: 1px solid #ff2000;
  color: #f10000;
}
.enter-sign {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
}
.enter-orther {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
}
.enter-line {
  height: 8px;
  width: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.enter-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.enter-icon-img {
  width: 50px;
  margin: 20px;
}
.enter-icon-img img {
  width: 100%;
}
.enter-icon-img span {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  width: 48px;
  justify-content: center;
}
.enter-agree {
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.13rem;
  text-align: center;
}
.enter-agree a {
  color: #4a90e2;
  text-decoration: none;
}

.enter-username-icon {
  position: absolute;
  width: 20px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 0;
  right: 0;
  top: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
}
.qwd-icon {
  right: 142px;
}
</style>