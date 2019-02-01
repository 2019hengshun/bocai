<template>
    <div class="hs_container">
        <div class="hs_nav">
          <div class="hs_logo">
            <img  src="../assets/logo.png" alt="">
          </div>
          <div class="hs_menu">
            <ul>
              <li :class="{liHover:bRouter}" @click="handleRouter('/index/home'),bRouter=!bRouter"><img src="../assets/image/hs_sy_1.png" alt="" ><span>{{$t('home')}}</span></li>
              <li :class="{liHover:!bRouter}" @click="handleRouter('/index/game'),bRouter=!bRouter"><img src="../assets/image/hs_bd.png" alt=""><span>{{$t('blister')}}</span></li>
            </ul>
          </div>
          <div class="hx_center">
            <ul>
              <li class="changeMessage"><img src="../assets/image/hs_xy.png" alt=""><span>{{$t('message')}}</span><i class="hs_message_dot"></i>
                <div class="hx_center_message" >
                  <template v-if="bNotice">
                  <div>
                    <img src="../assets/image/left.png" alt="">
                    <span>{{$t('messageList')}}</span>   
                  </div>
                  <div class="hx_bscroll" >
                              <ul v-if="aNotice.length">
                                <li v-for="(temp,index) in aNotice" :key="index">
                                    <div>
                                        <strong :style="{background:temp.bRead?'#828590':'#46c1e0'}">
                                          <template v-if="temp.bRead">
                                            {{$t('read')}}
                                          </template>
                                          <template v-else>
                                           NEW
                                          </template>
                                          </strong>
                                        <span @click="handleNotice(temp.content,index)">{{temp.title}}</span>
                                      </div>
                                      <div>
                                        <span>{{temp.time*1000|dateServer}}</span>
                                        <img @click="handleNoticeDelete(index)" src="../assets/image/hs_delete.png" alt="">
                                      </div>                                  
                                </li>
                              </ul>
                  </div>
                  </template>
                  <template v-else>
                    <div>
                         <img @click="bNotice = true" src="../assets/image/hs_back.png" alt="" style="cursor:pointer">
                        <span @click="bNotice = true" style="cursor:pointer" >{{$t('backMessageList')}}</span>   
                    </div>
                    <div  class="hx_bscroll2" v-html="sNoticeContent" >
                    </div>
                  </template>

                </div>
              </li>
              <li class="changeLangue"><img :src="oCurrentLanguage.icon"  alt="" width="24px;" height="24px" @click="sendMessageToServer()"><span>{{oCurrentLanguage.name}}</span><img src="../assets/image/hs_qh.png" alt=""  style=" cursor: pointer;">
                <div class="hx_centerLang">
                  <ul v-if="aLanguage">
                    <li v-for="(temp,index) in aLanguage" :key = "index" @click="switchLanguage(temp.id,temp)"><img :src="temp.icon" alt=""><template v-if="index<2"><span :class="{hx_centerLangHover:temp.type==language}">{{temp.name}}</span></template>
                    <template v-else>
                      <el-tooltip class="item" effect="dark" :content="beComingSoonL" placement="right-start"><span>{{temp.name}}</span></el-tooltip>
                    </template>
                    </li>
                  </ul>
                </div>
              </li>
              <li v-if="!isLogin" @click="_getIdentity" style=" cursor: pointer;"><img src="../assets/image/hs_dl.png" alt=""><span >{{$t('login')}}</span><img src="../assets/image/hs_dl_1.png" alt="" ></li>
              <li v-if="isLogin"><img src="../assets/image/hs_dl.png" alt=""><span @click="getIdentity">{{Identity.name}}</span><img @click="_forgetIdentity" src="../assets/image/hs_logout.png" alt="" style=" cursor: pointer;"></li>
            </ul>
          </div>
        </div>
        <div class="hs_nav_level">
          <ul class="hs_nav_level_first">
            <li><img class="logo" src="../assets/logo.png" alt=""></li>
            <li class="logo_nav"><img src="../assets/image/hs_sy_1.png" alt="" ><span>{{$t('home')}}</span></li>
            <li class="logo_nav"><img src="../assets/image/hs_bd.png" alt=""><span>{{$t('blister')}}</span></li>
            <li class="hs_nav_last"><i class="iconfont icon-menu cursor-pointer" style="color:#fff" @click="showMenu()"></i></li>
          </ul>
          <transition name="fade">
            <ul v-if="show" class="menu submenu">
              <li class="changeMessage"><img src="../assets/image/hs_xy.png" alt=""><strong>{{$t('message')}}</strong><i class="hs_message_dot"></i>
                <div class="hx_center_message" >
                  <template v-if="bNotice">
                  <div>
                    <img src="../assets/image/left.png" alt="">
                    <span>{{$t('messageList')}}</span>   
                  </div>
                  <div class="hx_bscroll" >
                              <ul v-if="aNotice.length">
                                <li v-for="(temp,index) in aNotice" :key="index">
                                    <div>
                                        <strong :style="{background:temp.bRead?'#828590':'#46c1e0'}">
                                          <template v-if="temp.bRead">
                                            {{$t('read')}}
                                          </template>
                                          <template v-else>
                                           NEW
                                          </template>
                                          </strong>
                                        <span @click="handleNotice(temp.content,index)">{{temp.title}}</span>
                                      </div>
                                      <div>
                                        <span>{{temp.time*1000|dateServer}}</span>
                                        <img @click="handleNoticeDelete(index)" src="../assets/image/hs_delete.png" alt="">
                                      </div>                                  
                                </li>
                              </ul>
                  </div>
                  </template>
                  <template v-else>
                    <div>
                         <img @click="bNotice = true" src="../assets/image/hs_back.png" alt="" style="cursor:pointer">
                        <span @click="bNotice = true" style="cursor:pointer" >{{$t('backMessageList')}}</span>   
                    </div>
                    <div  class="hx_bscroll2" v-html="sNoticeContent" >
                    </div>
                  </template>

                </div>              
              </li>
              <li class="changeLangue"><img :src="oCurrentLanguage.icon"  alt="" width="24px;" height="24px" ><strong>{{oCurrentLanguage.name}}</strong>
                <div class="hx_centerLang">
                  <ul v-if="aLanguage">
                    <li v-for="(temp,index) in aLanguage" :key = "index" @click="switchLanguage(temp.id,temp)"><img :src="temp.icon" alt=""><template v-if="index<2"><span :class="{hx_centerLangHover:temp.type==language}">{{temp.name}}</span></template>
                    <template v-else>
                      <el-tooltip class="item" effect="dark" :content="beComingSoonL" placement="right-start"><span>{{temp.name}}</span></el-tooltip>
                    </template>
                    </li>
                  </ul>
                </div>
              </li>
              <li v-if="!isLogin" @click="_getIdentity" style=" cursor: pointer;"><img src="../assets/image/hs_dl.png" alt=""><strong >{{$t('login')}}</strong><img src="../assets/image/hs_dl_1.png" alt="" ></li>
              <li v-if="isLogin"><img src="../assets/image/hs_dl.png" alt=""><strong @click="getIdentity">{{Identity.name}}</strong><img @click="_forgetIdentity" src="../assets/image/hs_logout.png" alt="" style=" cursor: pointer;"></li>
            </ul>
        </transition>
          
          
        </div>
        <div class="hs_main">
          <router-view/>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import "../config/deploy";
import eos from "eosjs";
import eosApi from "eosjs-api";
import echarts from "echarts";
import {
  httpGetLanguagesAll,
  httpUserLogin,
  httpGetNotice,
  httpGetOnlyNotice
} from "../service/http";
import { isPc } from "../config/normal";
import { ENOSPC } from "constants";
import { isNullOrUndefined } from "util";
export default {
  data() {
    return {
      show: false,
      ops: {
        bar: {
          background: "rgb(24, 144, 255)"
        },
        rail: {
          border: "1px solid #cecece",
          size: "20px"
        },
        scrollButton: {
          enable: true,
          background: "#cecece"
        }
      },
      bNotice: true,
      aNotice: [],
      sNoticeContent: "",
      oIdentity: {},
      bRouter: true,
      aLanguage: [],
      oCurrentLanguage: {
        icon: require("../assets/image/hs_zw_1.png"),
        id: 1,
        name: "中文",
        type: "zh"
      },
      beComingSoonL: "即将上线"
    };
  },
  updated() {
    this.beComingSoonL = this.$t("beComingSoon");
  },
  computed: {
    ...mapGetters(["Identity", "isLogin", "language"])
  },
  methods: {
    ...mapActions(["getIdentity", "forgetIdentity", "changeLan"]),
    showMenu() {
      console.log(1);
      this.show = !this.show;
    },
    /**
     * 得到公告列表
     * @param {語言傳入的ID} language_id
     */
    _httpGetNotice(language_id) {
      httpGetNotice(language_id).then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.aNotice = data.data;
          this.aNotice.forEach(v => {
            v.bRead = false;
          });
        }
      });
    },

    /**
     * 得到公告的详情
     * content 公告的详情
     */
    handleNotice(content, index) {
      this.sNoticeContent = content;
      this.aNotice[index].bRead = true;
      // this.sNoticeContent = '<h1 style="color:red;">腾讯</h1>';
      this.bNotice = false;
    },

    /**
     * 删除一个公告
     */
    handleNoticeDelete(index) {
      this.aNotice.splice(index, 1);
    },
    /**
     * 路由跳转
     */
    handleRouter(url) {
      this.$router.push(url);
    },
    /**
     * 得到用户信息
     * 传给后台
     */
    _getIdentity() {
      let id = "";
      let account;
      scatter
        .getIdentity({
          accounts: [network]
        })
        .then(identity => {
          //1. 用户授权完成后，获取用户的EOS帐号名字（12位长度），传给后台完成登录or注册操作操作
          account = identity.accounts.find(acc => acc.blockchain === "eos");
          console.log(
            "1. 用户授权完成后，获取用户信息，提交给后台完成用户登录or注册",
            identity
          );
          //                const  chainId = "1c6ae7719a2a3b4ecb19584a30ff510ba1b6ded86e1fd8b8fc22f1179c622a32"

          var Oid = JSON.parse(JSON.stringify(identity));

          var publicKey = Oid.accounts[0].name;
          console.log("++++++++" + publicKey);
          var wif = this.Ecc.seedPrivate(publicKey);
          var public_key = this.Ecc.privateToPublic(wif);
          var sing = this.Ecc.sign("recreational_machines_game_2019", wif);
          identity["sing"] = sing;
          identity["public_key"] = public_key;
          httpUserLogin(identity).then(res => {
            let data = res.data;
            if (data.code == 200) {
              this.getIdentity(data.data).then(res => {});
            } else {
              this.$message({
                message: data.msg,
                type: "error"
              });
            }
          });
        })
        .catch(e => {
          console.log("error", e);
        });
    },
    /**
     * 退出登录忘记用户信息
     */
    _forgetIdentity() {
      scatter.forgetIdentity().then(() => {
        this.forgetIdentity(res => {});
      });
    },
    /**
     * 切换语言
     */
    switchLanguage(type, object) {
      /**
       * 告诉自己 切换了语言
       */
      var lan = type == 1 ? "zh" : type == 2 ? "en" : null;
      if (lan) {
        this.changeLan(lan).then(res => {
          /**
           * 告诉后台
           */
          this.oCurrentLanguage = JSON.parse(JSON.stringify(object));
          this.$i18n.locale = lan;
        });
      } else {
        return;
      }
    },

    getAllLangugae() {
      var aLanguage = [
        {
          icon: require("../assets/image/hs_zw_1.png"),
          id: 1,
          name: "中文",
          type: "zh"
        },
        {
          icon: require("../assets/image/hs_yw_1.png"),
          id: 2,
          name: "English",
          type: "en"
        },
        {
          icon: require("../assets/image/hs_ft_1.png"),
          id: 3,
          name: "繁體"
        },
        {
          icon: require("../assets/image/hs_hg_1.png"),
          id: 4,
          name: "韓國"
        },
        {
          icon: require("../assets/image/hs_jp_1.png"),
          id: 5,
          name: "日本语"
        }
      ];
      this.aLanguage = aLanguage;
      console.log(this.aLanguage);
      httpGetLanguagesAll(res => {
        let data = res.data;
        if (data.code == 200) {
          this.aLanguage = aLanguage;
          console.log(this.aLanguage);
        }
      });
    },
    /**
     *发送信息
     */
    sendMessageToServer: function() {
      this.$socket.emit("message", { msg: "123" });
      this.$socket.on("msg", msg => {
        console.log("收到消息" + msg);
      });
    }
  },
  /**
   * 接受信息
   */
  sockets: {
    msg: function(val) {
      console.log("接收到服务端消息", val);
    }
  },
  mounted() {
    this._httpGetNotice(1);
    this.getAllLangugae();

    // .res("message", res => {
    //   let data = res;
    //   console.log(res);
    // });
    // //wif钱包导入格式

    // /**
    //  * 加密
    //  */
    // console.log("加密得到钱包导入格式wif" + this.Ecc.seedPrivate("secret"));
    // /**
    //  * 将公钥转换成eos什么的
    //  * 参数是钱包导入格式
    //  * 结果为pubkey
    //  */
    // console.log(
    //   "得到公钥EOS格式" +
    //     this.Ecc.privateToPublic(
    //       "5J9YKiVU3AWNkCa2zfQpj1f2NAeMQhLsYU51N8NM28J1bMnmrEQ"
    //     )
    // );

    // /**
    //  *判断是否为pubkey
    //  */
    // console.log(
    //   this.Ecc.isValidPublic(
    //     "EOS83msFTj6yv5U91KkiRxHcDZUXJkR6xwC9EjbqqwFqhFa1nxMYx"
    //   )
    // );
    // /**
    //  * 判断是否为 钱包导入格式
    //  */
    // console.log(
    //   this.Ecc.isValidPrivate(
    //     "5J9YKiVU3AWNkCa2zfQpj1f2NAeMQhLsYU51N8NM28J1bMnmrEQ"
    //   )
    // );
    // /**signature
    //  *加密注册
    //  * 自己定义的参数  后面是钱包导入参数
    //  * signature
    //  *
    //  */
    // console.log(
    //   this.Ecc.sign(
    //     "I am alive",
    //     "5J9YKiVU3AWNkCa2zfQpj1f2NAeMQhLsYU51N8NM28J1bMnmrEQ"
    //   )
    // );
    // /**
    //  *ecc.verify(signature, 'I am alive', pubkey)
    //  */
    // console.log(
    //   '判断是否正确'+
    //   this.Ecc.verify(
    //     "SIG_K1_KaTtSojsLWEEobiGwvarmMbW6B73UJ4BQBy4WoozfzL4n7ysJeq8BB3Ah3DCFvhEXVhAHHH7cyKPkNBnRPDjTHwbYTtSKi",
    //     "I am aliv",
    //     "EOS83msFTj6yv5U91KkiRxHcDZUXJkR6xwC9EjbqqwFqhFa1nxMYx"
    //   )
    // );

    // // this.Ecc.randomKey().then(privateKey => {
    // //   console.log("Private Key:\t", privateKey); // wif
    // //   console.log("Public Key:\t", this.Ecc.privateToPublic(privateKey)); // EOSkey...
    // // });

    // /**
    //  * 创造一个签名
    //  */
    // console.log(
    //   "签名" +
    //     this.Ecc.sign(
    //       "I am alive",
    //       "5J9YKiVU3AWNkCa2zfQpj1f2NAeMQhLsYU51N8NM28J1bMnmrEQ"
    //     )
    // );

    // //console.log(this.Ecc.verify(signature, "I am alive", 'EOS83msFTj6yv5U91KkiRxHcDZUXJkR6xwC9EjbqqwFqhFa1nxMYx'));
    // /**
    //  * 翻转
    //  */
    // console.log(
    //   "翻转成了EOS秘钥" +
    //     this.Ecc.recover(
    //       "SIG_K1_KaTtSojsLWEEobiGwvarmMbW6B73UJ4BQBy4WoozfzL4n7ysJeq8BB3Ah3DCFvhEXVhAHHH7cyKPkNBnRPDjTHwbYTtSKi",
    //       "I am alive"
    //     )
    // );
  }
};
</script>
<style lang="scss" scoped>
.hs_container {
  position: relative;
  width: 100%;
  // height: 100%;
  // height: 1080px;
  background: rgb(26, 27, 46);
  @media (min-width: 1600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .hs_nav {
      width: 17%;
      background: url("../assets/image/hs_bg_1.png");
      position: relative;
      display: flex;
      flex-direction: column;
      .hs_logo {
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 50%;
          height: 50%;
        }
      }
      .hs_menu {
        & > ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .liHover {
            background: rgba(37, 51, 69, 0.8);
            border-radius: 4px;
          }
          li {
            width: 160px;
            height: 58px;
            padding: 11px;
            font-weight: bold;
            font-size: 20px;
            line-height: 36px;
            color: #46c1e0;
            margin: 10px;
            cursor: pointer;
            img {
              position: relative;
              top: -3px;
              margin-left: 30px;
            }
            span {
              margin-left: 10px;
            }
          }
        }
      }
      .hx_center {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        & > ul {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgb(145, 147, 156);
          & > li {
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
            position: relative;
            &:not(:first-child) {
              margin-top: 44px;
            }
            span {
              display: inline-block;
              margin: 0 10px;
            }
            img {
              position: relative;
              top: -3px;
            }
            .hs_message_dot {
              height: 8px;
              width: 8px;
              border-radius: 50%;
              position: absolute;
              background-color: rgb(70, 194, 225);
              border-radius: 10px;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              vertical-align: super;
              cursor: pointer;
            }
            &.changeMessage {
              &:hover div.hx_center_message {
                opacity: 1;
                top: -530px;
                visibility: visible;
              }
            }
            &.changeLangue {
              &:hover div.hx_centerLang {
                opacity: 1;
                top: -180px;
                visibility: visible;
              }
            }
            div.hx_center_message {
              z-index: 999;
              width: 400px;
              height: 535px;
              background: url("../assets/image/hs_rb_2.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;
              opacity: 0;
              visibility: hidden;
              font-weight: normal;
              position: absolute;
              top: -490px;
              left: 105px;
              transition: all 0.3s ease 0s;
              & > div:first-child {
                height: 40px;
                background: #242a3d;
                margin-left: 18px;
                border-radius: 10px 0 0 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                  margin-left: 20px;
                  position: relative;
                }
              }
              div.hx_bscroll2 {
                width: 382px;
                margin-left: 18px;
                padding: 0 15px;
              }
              div.hx_bscroll {
                width: 382px;
                height: 482px;
                margin-left: 18px;
                overflow-y: scroll;
                ul {
                  display: flex;
                  flex-direction: column;
                  padding: 0 15px;
                  li {
                    height: 88px;
                    border-bottom: 1px solid #1d1e31;
                    & > div:first-child {
                      margin-top: 10px;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      strong {
                        width: 36px;
                        height: 18px;
                        font-size: 12px;
                        line-height: 18px;
                        color: #1d1e31;

                        border-radius: 3px;
                        text-align: center;
                        margin-left: 5px;
                      }
                      span {
                        color: #fefefe;
                        cursor: pointer;
                      }
                    }
                    & > div:last-child {
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-between;
                      span {
                        font-size: 14px;
                        line-height: 36px;
                        color: #fefefe;
                        margin-left: 8px;
                        color: #92949b;
                      }
                      img {
                        cursor: pointer;
                      }
                    }
                  }
                }

                /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
                &::-webkit-scrollbar {
                  width: 6px;
                  height: 6px;
                  background-color: #505564;
                }

                /*定义滚动条轨道 内阴影+圆角*/
                &::-webkit-scrollbar-track {
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                  border-radius: 10px;
                  background-color: #f5f5f5;
                }

                /*定义滑块 内阴影+圆角*/
                &::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                  background-color: #555;
                }
              }
            }

            div.hx_centerLang {
              width: 125px;
              height: 195px;
              background: url("../assets/image/hs_rb_1.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;
              opacity: 0;
              visibility: hidden;
              font-weight: normal;
              position: absolute;
              top: -150px;
              left: 105px;
              transition: all 0.3s ease 0s;
              img {
                margin-left: 30px;
              }
              span {
                cursor: pointer;
                &:hover {
                  color: #3b7c95;
                }
              }
              .hx_centerLangHover {
                color: #3b7c95;
              }
            }
          }
        }
      }
    }
    .hs_main {
      background: #1a1b2e;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .hs_main_money {
        width: 1490px;
        height: 364px;
        margin-top: 50px;
        margin-left: 55px;
        background: #232436;
        border-radius: 10px;
        & > :first-child {
          height: 55px;
          background: #242a3d;
          border-radius: 10px 10px 0 0;
          img {
            margin-left: 20px;
          }
          span {
            font-size: 20px;
            line-height: 55px;
            color: #fefefe;
          }
        }
        .hs_main_money_bottom {
          display: flex;
          flex-direction: row;
          .hs_main_money_left {
            width: 360px;
            margin: 25px 0 25px 0;
            border-right: 1px solid #393a4a;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-top: 35px;
            }
            strong {
              font-size: 32px;
              line-height: 86px;
              color: #46c1e0;
            }
            span {
              font-size: 20px;
              line-height: 36px;
            }
          }
          .hs_main_game_right {
            width: 100%;
            position: relative;
            .hs_main_game_line {
              position: absolute;
              left: 140px;
              top: 170px;
            }
            ul {
              width: 100%;
              margin: 25px 0 25px 0;
              display: flex;
              justify-content: space-around;
              li {
                display: flex;

                flex-direction: column;
                align-items: center;
                img {
                  margin-top: 35px;
                  cursor: pointer;
                }
                & > div {
                  width: 100%;
                  text-align: center;
                }
                & > span {
                  color: #fefefe;
                  margin-top: 78px;
                }
                // strong {
                //   display: inline-block;
                //   width: 18px;
                //   height: 18px;
                //   border: 1px solid #fefefe;
                //   border-radius: 50%;
                //   margin-top: 39px;
                //   text-align: center;
                //   position: relative;
                //   i {
                //     display: inline-block;
                //     width: 12px;
                //     height: 12px;
                //     background: #fefefe;
                //     border-radius: 50%;
                //     position: relative;
                //     top: -3px;
                //   }
                //   & > div > div {
                //     display: inline-block;
                //     width: 50%;
                //     height: 12px;
                //     background: red;
                //   }
                // }
              }
            }
          }
        }
      }
      .hs_main_game {
        width: 1490px;
        height: 566px;
        margin-top: 50px;
        margin-left: 55px;
        background: #232436;
        border-radius: 10px;
        & > :first-child {
          height: 55px;
          background: #242a3d;
          border-radius: 10px 10px 0 0;
          img {
            margin-left: 20px;
          }
          span {
            font-size: 20px;
            line-height: 55px;
            color: #fefefe;
          }
        }
        & > :last-child {
          color: red;
          ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 80px;
            li {
              width: 340px;
              height: 340px;
              background: url("../assets/image/hs_bj1.png");
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #fefefe;
              position: relative;
              img {
                margin-top: 40px;
                cursor: pointer;
              }
              span {
                font-size: 20px;
                line-height: 36px;
              }
              .imgNew {
                position: absolute;
                top: -44px;
                left: -4px;
              }
            }
          }
        }
      }
    }
    .hs_nav_level {
      display: none;
    }
  }
  @media (max-width: 1599px) and (min-width: 577px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .hs_nav {
      width: 17%;
      background: url("../assets/image/hs_bg_1.png");
      display: flex;
      flex-direction: column;
      align-items: center;
      .hs_logo {
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 50%;
          height: 50%;
        }
      }
      .hs_menu {
        & > ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .liHover {
            background: rgba(37, 51, 69, 0.8);
            border-radius: 4px;
          }
          li {
            width: 160px;
            height: 58px;
            padding: 11px;
            font-weight: bold;
            font-size: 20px;
            line-height: 36px;
            color: #46c1e0;
            margin: 10px;

            img {
              position: relative;
              top: -3px;
              margin-left: 30px;
            }
            span {
              margin-left: 10px;
            }
          }
        }
      }
      .hx_center {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        & > ul {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgb(145, 147, 156);
          & > li {
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
            position: relative;
            &:not(:first-child) {
              margin-top: 44px;
            }
            & > span {
              display: inline-block;
              margin: 0 10px;
            }
            & > img {
              position: relative;
              top: -3px;
            }
            .hs_message_dot {
              height: 8px;
              width: 8px;
              border-radius: 50%;
              position: absolute;
              background-color: rgb(70, 194, 225);
              border-radius: 10px;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              vertical-align: super;
            }

            div.hx_centerLang {
              width: 125px;
              height: 195px;
              background: url("../assets/image/hs_rb_1.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;

              font-weight: normal;
              position: absolute;
              top: -180px;
              left: 105px;
              img {
                margin-left: 30px;
              }
              .hx_centerLangHover {
                color: #3b7c95;
              }
            }
            &.changeMessage {
              &:hover div.hx_center_message {
                opacity: 1;
                top: -530px;
                visibility: visible;
              }
            }
            &.changeLangue {
              &:hover div.hx_centerLang {
                opacity: 1;
                top: -180px;
                visibility: visible;
              }
            }
            div.hx_center_message {
              z-index: 999;
              width: 400px;
              height: 535px;
              background: url("../assets/image/hs_rb_2.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;
              opacity: 0;
              visibility: hidden;
              font-weight: normal;
              position: absolute;
              top: -490px;
              left: 105px;
              transition: all 0.3s ease 0s;
              & > div:first-child {
                height: 40px;
                background: #242a3d;
                margin-left: 18px;
                border-radius: 10px 0 0 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                  margin-left: 20px;
                  position: relative;
                }
              }
              div.hx_bscroll2 {
                width: 382px;
                margin-left: 18px;
                padding: 0 15px;
              }
              div.hx_bscroll {
                width: 382px;
                height: 482px;
                margin-left: 18px;
                overflow-y: scroll;
                ul {
                  display: flex;
                  flex-direction: column;
                  padding: 0 15px;
                  li {
                    height: 88px;
                    border-bottom: 1px solid #1d1e31;
                    & > div:first-child {
                      margin-top: 10px;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      strong {
                        width: 36px;
                        height: 18px;
                        font-size: 12px;
                        line-height: 18px;
                        color: #1d1e31;

                        border-radius: 3px;
                        text-align: center;
                        margin-left: 5px;
                      }
                      span {
                        color: #fefefe;
                        cursor: pointer;
                      }
                    }
                    & > div:last-child {
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-between;
                      span {
                        font-size: 14px;
                        line-height: 36px;
                        color: #fefefe;
                        margin-left: 8px;
                        color: #92949b;
                      }
                      img {
                        cursor: pointer;
                      }
                    }
                  }
                }

                /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
                &::-webkit-scrollbar {
                  width: 6px;
                  height: 6px;
                  background-color: #505564;
                }

                /*定义滚动条轨道 内阴影+圆角*/
                &::-webkit-scrollbar-track {
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                  border-radius: 10px;
                  background-color: #f5f5f5;
                }

                /*定义滑块 内阴影+圆角*/
                &::-webkit-scrollbar-thumb {
                  border-radius: 10px;
                  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                  background-color: #555;
                }
              }
            }

            div.hx_centerLang {
              width: 125px;
              height: 195px;
              background: url("../assets/image/hs_rb_1.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;
              opacity: 0;
              visibility: hidden;
              font-weight: normal;
              position: absolute;
              top: -150px;
              left: 105px;
              transition: all 0.3s ease 0s;
              img {
                margin-left: 30px;
              }
              span {
                cursor: pointer;
                &:hover {
                  color: #3b7c95;
                }
              }
              .hx_centerLangHover {
                color: #3b7c95;
              }
            }
          }
        }
      }
    }
    .hs_main {
      flex-grow: 1;
      background: #1a1b2e;
      display: flex;
      flex-direction: column;
      .hs_main_money {
        width: 90%;
        height: 364px;
        margin-top: 50px;
        margin-left: 5%;
        margin-right: 5%;
        background: #232436;
        border-radius: 10px;
      }
      .hs_main_game {
      }
    }
    .hs_nav_level {
      display: none;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    position: relative;
    .hs_nav {
      display: none;
      flex-direction: row;
    }
    .hs_nav_level {
      position: relative;
      .hs_nav_level_first {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 10px 30px 0 10px;
        .logo {
          width: 100px;
        }
        .logo_nav {
          color: #fff;
          font-weight: bold;
          img {
            width: 20px;
          }
          span {
            margin-left: 10px;
          }
          margin-left: 20px;
        }
        .hs_nav_last {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          &:hover > .submenu {
          }
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.5s ease 0s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: scale(0, 0);
      transform-origin: right top;
      visibility: hidden;
    }
    .fade-enter-to, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
      opacity: 1;
      transform: scale(1, 1);
      visibility: visible;
    }
    .submenu {
      color: #fff;
      opacity: 1;
      top: 95%;
      visibility: visible;
      background: #1a1b2e none repeat scroll 0 0;
      box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.15);
      display: block;
      right: 20px;
      // opacity: 0;
      padding: 10px 10px 14px;
      position: absolute;
      top: 120%;
      transition: all 0.3s ease 0s;
      // visibility: hidden;
      width: 140px;
      z-index: 999;
      display: flex;
      flex-direction: column;
      li {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        position: relative;
        .hs_message_dot {
          height: 8px;
          width: 8px;
          border-radius: 50%;
          position: absolute;
          background-color: rgb(70, 194, 225);
          right: 20px;

          border-radius: 10px;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          vertical-align: super;
          cursor: pointer;
        }
        & > strong {
          margin-left: 10px;
        }
        &.changeMessage {
          &:hover div.hx_center_message {
            opacity: 1;
            top: 20px;
            visibility: visible;
          }
        }
        &.changeLangue {
          &:hover div.hx_centerLang {
            opacity: 1;
            top: 20px;
            visibility: visible;
          }
        }
        div.hx_center_message {
          z-index: 999;
          width: 350px;
          height: 535px;
          background: url("../assets/image/hs_rb_2.png") no-repeat;
          background-position-y: -10px;
          font-size: 12px;
          line-height: 24px;
          color: #fff;
          opacity: 0;
          visibility: hidden;
          font-weight: normal;
          position: absolute;
          top: 0px;
          left: -230px;
          transition: all 0.3s ease 0s;
          & > div:first-child {
            height: 40px;
            background: #242a3d;
            margin-left: 18px;
            border-radius: 10px 0 0 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
              margin-left: 20px;
              position: relative;
            }
          }
          div.hx_bscroll2 {
            width: 332px;
            margin-left: 18px;
            padding: 0 5px;
          }
          div.hx_bscroll {
            width: 332px;
            height: 482px;
            margin-left: 18px;
            overflow-y: scroll;
            ul {
              display: flex;
              flex-direction: column;
              padding: 0 15px;
              li {
                height: 88px;
                border-bottom: 1px solid #1d1e31;
                & > div:first-child {
                  margin-top: 10px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  strong {
                    width: 36px;
                    height: 18px;
                    font-size: 12px;
                    line-height: 18px;
                    color: #1d1e31;

                    border-radius: 3px;
                    text-align: center;
                    margin-left: 5px;
                  }
                  span {
                    color: #fefefe;
                    cursor: pointer;
                  }
                }
                & > div:last-child {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                  span {
                    font-size: 12px;
                    line-height: 36px;
                    color: #fefefe;
                    margin-left: 8px;
                    color: #92949b;
                  }
                  img {
                    cursor: pointer;
                  }
                }
              }
            }

            /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
            &::-webkit-scrollbar {
              width: 6px;
              height: 6px;
              background-color: #505564;
            }

            /*定义滚动条轨道 内阴影+圆角*/
            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              border-radius: 10px;
              background-color: #f5f5f5;
            }

            /*定义滑块 内阴影+圆角*/
            &::-webkit-scrollbar-thumb {
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              background-color: #555;
            }
          }
        }

        div.hx_centerLang {
          width: 125px;
          height: 195px;
          background: url("../assets/image/hs_rb_1.png") no-repeat;
          background-position-y: -10px;
          font-size: 14px;
          line-height: 24px;
          color: #fff;
          opacity: 0;
          visibility: hidden;
          font-weight: normal;
          position: absolute;
          top: 0px;
          left: -145px;
          transition: all 0.3s ease 0s;
          img {
            margin-left: 30px;
          }
          span {
            cursor: pointer;
            &:hover {
              color: #3b7c95;
            }
          }
          .hx_centerLangHover {
            color: #3b7c95;
          }
        }
      }
    }
  }
}
</style>



