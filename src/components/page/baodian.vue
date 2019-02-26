<template>
    <div class="baodian">
            <div class="hs_main_left">
                <div class="hs_main_left_nav">
                    <div :class="{hs_main_left_nav_hover:!bSelect1}" >
                        <span @click="bSelect1 = false">{{$t('currentBetting')}}</span>
                        <i></i>
                    </div>
                    <div :class="{hs_main_left_nav_hover:bSelect1}">
                        <span @click="bSelect1 = true">{{$t('gameHistory')}}</span>
                        <i></i>
                    </div>
                </div>
                <div class="hs_main_left_main"   v-if="bSelect1">
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
 
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>
                            <tr>
                                <td>hd*****jfjj</td>
                                <td>100.00</td>
                                <td>1.00x</td>
                                <td>500.0000</td>
                            </tr>                                                                                                                                            
                        </tbody>
                    </table>
                    <div>
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
                    </div>
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
                              <tr :key="index">
                                <td>{{temp.name}}</td>
                                <td>{{temp.bets}}</td>
                                
                                <td>{{temp.realmultiple==0?'-':temp.realmultiple}}</td>
                                <td>{{temp.profit}}+{{temp.profit==0?'-':temp.profit}}</td>
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
                                <strong style="color:#46c1e0">859.4568.Coins</strong>
                            </div>
                        </div>
                        <div class="echart1">
                            
                        </div>
                        <div class="echart1s" v-if="BCountdown==1" >
                            <span>{{$t('nextRoundIn')}}...</span>
                            <span>{{Countdown}}</span>
                        </div>
                        <div class="echart1s" v-else-if="BCountdown==2" >
                            <span style="color:#20A53D;font-size:36px">1+++{{Countdown}}</span>
                        </div>
                        <div class="echart1s" v-else-if="BCountdown==3" >
                            <span style="color:#FF3737;font-size:36px;">{{$t('Crashed')}}{{Countdown}}</span>
                        </div>                                                
                    </div>
                    <div class="hs_main_right_top_right">
                        <div class="hs_main_right_top_right_nav">
                            <div class="hs_main_right_top_right_hover">
                                <span>CHH</span>
                                <i></i>
                            </div>
                            <div id="oGameRule">
                                <span>{{$t('OnsiteCurrency')}}</span>
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
                                      <el-button  :disabled="Bbets" :style="{background:Bbets?'#fab6b6':'#3cb7d6'}" type="primary" @click="handleBets()">{{$t('ConfirmTheBet')}}</el-button>
                                    </el-form-item>
                                  </el-form>
                                </dd>
                                <dt class="hs_main_right_top_right_main_3">CHH{{$t('balance')}}：<span style="color:#3cb7d6">12.00</span><img src="../../assets/image/hs_help.png" alt=""></dt>
                                <dd class="hs_main_right_top_right_main_4">*1EOS=1CHH</dd>
                            </dl>
                            <div class="button">
                                <el-button @click="handleBets2()">{{$t('recharge')}}CHH</el-button>
                                <el-button disabled="disabled" style="background:#4f505e">{{$t('withdraw')}}</el-button>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div class="hs_main_right_botom">
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
                        <div class="hs_main_right_botom_nav_d" id="hs_main_right_botom_nav_d" style="margin-top:22px;" v-if="!bSelect2">
                            <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="1000">
                            </el-pagination>
                        </div>
                    </div>
                    <table  :style="{display:!bSelect2?'block':'none'}" >
                        <thead>
                            <tr>
                                <th>{{$t('BetOnTime')}}</th>
                                <th>{{$t('BetAmount')}}</th>
                                <th>{{$t('CalculateMultiples')}}</th>
                                <th>{{$t('profit')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                           <template v-for="(temp,index) in selfPlayData">
                              <tr :key="index">
                               <td>
                                 <span v-if="temp.log_time!==0">
                                    {{temp.log_time|dateServer}}
                                 </span>
                                </td>
                                <td style="color:#40abc7">{{temp.bets}}</td>
                                <td>{{temp.real_multiple}}x</td>
                            
                                <td style="color:#3aa526">{{temp.user_profit}}</td>                                
                              </tr>
                            </template>                           
                                                      
                        </tbody>
                    </table>
                    <div class="echart2"  :style="{display:bSelect2?'block':'none'}">
                    </div>
                </div>
            </div>        
    </div>
</template>

<script>
import Vue from "vue";
import VueSocketio from "vue-socket.io";
import socketio from "socket.io-client";
import Eos from "eosjs";
import { mapGetters, mapActions } from "vuex";
Vue.use(VueSocketio, socketio("ws://192.168.2.109:9999"));
import "../../config/deploy";
import {
  httpRuleLastrule,
  httpPostPour,
  httpGetUserTest,
  httpGetUserTestcrash
} from "../../service/http";
import echarts from "echarts";
import ecStat from "echarts-stat";
import { ENODATA } from "constants";
import { formatDate } from "../../config/date";
export default {
  data() {
    var checkMultiple = (rule, value, callback) => {
      console.log(this.OgameConfig)
      if (!value) {
        return callback(new Error("倍数必须存在"));
      } else if (value < this.OgameConfig.minMultiple) {
        return callback(new Error("倍数必须大于最小结算倍数"));
      } else if (value > this.OgameConfig.maxMultiple) {
        return callback(new Error("倍数必须小于最大结算倍数"));
      } else {
        callback();
      }
    };

    return {
      oGameRule: {},
      bSelect1: true,
      bSelect2: true,
      bSelect3: true,
      BgameLog: true,
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
      playerData: [], //玩家下注信息
      selfPlayData: [],
      Apointer: [],
      OgameConfig: {
        game_id: 1,
        currencyName: null,
        rechargeRatio: null,
        minMultiple: null,
        maxMultiple: null,
        minBets: 0,
        maxBets: 0,
        playerCountMax: null,
        reward: null,
        escape: null
      },
      ruleForm: {},
      rules: {
        Multiple: [{ validator: checkMultiple, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapGetters(["account"])
  },
  methods: {
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
      switch (val) {
        case "min":
          this.bets = this.OgameConfig.minBets;
          break;
        case "max":
          this.bets = this.OgameConfig.maxBets;
          break;
        default:
          this.bets *= val;
          break;
      }
    },
    /**
     * 确认下注确认 下注
     */
    handleBets() {
      let data = {
        bets: this.bets,
        multiple: this.multiple
      };
      this.$socket.emit("pour", data);
      console.log(data);
      this.Bbets = true;
      // httpPostPour(this.bets, this.multiple).then(res => {
      //   console.log(res);
      // });

      // httpGetUserTestcrash().then(res => {
      //   console.log(res.data)
      // });
      // console.log(data);
      // this.$socket.emit("pour", data);
      // this.$socket.on("pour", msg => {
      //   console.log("收到消息" + msg);
      // });
    },
    handleBets2() {
      // httpGetUserTest().then(res => {
      //   console.log(res.data);
      // });
      var account = this.account;
      console.log(account);
      const eosOptions = {
        broadcast: true,
        chainId:
          "3670d2e3d104ed6d78f49fc4c5be79ba768e8900517cb845e3f1ab4d9c5a7e46"
      };
      //获取EOS instance
      const eos = scatter.eos(network, Eos, eosOptions, "http");
      window.eos = eos;
      console.log(eos);
      const requiredFields = {
        accounts: [network]
      };
      const options = {
        authorization: [`${account.name}@${account.authority}`]
      };

      //
      const amount = "1.0000 EOS";
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
          "1.0000 EOS",
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
            console.log(res);
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    /**
     * 画折线图
     */
    drawLine2(x, z) {
      var a = [[0, 1.0], [(x[0] - 0) / 2, (x[1] - 1.0) / 2], [x[0], x[1]]];
      var myRegression = ecStat.regression("exponential", a);
      myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
      });
      var num = myRegression.points[myRegression.points.length - 1][0];
      var max = myRegression.points[myRegression.points.length - 1][1];
      if (num < 9) {
        for (var i = 0; i < parseInt(9 - num); i++) {
          myRegression.points.push([parseInt(num) + i + 2]);
        }
      }
      myRegression.points.shift();
      myRegression.points.unshift([0, 1.0]);
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
          name: "销量",
          max: null,
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
            data: this.Apointer,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 10 // 0.1的线条是非常细的了
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
          name: "销量",
          // max: 1.9,
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
                  width: 10 // 0.1的线条是非常细的了
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
      this.gameLogData.forEach(v => {
        y1.push(v.bets_sm);
        y2.push(v.multiple);
        x.push(formatDate(v.start_time * 1000));
      });
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
      this.drawLine([0, 0], false);
      this.BCountdown = 1;
      this.BgameLog = true;
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
        if (max > 1.9) {
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
      if (data.type == "waiting") {
        this.xData.length = 0;
        this.yData.length = 0;
        this.drawLine([0, 0], false);
        this.xx.clear();
        var str = "等待开奖";
        this.Countdown = str;
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
      if (this.BgameLog) {
        this.$socket.emit("gameLog");
        this.$socket.emit("myGameLog");
        this.$socket.emit("gameConfig");
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
      this.playerData = data.playerData;
      if (data.playerData[0]) {
        console.log(data.playerData[0]["profit"]);
      }
    },
    /**
    玩家历史记录
     */
    myGameLog(data) {
      this.selfPlayData = data.myGameLog;
    },
    /**
     * 得到爆点历史记录
     */
    gameLog(data) {
      this.gameLogData = data.gameLogData;
      this.drawLineRow();
    },
    /**
     * 得到游戏信息
     */
    gameConfig(data) {
      this.OgameConfig = JSON.parse(data.data.config);
      this.OgameConfig.game_id = data.data.game_id;
      console.log(this.OgameConfig);
    }
  },
  updated() {
    this.pleaseInput = this.$t("pleaseInput");
  },
  mounted() {
    this._httpRuleLastrule(1, 1);
    this.$socket.emit("gameLog");
    this.$socket.emit("myGameLog");
    this.myChart2 = echarts.init(document.querySelector(".echart2"));
    this.drawLineRow();
    this.myChart1 = echarts.init(document.querySelector(".echart1"));

    window.onresize = () => {
      this.myChart2.resize();
      this.myChart1.resize();
    };
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
        .echart1 {
          width: 100%;
          height: calc(100%);
        }
        .echart1s {
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
              letter-spacing: 5px;
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
          line-height: 39px;
        }
      }
      .echart2 {
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
          .echart1 {
            width: 100%;
            height: calc(100%);
          }
          .echart1s {
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
                letter-spacing: 5px;
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
            line-height: 39px;
          }
        }
        .echart2 {
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
          .echart1 {
            width: 100%;
            height: calc(100%);
          }
          .echart1s {
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
                letter-spacing: 5px;
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
            line-height: 39px;
          }
        }
        .echart2 {
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
</style>