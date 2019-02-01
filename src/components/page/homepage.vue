<template>
    <div class="hs_main_homepage">
          <div class="hs_main_money">
            <div>
              <img src="../../assets/image/left.png" alt="">
              <span>{{$t('Bonuspools')}}</span>
            </div>
            <div class="hs_main_money_bottom">
              <div class="hs_main_money_left">
                <img src="../../assets/image/hs_jj.png" alt="">
                <strong v-if="isLogin">{{Identity.balance}}</strong>
                <span>当前奖金池</span>
              </div>
              <div class="hs_main_game_right">
                <ul>
                  <li>
                    <img src="../../assets/image/hs_wj.png" alt="">
                    <div>
                      <strong>
                        <i></i>
                      </strong>
                     <div></div>
                    </div>

                    <span>{{$t('player')}}</span>
                  </li>
                  <li>
                    <img src="../../assets/image/hs_yx.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>参与游戏</span>
                  </li>
                  <li>
                    <img src="../../assets/image/hs_bt.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>获得代币</span>
                  </li>
                  <li>
                    <img src="../../assets/image/hs_fh.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>持有分红或直接售出</span>
                  </li>                                                      
                </ul>
                <img  class="hs_main_game_line" src="../../assets/image/hs_line.png" alt="">
              </div>
            </div>
          </div>  
          <div class="hs_main_game">
            <div>
              <img src="../../assets/image/left.png" alt="">
              <span>{{$t('games')}}</span>
            </div>
            <div>
              <ul>
                <li v-for="(temp,index) in aGames" :key="index">
                  <img :src="'http://192.168.1.141:3000'+temp.img" alt="" style=" margin-top:40px;">
                  <span >{{temp.name}}</span>
                  <img src="../../assets/image/hs_new.png" class="imgNew" alt="">
                  <i v-if="temp.status==0">即将上架</i>
                </li>
                <!-- <li>
                  <img src="../../assets/image/hs_bz.png" alt="" style=" margin-top:40px;">
                  <span >爆点</span>
                  <img src="../../assets/image/hs_new.png" class="imgNew" alt="">
                </li>
                <li>
                  <img src="../../assets/image/hs_sj.png" alt="" style=" margin-top:58px;">
                  <span >射击</span>                  
                  <i>即将上线</i>
                </li>
                <li>
                  <img src="../../assets/image/hs_sc.png" alt=""  style=" margin-top:86px;">
                  <span style=" margin-top:26px;">T1竞赛</span>                  
                  <i>即将上线</i>                 
                </li> -->
              </ul>
            </div>
          </div>        
    </div>
</template>
<script>
import { httpGetGames } from "../../service/http";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      aGames: []
    };
  },
  computed: {
    ...mapGetters(["Identity", "isLogin"])
  },
  methods: {
    _httpGetGames() {
      httpGetGames().then(res => {
        let data = res.data;
        if (data.code == 200) {
          this.aGames = data.data;
        } else {
          this.$message({
            message: data.msg,
            type: "error"
          });
        }
      });
    }
  },
  mounted() {
    this._httpGetGames();
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 1600px) {
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
          background: url("../../assets/image/hs_bj1.png");
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
@media (max-width: 1599px) and (min-width: 577px) {
  .hs_main_homepage {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 33px;
    .hs_main_money {
      height: 250px;
      background: #232436;
      border-radius: 10px;
      & > :first-child {
        height: 33px;
        background: #242a3d;
        border-radius: 10px 10px 0 0;
        img {
          margin-left: 20px;
        }
        span {
          font-size: 20px;
          line-height: 33px;
          color: #fefefe;
        }
      }
      .hs_main_money_bottom {
        display: flex;
        flex-direction: row;

        .hs_main_money_left {
          width: 200px;
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
          flex-grow: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          ul {
            display: flex;
            flex-direction: row;
            align-items: center;
          
            margin-top: 25px;
            width: 100%;
            li {
              width: 25%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 74px;
              }
              span {
                color: #fff;
                margin-top: 20px;
                margin-bottom: 20px;
              }
            }
          }
          .hs_main_game_line {
            width: 80%;
          }
        }
      }
    }
    .hs_main_game {
      height: 566px;
      margin-top: 50px;
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
            width: 200px;
            height: 340px;
            background: url("../../assets/image/hs_bj1.png");
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fefefe;
            position: relative;
            border-radius: 5px;
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
}
@media (max-width: 576px) {
  .hs_main_homepage {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 13px;
    .hs_main_money {
      background: #232436;
      border-radius: 10px;
      & > :first-child {
        height: 33px;
        background: #242a3d;
        border-radius: 10px 10px 0 0;
        img {
          margin-left: 20px;
        }
        span {
          font-size: 20px;
          line-height: 33px;
          color: #fefefe;
        }
      }
      .hs_main_money_bottom {
        display: flex;
        flex-direction: column;

        .hs_main_money_left {
          margin: 25px 0 25px 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          img {
            margin-top: 15px;
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
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          ul {
            display: flex;
            flex-direction: row;
            // justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 25px;
            width: 100%;

            li {
              width: 50%;
              display: flex;
              flex-direction: column;
              align-items: center;
              img {
                width: 74px;
              }
              span {
                color: #fff;
                margin-top: 20px;
                margin-bottom: 20px;
              }
            }
          }
          .hs_main_game_line {
            display: none;
          }
        }
      }
    }
    .hs_main_game {
      margin-top: 50px;
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
          flex-direction: column;
          padding: 20px;
          li {
            height: 340px;
            background: url("../../assets/image/hs_bj1.png");
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fefefe;
            position: relative;
            border-radius: 5px;
            margin-top: 20px;
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
}
</style>

