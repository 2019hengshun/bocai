<template>
    <div class="baodian">
            <div class="hs_main_left">
                <div class="hs_main_left_nav">
                    <div :class="{hs_main_left_nav_hover:!bSelect1}" >
                        <span @click="bSelect1 = false">{{$t('currentBetting')}}9998</span>
                        <i></i>
                    </div>
                    <div :class="{hs_main_left_nav_hover:bSelect1}">
                        <span @click="bSelect1 = true">{{$t('gameHistory')}}</span>
                        <i></i>
                    </div>
                </div>
                <div class="hs_main_left_main"   v-if="bSelect1" style="overflow: hidden;">
                    <table style="table-layout: fixed;">
                        <thead>
                            <tr>
                                <th style="width:20%">multiple</th>
                                <th >{{$t('hash')}}</th>
                                <th style="width:20%">{{$t('verify')}}</th>
                            </tr>

                        </thead>
                        <tbody>
                         <template v-for="(temp,index) in gameLogData1">
                              <tr :key="index">
                                <td>{{temp.multiple}}</td>
                                <!-- <td :title="temp.head_block_id" style="width:300px;font-size: 12px;word-wrap:break-word;word-break:break-all;line-height: 22px;">{{temp.head_block_id}}</td> -->
                                <td :title="temp.head_block_id" style="width:300px;font-size: 12px;line-height: 22px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{temp.head_block_id}}</td>
                                           <td>
                                    <a href="" class="hs_main_left_maina">
                                       {{$t('verify')}}
                                    </a>
                                </td> 
                                <!-- <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
             -->
                              </tr>
                            </template>                                                                                                                                           
                        </tbody>
                    </table>
                    <!-- <div>
                        <div class="hs_main_left_main_bottom">
                            <div>
                                <img src="../../assets/image/hs_person.png" alt="">
                                <span>12</span>
                            </div>
                            <div>
                                <img src="../../assets/image/hs_my.png" alt="">
                                <span>66.6000</span>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="hs_main_left_main"   v-if="!bSelect1">
                    <table>
                        <thead>
                            <tr>
                                <th>{{$t('player')}}</th>
                                <th>{{$t('BetAmount')}}</th>
                                <th>{{$t('CalculateMultiples')}}</th>
                                <th>{{$t('profit')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                           <template v-for="(temp,index) in playerData">
                              <tr :key="index" :style="{color:temp.profit>0?'green':temp.profit==0?'#fff':'red',fontWeight:'bold'}">
                                <td>{{temp.name}}</td>
                                <td>{{temp.bets}}</td>
                                
                                <td>{{temp.realmultiple==0?'-':temp.realmultiple}}</td>
                                <td>{{temp.profit}}</td>
                                <!-- <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                       {{$t('verify')}}
                                    </a>
                                </td> -->
                              </tr>
                            </template> 
                        </tbody>                        
                    </table>
                    <div>
                        <div class="hs_main_left_main_bottom">
                            <div>
                                <img src="../../assets/image/hs_person.png" alt="">
                                <span>{{playerData.length}}</span>
                            </div>
                            <div>
                                <img src="../../assets/image/hs_my.png" alt="">
                                <span>{{BetAmount}}</span>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="hs_main_right">
                <div class="hs_main_right_top">
                    <div class="hs_main_right_top_left">
                        <div>
                            <img src="../../assets/image/left.png" alt="">
                            <span>{{$t('realTime')}}</span>
                            <div>
                                <span>{{$t('MaximumWagerAmount')}}：</span>
                                <strong style="color:#46c1e0">{{currentbonusPool}}.Coins</strong>
                            </div>
                        </div>
                        <div class="echart4">
                            
                        </div>
                        <div class="echart4s" v-if="BCountdown==1" >
                            <span>{{$t('nextRoundIn')}}...</span>
                            <span>{{Countdown}}</span>
                        </div>
                        <div class="echart4s" v-else-if="BCountdown==2" >
                            <span style="color:#20A53D;font-size:36px">{{Countdown}}</span>
                        </div>
                        <div class="echart4s" v-else-if="BCountdown==3" >
                            <!-- <span style="color:#FF3737;font-size:36px;">{{Countdown}}</span> -->
                            <span style="color:#FF3737;font-size:36px;" v-if="Countdown=='等待游戏开始'">{{Countdown}}</span>
                            <span style="color:#fff;font-size:36px;"  v-if="Countdown!=='等待游戏开始'">{{$t('Crashed')}}{{Countdown}}</span>
                        </div>                                                
                    </div>
                    <div class="hs_main_right_top_right">
                        <div class="hs_main_right_top_right_nav">
                            <div  :class="{hs_main_right_top_right_hover:!bSelect4}">
                                <span  @click="bSelect4 = false,portsChange('game')">CHH</span>
                                <i></i>
                            </div>
                            <div id="oGameRule"   :class="{hs_main_right_top_right_hover:bSelect4}">
                                <span  @click="bSelect4 = true,portsChange('games')">{{$t('OnsiteCurrency')}}</span>
                                 <el-popover
                                   placement="bottom"
                                   :title="oGameRule.title"
                                   width="200"
                                   trigger="hover"
                                   :content="oGameRule.content">
                                  <img src="../../assets/image/hs_help.png" slot="reference" alt="" >
                                 </el-popover>                                
                                <i></i>
                            </div>
                        </div>    
                        <div class="hs_main_right_top_right_main">
                            <dl>
                                <dt>{{$t('BaseBet')}}</dt>
                                <dd class="hs_main_right_top_right_main_1">
                                    <span @click="calculate('min')">最小</span>
                                    <span @click="calculate(2)">x2</span>
                                    <span @click="calculate(4)">x4</span>
                                    <span @click="calculate(10)">x10</span>
                                </dd>
                                <dd class="hs_main_right_top_right_main_1" style="margin:0">
                                    <span @click="calculate(20)">x20</span>
                                    <span @click="calculate('max')">最大</span>
                                    <input  type="text" :placeholder="pleaseInput" v-model.number="bets" style="color:#fff">
                                    <strong>Coins</strong>
                                </dd>
                                <dt>{{$t('MultipleSettlement')}}</dt>
                                <!-- <dd class="hs_main_right_top_right_main_2">
                                    <input type="text" :placeholder="pleaseInput" v-model.number="multiple" style="color:#fff">
                                    <strong>X</strong>
                                    <el-button :disabled="Bbets" :style="{background:Bbets?'#fab6b6':'#3cb7d6'}"   @click="handleBets()">{{$t('ConfirmTheBet')}}</el-button>
                                </dd> -->
                                <dd class="hs_main_right_top_right_main_2">
                                  <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-form-inline"
                                    style="display:flex;flex-direction:row;align-items:center"
                                  >
                                    <el-form-item id="formInput" style="margin-bottom:0px" prop="Multiple">
                                      <el-input  v-model.number="ruleForm.Multiple" placeholder="0"  style="color:#fff"></el-input>
                                    </el-form-item>
                                    <strong style="margin:0">X</strong>
                                    <el-form-item style="margin-bottom:0px;flex-grow:1;display:flex;flex-direction:row;justify-content:flex-end;margin-right: 0px" >
                                      <el-button  :disabled="Bbets"   v-show="Nbets==0" :style="{background:Bbets?'#fab6b6':'#3cb7d6'}" type="primary" @click="handleBets('ruleForm')">{{$t('ConfirmTheBet')}}</el-button>
                                    </el-form-item>
                                  </el-form>
                                  <el-button   :disabled="OgameConfig.escape!=1"  :style="{background:OgameConfig.escape!=1?'#fab6b6':'#3cb7d6'}"  v-show="Nbets==2&&isbets" @click="handleescape">{{$t('escape')}}</el-button>
                                </dd>
                                <dt class="hs_main_right_top_right_main_3">CHH{{$t('balance')}}：<span style="color:#3cb7d6">{{balance}}</span><img src="../../assets/image/hs_help.png" alt=""></dt>
                                <dd class="hs_main_right_top_right_main_4">*1EOS={{OgameConfig.rechargeRatio}}CHH</dd>
                            </dl>
                            <div class="button">
                                <el-button @click="recharges">{{$t('recharge')}}CHH</el-button>
                                <el-button @click="withdraws"  style="background:#4f505e">{{$t('withdraw')}}</el-button>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div class="hs_main_right_botom" id="input">
                    <div class="hs_main_right_botom_nav">
                        <div class=" hs_main_right_botom_nav1" @click="bSelect2 = true" :class="{hs_main_right_botom_nav_hover:bSelect2}">
                                <span>{{$t('BreakingPointHistory')}}</span>
                                <i></i>
                        </div>
                        <div class="hs_main_right_botom_nav1" @click="bSelect2 = false" :class="{hs_main_right_botom_nav_hover:!bSelect2}">
                                <span>{{$t('MyBettingHistory')}}</span>
                                <i></i>
                        </div>
                        <div class="hs_main_right_botom_nav_d"  v-if="bSelect2">
                            <span>Vol&nbsp;:&nbsp;</span>
                            <span style="color:#e64937">245.66M</span>
                            <span class="hs_main_right_botom_nav_d_line">丨</span>
                            <span>avg(@)&nbsp;:&nbsp;</span>
                            <span style="color:#3fa4c0">5.67x</span>
                        </div>
                        <div class="hs_main_right_botom_nav_d" id="hs_main_right_botom_nav_d" style="margin-top:22px;" v-if="!bSelect2" >
                            <el-pagination
                                v-show="pageCount>0"
                                background
                                layout="prev, pager, next"
                                 @current-change="handleCurrentChange"
                                :total="pageCount">
                            </el-pagination>
                        </div>
                    </div>
                    <table  :style="{display:!bSelect2?'block':'none'}"  style="table-layout: fixed;width:100%;" >
                        <thead>
                            <tr>
                                <th style="width:25%">{{$t('BetOnTime')}}</th>
                                <th style="width:38%">{{$t('BetAmount')}}</th>
                                <th style="width:38%">{{$t('CalculateMultiples')}}</th>
                                <th style="width:25%">{{$t('profit')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                           <template v-for="(temp,index) in selfPlayData">
                              <tr :key="index">
                               <td>
                                 <span v-if="temp.log_time!==0">
                                    <!-- {{temp.log_time|dateServer}} -->
                                    {{temp.log_time}}
                                 </span>
                                </td>
                                <td style="color:#40abc7">{{temp.bets}}</td>
                                <td>{{temp.real_multiple}}x</td>
                            
                                <td style="color:#3aa526">{{temp.user_profit}}</td>                                
                              </tr>
                            </template>                           
                                                      
                        </tbody>
                    </table>
                    <div class="echart3"  :style="{display:bSelect2?'block':'none'}">
                    </div>
                </div>
            </div> 
            <el-dialog
               title="购买CHH"
               :visible.sync="dialogVisible"
               width="360px"
               id="buyDialog"
               >
               <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="110px" class="demo-ruleForm">
                 <el-form-item label="购买CHH数量:" prop="chh" >
                   <el-input type="text" v-model.number="ruleForm2.chh" autocomplete="off" ></el-input>
                 </el-form-item>
                <el-form-item label=""  >
                   ={{currentEos}}EOS
                 </el-form-item>                 
                
                 <el-form-item>
                   <el-button type="primary" @click="handleBets2()">立即购买</el-button>
                 </el-form-item>
               </el-form>      
               <el-row style="text-align:center">
                  您的EOS余额：{{EOSMONEY}}
                </el-row>         
            </el-dialog> 
            <el-dialog
               title="提现CHH"
               :visible.sync="dialogVisible1"
               width="360px"
               id="buyDialog"
               >
               <el-form :model="ruleForm3" status-icon :rules="rules" ref="ruleForm3" label-width="110px" class="demo-ruleForm">
                 <el-form-item label="提现CHH数量:" prop="chh" >
                   <el-input type="text" v-model.number="ruleForm3.chh" autocomplete="off" ></el-input>
                 </el-form-item>
                <!-- <el-form-item label=""  >
                   ={{currentEos}}EOS
                 </el-form-item>                  -->
                
                 <el-form-item>
                   <el-button type="primary" @click="handleBets3()">立即提现</el-button>
                 </el-form-item>
               </el-form>      
               <el-row style="text-align:center">
                  您的EOS余额：{{EOSMONEY}}
                </el-row>         
            </el-dialog>                   
    </div>
</template>

<script>
import Vue from "vue";
import VueSocketio from "vue-socket.io";
import socketio from "socket.io-client";
import Eos from "eosjs";
import { mapGetters, mapActions } from "vuex";
//Vue.use(VueSocketio, socketio("ws://192.168.2.110:9999"));
Vue.use(VueSocketio, socketio("ws://192.168.2.110:9998"));
import "../../config/deploy";
import {
  httpRuleLastrule,
  httpPostPour,
  httpGetUserTest,
  httpGetUserTestcrash,
  httptransChanges
} from "../../service/http";
import echarts from "echarts";
import ecStat from "echarts-stat";
import { ENODATA } from "constants";
import { formatDate } from "../../config/date";
import { dateServer } from "../../config/dateFilter";
export default {
  data() {
    var checkMultiple = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("倍数必须存在"));
      } else if (value < this.OgameConfig.minMultiple) {
        console.log(this.ruleForm.Multiple);
        this.ruleForm.Multiple = this.OgameConfig.minMultiple;
        // return callback(new Error("倍数必须大于最小结算倍数"));
      } else if (value > this.OgameConfig.maxMultiple) {
        console.log(this.ruleForm.Multiple);
        this.ruleForm.Multiple = this.OgameConfig.maxMultiple;
        // return callback(new Error("倍数必须小于最大结算倍数"));
      } else {
        callback();
      }
    };
    var checkChh = (rule, value, callback) => {
      if (typeof value == "number") {
        let Anum = String(value).split(".");
        var amount = false;
        if (Anum.length > 1) {
          Anum[1].length > 3 ? (amount = false) : (amount = true);
        } else {
          amount = true;
        }
        if (amount) {
          callback();
        } else {
          return callback(new Error("购买的EOS币最多有四位小数"));
        }
      } else {
        return callback(new Error("请输入数字"));
      }
    };
    return {
      oGameRule: {},
      bSelect1: false,
      bSelect2: true,
      bSelect3: true,
      bSelect4: true,
      BgameLog: true,
      BgameLogs: true,
      dialogVisible: false,
      dialogVisible1: false,
      Bbets: false,
      pleaseInput: this.$t("pleaseInput"),
      Countdown: "",
      bets: 0.1,
      multiple: 0,
      BbetsIsClick: true,
      BCountdown: 0,
      xData: [],
      yData: [],
      xx: new Set(),
      gameLogData: [],
      gameLogData1: [],
      playerData: [], //玩家下注信息
      selfPlayData: [],
      Apointer: [],
      OgameConfig: {
        game_id: 1,
        currencyName: null,
        rechargeRatio: 1,
        minMultiple: null,
        maxMultiple: null,
        minBets: 0,
        maxBets: 0,
        playerCountMax: null,
        reward: null,
        escape: null
      },
      ruleForm: {
        Multiple: 10
      },
      ruleForm2: {},
      ruleForm3: {},
      rules: {
        Multiple: [{ validator: checkMultiple, trigger: "blur" }],
        chh: [{ validator: checkChh, trigger: "blur" }]
      },
      balance: 0,
      Nbets: 0,
      isbets: false,
      EOSMONEY: null,
      currentbonusPool: null,
      pageCount: 0,
      npage: 1
    };
  },
  computed: {
    ...mapGetters(["account", "isLogin", "port"]),
    currentEos() {
      console.log(this.ruleForm2.chh);
      if (this.ruleForm2.chh) {
        var value = this.ruleForm2.chh / this.OgameConfig.rechargeRatio;
        return value;
      } else {
        return 0;
      }
    },
    count() {
      return this.isLogin;
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
    BetAmount() {
      if (this.playerData.length > 0) {
        var num = 0;
        this.playerData.forEach(v => {
          num += v.bets;
        });
        return num;
      } else {
        return 0;
      }
    }
  },
  methods: {
    portsChange(val) {
      this.changePort(9998);
      var route = this.$route.path.split("/")[2];
      console.log("9998这是" + val);
      if (val == "game" && route != "game") {
        this.$router.push("/index/game");
      } else if (val == "games" && route != "games") {
        this.$router.push("/index/games");
      }
      this.$socket.emit("currentCrashData", { current: true });
      this.$socket.emit("gameLog");
      this.$socket.emit("gameConfig");
      if (this.isLogin) {
        this.$socket.emit("myGameLog", { page: 1 });
        this.$socket.emit("getBalance");
      }
    },
    changePorts(val) {
      this.portsChange(val);
      console.log(val);
    },
    ...mapActions(["changePort"]),
    /**
     * 立即提现
     */
    handleBets3() {},
    handleCurrentChange(val) {
      this.npage = val;
      console.log(val);
      this.$socket.emit("myGameLog", { page: this.npage });
    },
    /**
     * 表单验证
     */
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 獲取對於 語種的最後一個游戲規則
     */
    _httpRuleLastrule(language_id, game_id) {
      httpRuleLastrule(language_id, game_id).then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.oGameRule = data.data;
        } else {
          this.$message({
            message: data.msg,
            type: "error"
          });
        }
      });
    },
    /**
     * 基础下注倍数
     */
    calculate(val) {
      let num = this.bets;
      switch (val) {
        case "min":
          num = this.OgameConfig.minBets;
          break;
        case "max":
          num = this.OgameConfig.maxBets;
          break;
        default:
          console.log(val);
          num *= val;
          break;
      }
      let nums = num * val;
      if (typeof val == "number") {
        if (nums > this.OgameConfig.maxBets) {
          num = this.OgameConfig.maxBets;
        } else if (nums < this.OgameConfig.minBets) {
          num = this.OgameConfig.minBets;
        }
      }

      this.bets = num;
    },
    /**
     * 确认下注确认 下注
     */
    handleBets(formName) {
      if (this.isLogin) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let data = {
              bets: this.bets,
              multiple: this.ruleForm.Multiple
            };
            this.Nbets = 1;
            this.$socket.emit("pour", data);
            this.Bbets = true;
            this.isbets = true;
          } else {
            return false;
          }
        });
      } else {
        this.$message({
          message: "not  login",
          type: "error"
        });
      }
    },
    handleescape() {
      this.$socket.emit("escape");
    },
    withdraws() {
      this.dialogVisible1 = true;
      this.ruleForm3 = {};
    },
    recharges() {
      // this.resetForm("ruleForm2");
      this.dialogVisible = true;
      const eosOptions = {
        broadcast: true,
        chainId:
          "3670d2e3d104ed6d78f49fc4c5be79ba768e8900517cb845e3f1ab4d9c5a7e46"
      };
      //获取EOS instance
      const eos = scatter.eos(network, Eos, eosOptions, "http");
      window.eos = eos;
      eos
        .getCurrencyBalance({
          code: "eosio.token",
          account: "eosio",
          symbol: "DEV"
        })
        .then(result => {
          console.log(result);
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleBets3() {
      this.$refs["ruleForm3"].validate(valid => {
        if (valid) {
          httptransChanges(this.ruleForm3.chh).then(res => {
            let data = res.data;
            console.log(data);
            if (data.code == 200) {
              this.$message({
                message: data.msg,
                type: "success"
              });
              this.dialogVisible1 = false;
            } else {
              this.$message({
                message: data.msg,
                type: "error"
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    handleBets2() {
      this.$refs["ruleForm2"].validate(valid => {
        if (valid) {
          var account = this.account;
          const requiredFields = {
            accounts: [network]
          };
          const options = {
            authorization: [`${account.name}@${account.authority}`]
          };

          //
          console.log(this.currentEos);
          let Anum = String(this.currentEos).split(".");
          var amount = "";
          if (Anum.length > 1) {
            Anum[1].padStart(4, "0");
            amount = Anum[0] + "." + Anum[1].padEnd(4, "0") + " EOS";
          } else {
            amount = Anum[0] + ".0000 EOS";
          }
          // let amount = "1.0000 EOS";
          // eos.contract('deposit',{requiredFields}).then(contract => {
          //     contract.transfer(account.name, "test2", amount, 'buycandles|40',options).then(trx => {
          //         console.log("2.获取签名后的交易，前端需要将此数据传入后台", trx);
          //     }).catch(e => {
          //         console.log("error", e);
          //         if (e.toString().includes("overdrawn balance")) {
          //             alert("No money, go back to Getting Started and refill")
          //         }
          //     })
          // });
          const transactionOptions = {
            authorization: [`${account.name}@${account.authority}`]
          };

          eos
            .transfer(
              account.name,
              "deposit",
              amount,
              "memo",
              transactionOptions
            )
            .then(trx => {
              // That's it!
              console.log(`Transaction ID: ${trx.transaction_id}`);
              var res1 = eos.getCurrencyBalance(
                "eosio.token",
                "eoscrashgame",
                "EOS"
              );
              console.log("现在奖池里有");
              res1.then(res => {
                this.$message({
                  message: "充值成功,您现在有" + res[0],
                  type: "success"
                });
                this.dialogVisible = false;
              });
            })
            .catch(error => {
              this.$message({
                message: "充值失败",
                type: "error"
              });
            });
        } else {
          return false;
        }
      });
    },
    /**
     * 画折线图
     */
    drawLine2(x, z) {
      var a = [[0, 1.0], [(x[0] - 0) / 2, (x[1] - 1.0) / 2], [x[0], x[1]]];
      // var myRegression = ecStat.regression("exponential", a);
      // myRegression.points.sort(function(a, b) {
      //   return a[0] - b[0];
      // });
      // var num = myRegression.points[myRegression.points.length - 1][0];
      // var max = myRegression.points[myRegression.points.length - 1][1];
      // if (num < 9) {
      //   for (var i = 0; i < parseInt(9 - num); i++) {
      //     myRegression.points.push([parseInt(num) + i + 2]);
      //   }
      // }
      // myRegression.points.shift();
      // myRegression.points.unshift([0, 1.0]);
      var currentPointer = JSON.parse(JSON.stringify(this.Apointer));
      // if (currentPointer[0] != 0) {
      //   console.log(currentPointer[0]);
      //   currentPointer.unshift([0, 1.0]);
      // }
      var maxX = this.Apointer[this.Apointer.length - 1][0] + 2;
      var maxY = this.Apointer[this.Apointer.length - 1][1];
      this.myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        /**
        grid 为直角坐标系内绘图网格，可以设置 x y x2 y2 等值。这在控制图表摆放位置上，起了重要的作用
         */
        grid: {
          //间距距离左右下
          //top: '50',
          bottom: "45",
          left: "5%",
          right: "5%",
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            // data: ["0s", "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
            // data: x,
            boundaryGap: false,
            max: maxX,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6c6c74"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: ["#6c6c74"],
                width: 1,
                type: "solid"
              }
            }
          }
        ],

        yAxis: {
          //纵轴标尺固定
          type: "value",
          name: "爆点",
          max: maxY,
          min: 1.0,
          boundaryGap: false,
          splitNumber: 8,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#6c6c74"],
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#6c6c74"
            }
          }
        },
        series: [
          {
            name: "line",
            type: "line",
            showSymbol: false,
            smooth: true,
            data: currentPointer,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 8 // 0.1的线条是非常细的了
                }
              }
            },
            color: ["#20A53D"]
          }
        ]
      });

      // myRegression.points.shift();
      // myRegression.points.unshift([0, 1.0]);
    },
    drawLine(x, z) {
      // var a = [[0, 1.0], [(x[0] - 0) / 2, (x[1] - 1.0) / 2], [x[0], x[1]]];
      // /**
      //  * 这边写一个公式 来解决数据的曲线
      //  * ecstat公式
      //  */
      // var myRegression = ecStat.regression("exponential", a);
      // // var myRegression = ecStat.regression("exponential", x);
      // myRegression.points.sort(function(a, b) {
      //   return a[0] - b[0];
      // });

      var currentPointer = JSON.parse(JSON.stringify(this.Apointer));
      // if (currentPointer[0] != 0) {
      //   currentPointer.unshift([0, 1.0]);
      // }
      if (currentPointer.length > 0) {
        var num = currentPointer[currentPointer.length - 1][0];
        // var max = myRegression.points[myRegression.points.length - 1][1];
        if (num < 9) {
          for (var i = 0; i < parseInt(9 - num); i++) {
            currentPointer.push([parseInt(num) + i + 2]);
          }
        }
      }
      // myRegression.points.shift();
      // myRegression.points.unshift([0, 1.0]);
      this.myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        /**
        grid 为直角坐标系内绘图网格，可以设置 x y x2 y2 等值。这在控制图表摆放位置上，起了重要的作用
         */
        grid: {
          //间距距离左右下
          //top: '50',
          bottom: "45",
          left: "5%",
          right: "5%",
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            // data: ["0s", "1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"],
            // data: x,
            max: 10,
            boundaryGap: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6c6c74"
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: ["red"],
                width: 1,
                type: "solid"
              }
            }
          }
        ],

        yAxis: {
          //纵轴标尺固定
          type: "value",
          name: "爆点",
          max: 2.59,
          min: 1.0,
          boundaryGap: false,
          splitNumber: 8,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#6c6c74"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#6c6c74"],
              width: 1,
              type: "solid"
            }
          }
        },

        series: [
          {
            name: "line",
            type: "line",
            showSymbol: false,
            smooth: true,
            data: currentPointer,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 8 // 0.1的线条是非常细的了
                }
              }
            },
            color: ["#20A53D"]
          }
        ]
      });

      // myRegression.points.shift();
      // myRegression.points.unshift([0, 1.0]);
    },
    drawLineRow() {
      let x = [],
        y1 = [],
        y2 = [];
      if (this.gameLogData.length > 0) {
        this.gameLogData.forEach(v => {
          y1.push(v.bets_sm);
          y2.push(v.multiple);
          x.push(formatDate(v.start_time * 1000));
        });
      }
      this.myChart2.setOption({
        // backgroundColor: "rgba(43, 62, 75, 0.5)", //背景颜色
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          //间距距离左右下
          //top: '50',
          bottom: "45",
          left: "1%",
          right: "1%",
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: x.reverse(),
            boundaryGap: ["5%", "5%"],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6c6c74"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",

            axisLabel: {
              formatter: "{value} °C"
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6c6c74"
              }
            },
            name: "Coins",
            nameTextStyle: {
              color: "#efefef"
            }
          },
          {
            type: "value",

            axisLabel: {
              formatter: "{value} °C"
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6c6c74"
              }
            },
            name: "multiple",
            nameTextStyle: {
              color: "#efefef"
            },
            splitLine: {
              show: false //去掉网格线
            }
          }
        ],
        series: [
          {
            name: "Coins",
            type: "bar",
            barWidth: 15,

            data: y1.reverse(),
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#68e7f9"
                  },
                  {
                    offset: 1,
                    color: "#0e9ee5"
                  }
                ])
              }
            },
            color: ["#1ba8e8"]
          },
          {
            name: "multiple",
            type: "line",
            yAxisIndex: 1,
            data: y2.reverse(),
            color: ["#f66b3b"],
            smooth: true //这句就是让曲线变平滑的
          }
        ]
      });
    }
  },
  /**
   * 接受信息
   */
  sockets: {
    connect() {
      console.log("socket connected");
    },
    bettingInformation(data) {
      console.log(data);
    },
    getType(data) {
      console.log(data.type, this.$socket);
      this.$socket.emit(data.type);
    },
    bets(val) {
      this.Bbets = false;
      if (this.Nbets != 1) {
        this.Nbets = 0;
      }

      this.drawLine([0, 0], false);
      this.BCountdown = 1;
      this.BgameLog = true;
      this.BgameLogs = true;
      this.Apointer.length = 0;
      if (val.type == "bets") {
        var str = "游戏下注时间，倒计时：" + val.times;
        //   console.log(str);
        this.Countdown = val.times + "s";
        //  this.$socket.emit(val.type);
      } else {
        ///   console.log(str.type);
        //  this.$socket.emit(val.type);
      }
    },
    /**
     * 游戏开始以后获得游戏数据
     */
    crash(data) {
      this.Bbets = true;

      this.BCountdown = 2;
      if (data.type == "crash") {
        this.xData.length = 0;
        this.yData.length = 0;
        var startTime = 1;
        var max = data.data[1];
        this.Countdown = max;
        var OyAxis;
        this.Apointer.push([data.data[0], Number(data.data[1])]);
        if (max > 2.59) {
          OyAxis = true;
          this.drawLine2(data.data, OyAxis);
        } else {
          OyAxis = false;
          this.drawLine(data.data, OyAxis);
        }
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            //  this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else if (data.type == "over") {
        //  this.$socket.emit(data.type);
      }
    },
    /**
     * 等待开奖
     */
    waiting(data) {
      console.log("等待开奖9998");
      this.Nbets = 2;
      if (data.type == "waiting") {
        this.xData.length = 0;
        this.yData.length = 0;
        this.drawLine([0, 0], false);
        this.xx.clear();
        var str = "等待开奖";
        // this.Countdown = str;
        //  $("#socket_conn").html(str);
        var startTime = 1;
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            //   this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else {
        //   this.$socket.emit(data.type);
      }
    },
    /**
     * 爆炸了
     */
    over(data) {
      this.Nbets = 0;
      this.isbets = false;
      this.playerData = [];

      this.BCountdown = 3;
      this.Countdown = data.crashCrash;
      if (data.type == "over") {
        // $("#socket_conn").html(str);
        var startTime = 1;
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            //   this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else if (data.type == "start") {
        this.$socket.emit(data.type);
      }
    },
    /**
     * 开始
     */
    start(data) {
      this.playerData = [];
      if (this.BgameLog) {
        this.$socket.emit("gameLog");
        if (this.npage == 1) {
          this.$socket.emit("myGameLog", { page: 1 });
        }
        this.$socket.emit("gameConfig");
        this.$socket.emit("getBalance");
        this.BgameLog = false;
      }
      if (data.type == "start") {
        var str = data.msg;
        this.Countdown = str;
        // $("#socket_conn").html(str);
        var startTime = 1;
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else if (data.type == "bets") {
        this.$socket.emit(data.type);
      }
    },
    /**
     *玩家投注信息
     */
    bettingInformation(data) {
      if (this.BgameLogs) {
        this.playerData = [];
        this.BgameLogs = false;
      }
      this.playerData = data.playerData;
      this.currentbonusPool = data.bonusPool;
      if (data.playerData[0]) {
        console.log(data.playerData[0]["profit"]);
      }
    },
    /**
    玩家历史记录
     */
    myGameLog(data) {
      console.log(1);
      if (data.code == 200) {
        this.selfPlayData = JSON.parse(JSON.stringify(data.myGameLog));
        if (this.selfPlayData.length > 0) {
          this.selfPlayData.forEach(v => {
            v["log_time"] = dateServer(v["log_time"] * 1000);
          });
        }
        this.pageCount = data.pageCount;
      }
    },
    /**
     * 得到爆点历史记录
     */
    gameLog(data) {
      if (data.data) {
        this.gameLogData = data.data;
        this.gameLogData1 = this.gameLogData.slice(10);
      } else {
        this.gameLogData = [];
        this.gameLogData1 = [];
      }

      this.drawLineRow();
    },
    /**
     * 得到游戏信息
     */
    gameConfig(data) {
      this.OgameConfig = data.data.config;
      this.OgameConfig.game_id = data.data.game_id;

      this.currentbonusPool = data.data.config.bonusPool;
    },
    /**
     * getBalance得到用户余额
     */
    getBalance(data) {
      if (data.code == 200) {
        this.balance = data.data.balance;
      }
    },
    /**
     * escape 逃跑
     */
    escape(data) {
      this.Nbets = 1;
    },
    /**
     *
     */
    currentCrashData(data) {
      if (data.code == 200) {
        this.Apointer = JSON.parse(JSON.stringify(data.crashData));
      }
    }
  },
  updated() {
    console.log();
    this.pleaseInput = this.$t("pleaseInput");
  },
  mounted() {
    this.portsChange("games");
    this._httpRuleLastrule(1, 1);
    this.myChart2 = echarts.init(document.querySelector(".echart3"));
    this.myChart1 = echarts.init(document.querySelector(".echart4"));
    window.onresize = () => {
      this.myChart2.resize();
      this.myChart1.resize();
    };
  },
  beforeDestroy() {
    if (this.$socket) {
      this.$socket.close();
    }
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 1600px) {
  .baodian {
    display: flex;
    flex-direction: row;
  }
  .hs_main_left {
    width: 420px;
    margin: 50px;
    background: #232436;
    display: flex;
    flex-direction: column;
    .hs_main_left_nav {
      font-size: 18px;
      line-height: 50px;
      color: #fefefe;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #242a3d;
      height: 50px;
      cursor: pointer;
      .hs_main_left_nav_hover {
        position: relative;
        color: #46c1e0;
        i {
          width: 0;
          height: 0;
          border-width: 0 8px 8px;
          border-style: solid;
          border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
          position: absolute;
          left: 44%;
          bottom: 0;
        }
      }
    }
    .hs_main_left_main {
      flex-grow: 1;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      color: #fefefe;
      table {
        width: 100%;
        text-align: center;
        th {
          font-size: 16px;
          line-height: 36px;
          color: #94959a;
          border-bottom: 1px solid #1a1b2e;
        }
        td {
          font-size: 14px;
          line-height: 36px;
        }
      }
      & > div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .hs_main_left_main_bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-bottom: 20px;
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 8px 9px;
            background: #343546;
            img {
              width: 30px;
              height: 24px;
              margin-right: 10px;
            }
            span {
              flex-grow: 1;
              text-align: center;
              padding-left: 10px;
              border-left: 1px solid #1a1b2e;
            }
          }
          & > :first-child {
            width: 140px;
            height: 42px;
          }
          & > :last-child {
            width: 190px;
            height: 42px;
          }
        }
      }
      .hs_main_left_maina {
        font-size: 14px;
        line-height: 42px;
        padding: 4px 10px;
        color: #3b7c95;
        border: 1px solid #3b7c95;
      }
    }
  }
  .hs_main_right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .hs_main_right_top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .hs_main_right_top_left {
        width: 640px;
        height: 550px;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        background: #232436;
        position: relative;
        & > :first-child {
          height: 55px;
          background: #242a3d;
          border-radius: 10px 10px 0 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          img {
            margin-left: 20px;
          }
          & > span {
            font-size: 20px;
            line-height: 55px;
            color: #fefefe;
            margin-left: 18px;
          }
          & > div {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding-right: 20px;
            font-size: 16px;
            line-height: 50px;
            color: #7f8189;
          }
        }
        .echart4 {
          width: 100%;
          height: calc(100%);
        }
        .echart4s {
          width: 100%;
          position: absolute;
          top: 50%;
          display: flex;
          flex-direction: column;
          font-weight: bold;
          color: #fff;
          font-size: 26px;
          line-height: 44px;
          text-align: center;
          align-items: center;
          transform: translateY(-50%);
        }
      }
      .hs_main_right_top_right {
        width: 320px;
        height: 550px;
        margin-top: 50px;
        margin-right: 45px;
        background: #232436;
        .hs_main_right_top_right_nav {
          font-size: 18px;
          line-height: 50px;
          color: #fefefe;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          background: #242a3d;
          height: 50px;
          & > div {
            position: relative;
            cursor: pointer;
          }
          img {
            position: absolute;
            right: -40px;
            top: 16px;
          }
          .hs_main_right_top_right_hover {
            position: relative;
            color: #46c1e0;
            i {
              width: 0;
              height: 0;
              border-width: 0 8px 8px;
              border-style: solid;
              border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
              position: absolute;
              left: 44%;
              bottom: 0;
            }
          }
        }
        .hs_main_right_top_right_main {
          dl {
            display: flex;
            flex-direction: column;
            color: #a8a8ad;
            padding: 0 18px;
            margin: 0 0 16px;
            dt {
              font-size: 16px;
              line-height: 16px;
              margin: 25px 0;
              color: #fefefe;
              border-left: 2px solid #d3d3d7;
              padding-left: 7px;
            }
            .hs_main_right_top_right_main_1 {
              font-size: 14px;
              line-height: 28px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 24px;
              span {
                display: inline-block;
                width: 48px;
                height: 28px;
                border: 1px solid #dbdbde;
                text-align: center;
                cursor: pointer;
              }
              input {
                text-align: center;
                width: 60px;
                color: #65666f;
                -web-kit-appearance: none;

                -moz-appearance: none;
                border: none;
                outline: 0;
                background-color: transparent;
                border-bottom: 1px solid #65666f;
              }
              strong {
                position: relative;
                left: -15px;
                color: #e0e0e2;
              }
            }
            .hs_main_right_top_right_main_2 {
              input {
                text-align: center;
                width: 100px;
                color: #65666f;
                -web-kit-appearance: none;

                -moz-appearance: none;
                border: none;
                outline: 0;
                background-color: transparent;
                border-bottom: 1px solid #65666f;
              }
              #formInput input {
                text-align: center;
                width: 100px;
                color: #65666f;
                -web-kit-appearance: none;

                -moz-appearance: none;
                border: none;
                outline: 0;
                background-color: transparent;
                border-bottom: 1px solid #65666f;
              }
              button {
                width: 108px;
                height: 34px;
                font-size: 16px;
                line-height: 34px;
                color: #fff;
                margin: 0;
                padding: 0;
                background: #3cb7d6;
                border: none;
                border-radius: 5px;
                float: right;
              }
              strong {
                color: #fff;
                margin-left: 3px;
              }
            }
            .hs_main_right_top_right_main_3 {
              position: relative;
              img {
                position: absolute;
                right: 0px;
                top: 0px;
              }
            }
            .hs_main_right_top_right_main_4 {
              font-size: 16px;
              line-height: 16px;
              // letter-spacing: 5px;
            }
          }
          .button {
            padding: 0 23px;
            button {
              width: 100%;
              height: 40x;
              font-size: 16px;
              line-height: 40px;
              color: #fff;
              margin: 0;
              margin-bottom: 24px;
              padding: 0;
              background: #3cb7d6;
              border: none;
              border-radius: 5px;
            }
          }
        }
      }
    }
    .hs_main_right_botom {
      width: 1020px;
      height: 380px;
      margin-top: 50px;
      background: #232436;
      .hs_main_right_botom_nav {
        font-size: 18px;
        line-height: 50px;
        color: #fefefe;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        background: #242a3d;
        height: 50px;
        .hs_main_right_botom_nav1 {
          width: 240px;
          text-align: center;
          cursor: pointer;
        }
        .hs_main_right_botom_nav_hover {
          position: relative;
          color: #46c1e0;
          i {
            width: 0;
            height: 0;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
            position: absolute;
            left: 44%;
            bottom: 0;
          }
        }
        .hs_main_right_botom_nav_d {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          .hs_main_right_botom_nav_d_line {
            color: #1a1b2e;
          }
          margin-right: 20px;
        }
      }
      table {
        width: 100%;
        text-align: center;
        color: #fefefe;
        padding: 0 10px;
        th {
          font-size: 16px;
          line-height: 36px;
          color: #94959a;
          border-bottom: 1px solid #1a1b2e;
          width: 23%;
        }
        td {
          font-size: 16px;
          line-height: 26px;
        }
      }
      .echart3 {
        width: 100%;
        height: calc(100% - 50px);
        margin-top: 15px;
      }
    }
  }
}
@media (max-width: 1599px) and (min-width: 577px) {
  .baodian {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px;
    .hs_main_left {
      width: 100%;
      height: 500px;
      background: #232436;
      display: flex;
      flex-direction: column;
      .hs_main_left_nav {
        font-size: 18px;
        line-height: 50px;
        color: #fefefe;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #242a3d;
        height: 50px;
        cursor: pointer;
        .hs_main_left_nav_hover {
          position: relative;
          color: #46c1e0;
          i {
            width: 0;
            height: 0;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
            position: absolute;
            left: 44%;
            bottom: 0;
          }
        }
      }
      .hs_main_left_main {
        flex-grow: 1;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        color: #fefefe;
        table {
          width: 100%;
          text-align: center;
          th {
            font-size: 16px;
            line-height: 36px;
            color: #94959a;
            border-bottom: 1px solid #1a1b2e;
          }
          td {
            font-size: 14px;
            line-height: 36px;
          }
        }
        & > div {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .hs_main_left_main_bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 20px;
            div {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 8px 9px;
              background: #343546;
              img {
                width: 30px;
                height: 24px;
                margin-right: 10px;
              }
              span {
                flex-grow: 1;
                text-align: center;
                padding-left: 10px;
                border-left: 1px solid #1a1b2e;
              }
            }
            & > :first-child {
              width: 140px;
              height: 42px;
            }
            & > :last-child {
              width: 190px;
              height: 42px;
            }
          }
        }
        .hs_main_left_maina {
          font-size: 14px;
          line-height: 42px;
          padding: 4px 10px;
          color: #3b7c95;
          border: 1px solid #3b7c95;
        }
      }
    }
    .hs_main_right {
      display: flex;
      flex-direction: column;
      width: 100%;
      .hs_main_right_top {
        display: flex;
        flex-direction: column;
        .hs_main_right_top_left {
          width: 100%;
          height: 550px;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          background: #232436;
          position: relative;
          & > :first-child {
            height: 55px;
            background: #242a3d;
            border-radius: 10px 10px 0 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
              margin-left: 20px;
            }
            & > span {
              font-size: 20px;
              line-height: 55px;
              color: #fefefe;
              margin-left: 18px;
            }
            & > div {
              flex-grow: 1;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              padding-right: 20px;
              font-size: 16px;
              line-height: 50px;
              color: #7f8189;
            }
          }
          .echart4 {
            width: 100%;
            height: calc(100%);
          }
          .echart4s {
            width: 100%;
            position: absolute;
            top: 50%;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            color: #fff;
            font-size: 26px;
            line-height: 44px;
            text-align: center;
            align-items: center;
            transform: translateY(-50%);
          }
        }
        .hs_main_right_top_right {
          height: 550px;
          margin-top: 50px;
          background: #232436;
          .hs_main_right_top_right_nav {
            font-size: 18px;
            line-height: 50px;
            color: #fefefe;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background: #242a3d;
            height: 50px;
            & > div {
              position: relative;
              cursor: pointer;
            }
            img {
              position: absolute;
              right: -40px;
              top: 16px;
            }
            .hs_main_right_top_right_hover {
              position: relative;
              color: #46c1e0;
              i {
                width: 0;
                height: 0;
                border-width: 0 8px 8px;
                border-style: solid;
                border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
                position: absolute;
                left: 44%;
                bottom: 0;
              }
            }
          }
          .hs_main_right_top_right_main {
            dl {
              display: flex;
              flex-direction: column;
              color: #a8a8ad;
              padding: 0 18px;
              margin: 0 0 16px;
              dt {
                font-size: 16px;
                line-height: 16px;
                margin: 25px 0;
                color: #fefefe;
                border-left: 2px solid #d3d3d7;
                padding-left: 7px;
              }
              .hs_main_right_top_right_main_1 {
                font-size: 14px;
                line-height: 28px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 24px;
                span {
                  display: inline-block;
                  width: 48px;
                  height: 28px;
                  border: 1px solid #dbdbde;
                  text-align: center;
                }
                input {
                  text-align: center;
                  width: 60px;
                  color: #65666f;
                  -web-kit-appearance: none;

                  -moz-appearance: none;
                  border: none;
                  outline: 0;
                  background-color: transparent;
                  border-bottom: 1px solid #65666f;
                }
                strong {
                  position: relative;
                  left: -15px;
                  color: #e0e0e2;
                }
              }
              .hs_main_right_top_right_main_2 {
                input {
                  text-align: center;
                  width: 100px;
                  color: #65666f;
                  -web-kit-appearance: none;

                  -moz-appearance: none;
                  border: none;
                  outline: 0;
                  background-color: transparent;
                  border-bottom: 1px solid #65666f;
                }
                button {
                  width: 108px;
                  height: 34px;
                  font-size: 16px;
                  line-height: 34px;
                  color: #fff;
                  margin: 0;
                  padding: 0;
                  background: #3cb7d6;
                  border: none;
                  border-radius: 5px;
                  float: right;
                }
                strong {
                  color: #fff;
                  margin-left: 3px;
                }
              }
              .hs_main_right_top_right_main_3 {
                position: relative;
                img {
                  position: absolute;
                  right: 0px;
                  top: 0px;
                }
              }
              .hs_main_right_top_right_main_4 {
                font-size: 16px;
                line-height: 16px;
                // letter-spacing: 5px;
              }
            }
            .button {
              padding: 0 23px;
              button {
                width: 100%;
                height: 40x;
                font-size: 16px;
                line-height: 40px;
                color: #fff;
                margin: 0;
                margin-bottom: 24px;
                padding: 0;
                background: #3cb7d6;
                border: none;
                border-radius: 5px;
              }
            }
          }
        }
      }
      .hs_main_right_botom {
        width: 100%;
        height: 380px;
        margin-top: 50px;
        background: #232436;
        .hs_main_right_botom_nav {
          font-size: 18px;
          line-height: 50px;
          color: #fefefe;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          background: #242a3d;
          height: 50px;
          position: relative;
          .hs_main_right_botom_nav1 {
            text-align: center;
            cursor: pointer;
          }
          .hs_main_right_botom_nav_hover {
            position: relative;
            color: #46c1e0;
            i {
              width: 0;
              height: 0;
              border-width: 0 8px 8px;
              border-style: solid;
              border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
              position: absolute;
              left: 44%;
              bottom: 0;
            }
          }
          .hs_main_right_botom_nav_d {
            position: absolute;
            top: 40px;
            left: 0px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            margin-left: 20px;

            .hs_main_right_botom_nav_d_line {
              color: #1a1b2e;
            }
            margin-right: 20px;
          }
        }
        table {
          margin-top: 50px;
          text-align: center;
          color: #fefefe;
          padding: 0 10px;
          th {
            font-size: 16px;
            line-height: 36px;
            color: #94959a;
            border-bottom: 1px solid #1a1b2e;
            width: 23%;
          }
          td {
            font-size: 16px;
            line-height: 22px;
          }
        }
        .echart3 {
          width: 100%;
          height: calc(100% - 100px);
          margin-top: 15px;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .baodian {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px;
    .hs_main_left {
      width: 100%;
      height: 500px;
      background: #232436;
      display: flex;
      flex-direction: column;
      .hs_main_left_nav {
        font-size: 14px;
        line-height: 50px;
        color: #fefefe;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #242a3d;
        height: 50px;
        cursor: pointer;
        .hs_main_left_nav_hover {
          position: relative;
          color: #46c1e0;
          i {
            width: 0;
            height: 0;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
            position: absolute;
            left: 44%;
            bottom: 0;
          }
        }
      }
      .hs_main_left_main {
        flex-grow: 1;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        color: #fefefe;
        table {
          width: 100%;
          text-align: center;
          th {
            font-size: 12px;
            line-height: 36px;
            color: #94959a;
            border-bottom: 1px solid #1a1b2e;
          }
          td {
            font-size: 12px;
            line-height: 36px;
          }
        }
        & > div {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .hs_main_left_main_bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 20px;
            div {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 8px 9px;
              background: #343546;
              img {
                width: 30px;
                height: 24px;
                margin-right: 10px;
              }
              span {
                flex-grow: 1;
                text-align: center;
                padding-left: 10px;
                border-left: 1px solid #1a1b2e;
              }
            }
            & > :first-child {
              width: 140px;
              height: 42px;
            }
            & > :last-child {
              width: 190px;
              height: 42px;
            }
          }
        }
        .hs_main_left_maina {
          font-size: 12px;
          line-height: 42px;
          padding: 4px 10px;
          color: #3b7c95;
          border: 1px solid #3b7c95;
        }
      }
    }
    .hs_main_right {
      display: flex;
      flex-direction: column;
      width: 100%;
      .hs_main_right_top {
        display: flex;
        flex-direction: column;
        .hs_main_right_top_left {
          width: 100%;
          height: 320px;
          //height:550px;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          background: #232436;
          position: relative;
          & > :first-child {
            height: 55px;
            background: #242a3d;
            border-radius: 10px 10px 0 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            img {
              margin-left: 10px;
            }
            & > span {
              font-size: 14px;
              line-height: 55px;
              color: #fefefe;
              margin-left: 18px;
            }
            & > div {
              flex-grow: 1;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              padding-right: 20px;
              font-size: 16px;
              line-height: 50px;
              color: #7f8189;
            }
          }
          .echart4 {
            width: 100%;
            height: calc(100%);
          }
          .echart4s {
            width: 100%;
            position: absolute;
            top: 50%;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            color: #fff;
            font-size: 26px;
            line-height: 44px;
            text-align: center;
            align-items: center;
            transform: translateY(-50%);
          }
        }
        .hs_main_right_top_right {
          height: 550px;
          margin-top: 10px;
          background: #232436;
          .hs_main_right_top_right_nav {
            font-size: 14px;
            line-height: 50px;
            color: #fefefe;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background: #242a3d;
            height: 50px;
            & > div {
              position: relative;
              cursor: pointer;
            }
            img {
              position: absolute;
              right: -40px;
              top: 16px;
            }
            .hs_main_right_top_right_hover {
              position: relative;
              color: #46c1e0;
              i {
                width: 0;
                height: 0;
                border-width: 0 8px 8px;
                border-style: solid;
                border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
                position: absolute;
                left: 44%;
                bottom: 0;
              }
            }
          }
          .hs_main_right_top_right_main {
            dl {
              display: flex;
              flex-direction: column;
              color: #a8a8ad;
              padding: 0 18px;
              margin: 0 0 16px;
              dt {
                font-size: 16px;
                line-height: 16px;
                margin: 25px 0;
                color: #fefefe;
                border-left: 2px solid #d3d3d7;
                padding-left: 7px;
              }
              .hs_main_right_top_right_main_1 {
                font-size: 14px;
                line-height: 28px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 24px;
                span {
                  display: inline-block;
                  width: 48px;
                  height: 28px;
                  border: 1px solid #dbdbde;
                  text-align: center;
                }
                input {
                  text-align: center;
                  width: 60px;
                  color: #65666f;
                  -web-kit-appearance: none;

                  -moz-appearance: none;
                  border: none;
                  outline: 0;
                  background-color: transparent;
                  border-bottom: 1px solid #65666f;
                }
                strong {
                  position: relative;
                  left: -15px;
                  color: #e0e0e2;
                }
              }
              .hs_main_right_top_right_main_2 {
                input {
                  text-align: center;
                  width: 100px;
                  color: #65666f;
                  -web-kit-appearance: none;

                  -moz-appearance: none;
                  border: none;
                  outline: 0;
                  background-color: transparent;
                  border-bottom: 1px solid #65666f;
                }
                button {
                  width: 108px;
                  height: 34px;
                  font-size: 16px;
                  line-height: 34px;
                  color: #fff;
                  margin: 0;
                  padding: 0;
                  background: #3cb7d6;
                  border: none;
                  border-radius: 5px;
                  float: right;
                }
                strong {
                  color: #fff;
                  margin-left: 3px;
                }
              }
              .hs_main_right_top_right_main_3 {
                position: relative;
                img {
                  position: absolute;
                  right: 0px;
                  top: 0px;
                }
              }
              .hs_main_right_top_right_main_4 {
                font-size: 16px;
                line-height: 16px;
                // letter-spacing: 5px;
              }
            }
            .button {
              padding: 0 23px;
              button {
                width: 100%;
                height: 40x;
                font-size: 16px;
                line-height: 40px;
                color: #fff;
                margin: 0;
                margin-bottom: 24px;
                padding: 0;
                background: #3cb7d6;
                border: none;
                border-radius: 5px;
              }
            }
          }
        }
      }
      .hs_main_right_botom {
        width: 100%;
        // height: 605px;
        height: 405px;
        margin-top: 50px;
        background: #232436;
        .hs_main_right_botom_nav {
          font-size: 12px;
          line-height: 50px;
          color: #fefefe;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          background: #242a3d;
          height: 50px;
          position: relative;
          .hs_main_right_botom_nav1 {
            text-align: center;
            cursor: pointer;
          }
          .hs_main_right_botom_nav_hover {
            position: relative;
            color: #46c1e0;
            i {
              width: 0;
              height: 0;
              border-width: 0 8px 8px;
              border-style: solid;
              border-color: transparent transparent #46c1e0; /*透明 透明  灰*/
              position: absolute;
              left: 44%;
              bottom: 0;
            }
          }
          .hs_main_right_botom_nav_d {
            position: absolute;
            top: 40px;
            left: 0px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .hs_main_right_botom_nav_d_line {
              color: #1a1b2e;
            }
            margin-right: 20px;
          }
        }
        table {
          margin-top: 50px;
          text-align: center;
          color: #fefefe;
          padding: 0 10px;
          th {
            font-size: 12px;
            line-height: 36px;
            color: #94959a;
            border-bottom: 1px solid #1a1b2e;
            width: 23%;
          }
          td {
            font-size: 12px;
            line-height: 22px;
          }
        }
        .echart3 {
          width: 100%;
          height: calc(100% - 100px);
          margin-top: 15px;
        }
      }
    }
  }
}
</style>

<style>
#hs_main_right_botom_nav_d .el-pagination.is-background .el-pager li {
  background-color: transparent;
  border: 1px solid;
}

#main .el-popover {
  background: #303547;
  color: #fff;
  border: none;
  font-size: 14px;
  line-height: 28px;
}
#main .el-popover__title {
  color: #41a6c1;
  font-size: 14px;
  line-height: 26px;
  margin: 0;
}
#main .el-popover--plain {
  padding: 12px 15px;
}
#main .popper__arrow {
  color: #303547;
}
#formInput input {
  text-align: center;
  width: 100px;
  color: #65666f;
  -web-kit-appearance: none;

  -moz-appearance: none;
  border: none;
  outline: 0;
  background-color: transparent;
  border-bottom: 1px solid #65666f;
  color: #fff;
}
#buyDialog .el-dialog__header {
  background: #1a1b2e;
  color: #fff;
  border-radius: 5px 5px 0 0;
}
#buyDialog .el-dialog__body {
  padding-top: 20px;
  background: #1a1b2e;
  border-top: 1px solid #f5f5f5;
  color: #fff;
  border-radius: 0 0 5px 5px;
}

#buyDialog .el-form-item__label {
  color: #fff;
}
#buyDialog .el-dialog__title {
  color: #fff;
}

#buyDialog .el-form-item {
  margin-bottom: 10px;
}
@media (max-width: 576px) {
  #input .el-pagination.is-background .btn-prev {
    min-width: 15px;
  }
  #input .el-pagination.is-background .el-pager li {
    min-width: 20px;
  }
  #input .el-pagination.is-background .btn-next {
    min-width: 15px;
  }
}
</style>