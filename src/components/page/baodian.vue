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
                                <th>{{$t('periods')}}</th>
                                <th>{{$t('result')}}</th>
                                <th>Hash</th>
                                <th>{{$t('verify')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>190015</td>
                                <td>2.00x</td>
                                <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                       {{$t('verify')}}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>190015</td>
                                <td>2.00x</td>
                                <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                        {{$t('verify')}}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>190015</td>
                                <td>2.00x</td>
                                <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                         {{$t('verify')}}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>190015</td>
                                <td>2.00x</td>
                                <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                        {{$t('verify')}}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>190015</td>
                                <td>2.00x</td>
                                <td>
                                    <a href="" style="text-decoration:underline;color:#fefefe">121314141515151512</a>
                                </td>
                                <td>
                                    <a href="" class="hs_main_left_maina">
                                        {{$t('verify')}}
                                    </a>
                                </td>
                            </tr>                                                                                                                                                                                                                              
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
                        <div class="echart1s">
                            <span>Next Round in...</span>
                            <span>{{Countdown}}</span>
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
                                <dd class="hs_main_right_top_right_main_2">
                                    <input type="text" :placeholder="pleaseInput" v-model.number="multiple" style="color:#fff">
                                    <strong>X</strong>
                                    <button disabled="BbetsIsClick" @click="handleBets()">{{$t('ConfirmTheBet')}}</button>
                                </dd>
                                <dt class="hs_main_right_top_right_main_3">CHH{{$t('balance')}}：<span style="color:#3cb7d6">12.00</span><img src="../../assets/image/hs_help.png" alt=""></dt>
                                <dd class="hs_main_right_top_right_main_4">*1EOS=1CHH</dd>
                            </dl>
                            <div class="button">
                                <button disabled="disabled">{{$t('recharge')}}CHH</button>
                                <button disabled="disabled" style="background:#4f505e">{{$t('withdraw')}}</button>
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
                    <table  :style="{display:!bSelect2?'block':'none'}">
                        <thead>
                            <tr>
                                <th>{{$t('BetOnTime')}}</th>
                                <th>{{$t('BetAmount')}}</th>
                                <th>{{$t('CalculateMultiples')}}</th>
                                <th>{{$t('CalculateMultiples')}}</th>
                                <th>{{$t('profit')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>
                            <tr>
                                <td>2019-01-15 15:30</td>
                                <td style="color:#40abc7">100.00</td>
                                <td>1.00x</td>
                                <td>有</td>
                                <td style="color:#3aa526">500.0000</td>
                            </tr>                                                        
                        </tbody>
                    </table>
                    <div class="echart2"  :style="{display:bSelect2?'block':'none'}">

                    </div>
                </div>
            </div>        
    </div>
</template>

<script>
import { httpRuleLastrule } from "../../service/http";
import echarts from "echarts";
import { ENODATA } from "constants";
export default {
  data() {
    return {
      oGameRule: {},
      bSelect1: true,
      bSelect2: true,
      bSelect3: true,
      pleaseInput: this.$t("pleaseInput"),
      Countdown: "",
      bets: 0.1,
      multiple: 0,
      BbetsIsClick: true
    };
  },
  methods: {
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
          this.bets = 0.1;
          break;
        case "max":
          this.bets = 0;
          break;
        default:
          this.bets *= val;
          break;
      }
    },
    /**
     * 确认下注
     */
    handleBets() {
      let data = {
        bets: this.bets,
        multiple: this.multiple
      };
      this.$socket.emit("message", data);
    }
  },
  /**
   * 接受信息
   */
  sockets: {
    bets(val) {
      if (val.type == "bets") {
        var str = "游戏下注时间，倒计时：" + val.times;
        //   console.log(str);
        this.Countdown = val.times + "s";
        this.$socket.emit(val.type);
      } else {
        ///   console.log(str.type);
        this.$socket.emit(val.type);
      }
    },
    /**
     * 游戏开始以后获得游戏数据
     */
    crash(data) {
      if (data.type == "crash") {
        var str = `游戏开始，X轴${data.crashTime}，Y轴${data.crashCrash}`;
        this.Countdown = "游戏开始";
        console.log(data.data);
        var startTime = 1;
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else if (data.type == "over") {
        this.$socket.emit(data.type);
      }
    },
    /**
     * 等待开奖
     */
    waiting(data) {
      if (data.type == "waiting") {
        var str = "等待开奖";
        this.Countdown = str;
        //  $("#socket_conn").html(str);
        var startTime = 1;
        var startTimeFun = setInterval(() => {
          if (startTime <= 0.1) {
            clearInterval(startTimeFun);
          } else {
            this.$socket.emit(data.type);
            startTime = (startTime - 0.9).toFixed(1);
          }
        }, 100);
      } else {
        console.log(data.type);
        this.$socket.emit(data.type);
      }
    },
    /**
     * 爆炸了
     */
    over(data) {
      if (data.type == "over") {
        var str = `爆炸啦，爆点为${data.crashCrash}`;
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
      } else if (data.type == "start") {
        this.$socket.emit(data.type);
      }
    },
    /**
     * 开始
     */
    start(data) {
      if (data.type == "start") {
        console.log("开始");
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
    }
  },
  updated() {
    this.pleaseInput = this.$t("pleaseInput");
  },
  mounted() {
    console.log(this.pleaseInput);
    this._httpRuleLastrule(1, 1);
    this.myChart2 = echarts.init(document.querySelector(".echart2"));
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
          data: [
            "17:21",
            "",
            "17:22",
            "",
            "17:23",
            "",
            "17:24",
            "",
            "17:25",
            "",
            "17:26",
            "",
            "17:27",
            "",
            "17:28",
            "",
            "17:29",
            "",
            "17:30"
          ],
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

          data: [
            60,
            70,
            80,
            114,
            56,
            66,
            77,
            118,
            20,
            60,
            70,
            80,
            114,
            56,
            66,
            77,
            118,
            20,
            100
          ],

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
          data: [3, 2, 1, 5, 6, 7, 9, 18, 9, 1, 3, 2, 1, 5, 6, 7, 9, 18, 9, 1],
          color: ["#f66b3b"],
          smooth: true //这句就是让曲线变平滑的
        }
      ]
    });
    this.myChart1 = echarts.init(document.querySelector(".echart1"));
    this.myChart1.setOption({
      // backgroundColor: "rgba(43, 62, 75, 0.5)", //背景颜色
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "line" // 默认为直线，可选为：'line' | 'shadow'
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
          data: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s"],
          // boundaryGap: ["5%", "5%"],
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
          }
        }
      ],
      series: [
        {
          name: "Coins",
          type: "line",
          data: [0, 0.5, 1.1, 1.3, 1.4, 1.44, 1.5, 1.61, 1.66, 1.9],
          itemStyle: {
            normal: {
              lineStyle: {
                width: 6 // 0.1的线条是非常细的了
              }
            }
          },
          symbol: "none", //这句就是去掉点的
          smooth: true, //这句就是让曲线变平滑的
          color: ["#1ba8e8"]
        }
      ]
    });
    window.onresize = () => {
      this.myChart2.resize();
      this.myChart1.resize();
      //myChart1.resize();    //若有多个图表变动，可多写
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
    flex-direction: column;
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
    flex-direction: column;
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
</style>