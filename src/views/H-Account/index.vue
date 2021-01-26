<template>
  <div class="accountalBg">
    <userthre :headTitle="pageTitle"></userthre>
    <div class="accountF">
      <table class="accountTab" border="1" bordercolor="#ccc">
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">手机号</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain" :model="phone"></p>
              <p class="accountClick" @click="PhoneDialog()">更改</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">邮箱</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">123456789@gmail.com</p>
              <p class="accountClick" @click="emailyz = true">绑定</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">密码</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain">已设置，可通过账户密码登录</p>
              <p class="accountClick" @click="pwdyz = true">更改</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="accountTd">
            <div class="accountTddiv">
              <p class="accountHead">微信</p>
            </div>
            <div style="display: flex; justify-content: space-between">
              <p class="accountMain"><i class="el-icon-s-comment"></i>晚风</p>
              <p class="accountClick" @click="wxbtn = true">解绑</p>
            </div>
          </td>
        </tr>
      </table>
      <!-- 手机验证 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="phoneyz"
      >
        <div>
          <p class="account-change-bindphone2">
            为了你的账户安全，请验证身份。验证成功后进行下一步操作。
          </p>
          <div>
            <input
              class="account-change-phoneaccount"
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="phone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="phonecode"
            />
            <button v-show="show" @click="getCode" class="account-change-phonehq" id="one">
              发送验证码
            </button>
            <el-button v-show="!show" class="Forgetcode_button1"
              >{{ count }}秒重发</el-button
            >
          </div>
          <div>
            <button class="account-change-phoneclick" @click="cancel">
              取消
            </button>
            <button class="account-change-phoneclick" @click="Code">
              验证
            </button>
          </div>
        </div>
        <el-dialog
          :close-on-click-modal="false"
          width="30%"
          title="更改手机号码"
          :visible.sync="phonenew"
          append-to-body
        >
          <div>
            <p class="account-new-change">更改手机号</p>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请输入手机号"
                maxlength="11"
                v-model="changephone"
              />
            </div>
            <div>
              <input
                class="account-new-acccode"
                type="text"
                placeholder="请输入验证码"
                v-model="changephonecode"
              />
              <button v-show="shows" @click="getCodes" class="account-new-hqcode" id="one">
               获取验证码
              </button>
              <el-button v-show="!shows" class="Forgetcode_button1"
              >{{ counts }}秒重发</el-button
            >
            </div>
            <div>
              <button class="account-new-click" @click="sureChange">
                确认
              </button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>

      <!-- 邮箱的验证 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="emailyz"
      >
        <div>
          <p class="account-change-bindphone2">
            为了你的账户安全，请验证身份。验证成功后进行下一步操作。
          </p>
          <div>
            <input
              class="account-change-phoneaccount"
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="emailphone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="emailphonecode"
            />
            <button class="account-change-phonehq" id="one" :disabled="phonedd">
              {{ phonecodeTxt }}
            </button>
          </div>
          <div>
            <button class="account-change-phoneclick" @click="emailno">
              取消
            </button>
            <button class="account-change-phoneclick" @click="emailyes">
              验证
            </button>
          </div>
        </div>
        <!-- 新邮箱 -->
        <el-dialog
          :close-on-click-modal="false"
          width="30%"
          title="更改邮箱"
          append-to-body
          :visible.sync="emailnew"
        >
          <div>
            <p class="account-new-change">邮箱绑定</p>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请输入邮箱"
                maxlength="11"
                v-model="newemail"
              />
            </div>
            <div>
              <input
                class="account-new-acccode"
                type="text"
                placeholder="请输入验证码"
                v-model="newemailcode"
              />
              <button class="account-new-hqcode" @click="getEmailCode" id="one" :disabled="phonedd">
                {{ phonecodeTxt }}
              </button>
            </div>
            <div>
              <button class="account-new-click" @click="emailnewyes">
                确认
              </button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>
      <!-- 密码更改 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="pwdyz"
      >
        <div>
          <p class="account-change-bindphone2">
            为了你的账户安全，请验证身份。验证成功后进行下一步操作。
          </p>
          <div>
            <input
              class="account-change-phoneaccount"
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="pwdphone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="pwdphonecode"
            />
            <button v-show="Pwdshow" class="account-change-phonehq" @click="getPwdCode" id="one" >
              {{ phonecodeTxt }}
            </button>
            <el-button v-show="!Pwdshow" class="Forgetcode_button1"
              >{{ Pwdcount }}秒重发</el-button
            >
          </div>
          <div>
            <button class="account-change-phoneclick" @click="pwdno">
              取消
            </button>
            <button class="account-change-phoneclick" @click="pwdyes">
              验证
            </button>
          </div>
        </div>
        <!-- 新密码 -->
        <el-dialog
          :close-on-click-modal="false"
          width="30%"
          title="修改密码"
          :visible.sync="pwdnew"
          append-to-body
        >
          <div>
            <p class="account-new-change">修改密码</p>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请输入密码"
                v-model="newpwd"
              />
            </div>
            <div>
              <input
                class="account-new-changeimp"
                type="text"
                placeholder="请再次输入密码"
                v-model="newpwds"
              />
            </div>
            <div>
              <button class="account-new-click" @click="pwdnewyes">验证</button>
            </div>
          </div>
        </el-dialog>
      </el-dialog>
      <!-- 微信 -->
      <el-dialog
        title="身份验证"
        :close-on-click-modal="false"
        :visible.sync="wxbtn"
      >
        <div>
          <p class="account-change-bindphone2">
            为了你的账户安全，请验证身份。验证成功后进行下一步操作。
          </p>
          <div>
            <input
              class="account-change-phoneaccount"
              type="text"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="wxphone"
            />
          </div>
          <div>
            <input
              class="account-change-phoncode"
              type="text"
              placeholder="请输入验证码"
              v-model="wxphonecode"
            />
            <button class="account-change-phonehq" id="one" :disabled="phonedd">
              {{ phonecodeTxt }}
            </button>
          </div>
          <div>
            <button class="account-change-phoneclick" @click="wxno">
              取消
            </button>
            <button class="account-change-phoneclick" @click="wxyes">
              验证
            </button>
          </div>
        </div>
        <!-- 解绑微信 -->
      </el-dialog>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
import service from '@/service/index'
import qs from 'qs'
export default {
  components: { userthre },

  data() {
    return {
      pageTitle: "账户管理",
      phone: "",//手机号
      phonecode: "",//手机验证码
      changephone: "",//更换手机号
      changephonecode: "",//输入验证码
      count:'',//多长时间后再次发送验证码
      emailphone: "",
      emailphonecode: "",
      newemail: "",
      newemailcode: "",
      pwdphone: "",//手机号
      pwdphonecode: "",//验证码
      newpwd: "",
      newpwds: "",
      wxphone: "",
      wxphonecode: "",
      phonedd: "",
      phoneyz: false,//更换手机号弹框
      phonenew: false,//绑定新的手机号弹框
      emailyz: false,
      emailnew: false,
      pwdyz: false,
      pwdnew: false,
      wxbtn: false,
      wxnewbtn: false,
      phonecodeTxt:'获取验证码',
      show: true,
      count: "",
      timer: null,
      
      shows: true,
      counts: "",
      timers: null,

      Pwdshow: true,
      Pwdcount: "",
      Pwdtimer: null,
    };
  },

  methods: {
    // 解绑
    // 更改手机号弹框
    PhoneDialog(){
      this.phoneyz=!this.phoneyz
    },
    // 发送短信验证码
    getCode(){
      let params={
        Phone:this.phone
      }
      service.getCode(qs.stringify(params)).then(res=>{
        console.log(res)
        if(/^1[34578]\d{9}$/.test(this.phone) == ""){
          this.$message.error("手机号错误或为空，请重新输入");
        }else{
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }
        }
      })
    },
    // 验证
    Code(){
      let params={
        number:this.phone,
        Verification:this.phonecode
      }
      service.checkCode(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.result==true){
          this.phoneyz=!this.phoneyz
          this.phonenew=!this.phonenew
        }
      })
    },
    //发送验证码
    getCodes(){
      let params={
        Phone:this.changephone
      }
      service.getCode(qs.stringify(params)).then(res=>{
        console.log(res)
        if(/^1[34578]\d{9}$/.test(this.changephone) == ""){
          this.$message.error("手机号错误或为空，请重新输入");
        }else{
          const TIME_COUNT = 60;
          if (!this.timers) {
            this.counts = TIME_COUNT;
            this.shows = false;
            this.timers = setInterval(() => {
              if (this.counts > 0 && this.counts <= TIME_COUNT) {
                this.counts--;
              } else {
                this.shows = true;
                clearInterval(this.timer);
                this.timers = null;
              }
            }, 1000);
          }
        }
      })
    },
    // 确认更改手机号
    sureChange(){
      let params={
        number:this.changephone,
        Verification:this.phonecode
      }
      service.checkCode(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.result==true){
          this.phonenew=!this.phonenew
        }
      })
    },
    // 取消更改
    cancel(){
      this.phoneyz=!this.phoneyz
    },
    // 获取邮箱验证码
    getEmailCode(){},
    // 邮箱
    emailno() {
      this.emailyz = false;
    },
    emailyes() {
      this.emailyz = false;
      this.emailnew = true;
    },
    // 新邮箱
    emailnewyes() {
      this.emailnew = false;
    },
    // 密码
    // 获取验证码
    getPwdCode(){
      let params={
        Phone:this.pwdphone
      }
      console.log(params)
      service.getCode(qs.stringify(params)).then(res=>{
        console.log(res)
        if(/^1[34578]\d{9}$/.test(this.pwdphone) == ""){
          this.$message.error("手机号错误或为空，请重新输入");
        }else{
          const TIME_COUNT = 60;
          if (!this.Pwdtimer) {
            this.Pwdcount = TIME_COUNT;
            this.Pwdshow = false;
            this.Pwdtimer = setInterval(() => {
              if (this.Pwdcount > 0 && this.Pwdcount <= TIME_COUNT) {
                this.Pwdcount--;
              } else {
                this.Pwdshow = true;
                clearInterval(this.Pwdtimer);
                this.Pwdtimer = null;
              }
            }, 1000);
          }
        }
      })
    },
    
    // 密码
    pwdyes() {
      this.pwdyz=!this.pwdyz
      this.pwdnew = !this.pwdnew;
      
    // 取消
    },
    pwdno() {
      this.pwdyz = false;
    },
    // 新密码
    pwdnewyes() {
      let params={
        Pwd:this.newpwd,
        RPwd:this.newpwds,
        U_ID:12
      }
      service.CodePwd(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.result==true){
          this.pwdnew = !this.pwdnew;
        }
      })
    },
    // 解绑微信
    wxno() {
      this.wxbtn = false;
    },
    // 解绑
    wxyes() {
      this.wxbtn = false;
      this.$confirm("你确定要解绑微信吗？", "解绑微信", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "解绑成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消解绑",
          });
        });
    },
  },
};
</script>

<style >
@import "account.css";
</style>
