<template>
  <div class="dash">
    <div class="box">
      <div class="left">
        <img class="img" src="../../assets/image/u388.png" alt="">
        <div class="title">
          <p>您好，张令清<span>医务处&nbsp; |&nbsp; 安全科科长</span></p>
          <p>以我们的热心、关心、耐心，让病人舒心、放心、安心</p>
        </div>
      </div>
      <div class="right">
        <div class="dashRow">
          <el-card class="dashRowItem" shadow="always">
            <p class="dashRowItemTitle">部门员工</p>
            {{personnel}}
          </el-card>
          <el-card class="dashRowItem" shadow="always">
            <p class="dashRowItemTitle">需审批的事件</p>
            {{ApprovalRequired}}
          </el-card>
          <el-card class="dashRowItem" shadow="always">
            <p class="dashRowItemTitle">需调查的事件</p>
            {{NeedInvestigation}}
          </el-card>
          <el-card class="dashRowItem last " shadow="always">
            <p class="dashRowItemTitle">进程中事件</p>
            {{InProgress}}
          </el-card>
        </div>

      </div>
    </div>
    <div class="box1">
      <div class="dashRow">
        <el-card class="dashRowItem" shadow="always">
          {{createData}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u267.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增投诉</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{retreiveData}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u274.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增纠纷</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{updateData}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u281.png" alt="">
          </p>
          <p class="dashRowItemTitle">今日新增不良</p>
        </el-card>
        <el-card class="dashRowItem" shadow="always">
          {{deleteData}}
          <p class="dashRowItemKey">
            <img src="../../assets/image/u285.png" alt="">
          </p>
          <p class="dashRowItemTitle">进程中事件</p>
        </el-card>
      </div>
    </div>
    <div class="box2">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="bg">
            <div class="left">
              <div class="tit">
                <span>进行中的事件</span>
                <span>全部事件</span>
              </div>
              <div class="cent">
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cent">
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="cent">
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="con">
                  <div class="con_info">
                    <div class="info">
                      <div class="info_detail">
                        <p>投诉人：薛大刚</p>
                        <p><span>●</span>调查中</p>
                      </div>
                      <div class="info_detail">
                        <p>截止日期：2020-11-22 00:00 </p>
                        <p><i class="fa fa-user-circle" aria-hidden="true"></i></p>
                      </div>
                      <div class="info_detail">
                        <p>事件性质：投诉</p>
                        <p>患者：薛小刚</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bg">
            <div class="tit">风险指数</div>
            <div class="dashRow">
              <div class="dashRowGraph">
                <radar-chart></radar-chart>
              </div>
              <div class="last dashRow">
                <el-card class="dashRowItem" shadow="always">
                <p class="dashRowItemTitle"><span class="person">●</span>个人</p>
                {{person}}
              </el-card>
              <el-card class="dashRowItem" shadow="always">
                <p class="dashRowItemTitle"><span class="depart">●</span>部门</p>
                {{depart}}
              </el-card>
              <el-card class="dashRowItem" shadow="always">
                <p class="dashRowItemTitle"><span class="system">●</span>系统</p>
                {{system}}
              </el-card>
              </div>
              
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


    <!-- <div class="dashRow">
      <div class="dashRowMiddle">
        <line-chart></line-chart>
      </div>
    </div> -->
    <!-- <div class="dashRow">
      <div class="dashRowGraph">
        <radar-chart></radar-chart>
      </div>
      <div class="dashRowGraph">
        <pie-chart></pie-chart>
      </div>
      <div class="dashRowGraph">
        <bar-chart></bar-chart>
      </div>
    </div> -->

    <!-- <div class="dashRow">
      <swiper-img class="dashRowSwiper"></swiper-img>
      <todo-list class="dashRowTodo"></todo-list>
      <cool-clock class="dashRowClock"></cool-clock>
    </div> -->

    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
  // 引入css
  import './css/index.css'
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator'
  import LineChart from './components/LineChart.vue'
  import RadarChart from './components/RadarChart.vue'
  import PieChart from './components/PieChart.vue'
  import BarChart from './components/BarChart.vue'
  import SwiperImg from './components/SwiperImg.vue'
  import TodoList from './components/TodoList.vue'
  import CoolClock from './components/CoolClock.vue'

  @Component({
    components: {
      LineChart,
      RadarChart,
      PieChart,
      BarChart,
      SwiperImg,
      TodoList,
      CoolClock
    }
  })
  export default class DashBoard extends Vue {
    // box1里面的值
    createData: string = "26"
    retreiveData: string = "15"
    updateData: string = "32"
    deleteData: string = "50"
    chartLine: any
    // box里面的值
    personnel: string = "56"
    ApprovalRequired: string = "0"
    NeedInvestigation: string = "8"
    InProgress: string = "23"
    // box2里面的内容
    person:string='0'
    depart:string='3'
    system:string='26'
  }
</script>

<style lang="less" scoped>
  .dash {
    width: 100%;
    // border: 2px solid blue;
    // height: 100%;
    background: linear-gradient(#fff, #f9f9f9);
    /* 标准的语法 */
    // display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px auto;
    font-size: 1.5rem;
    padding: 20px 10px;

    &Row {
      width: 100%;
      margin-bottom: 40px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      // border: 2px solid red;

      &Item {
        width: 24%;
        text-align: left;
        line-height: 40px;
        border-radius: 10px;
        background-color: white;
        // box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        // border-color: rgba(0, 0, 0, .05);

        &Title {
          color: rgb(113, 125, 126)
        }

        &Key {
          width: 60px;
          height: 60px;
          float: right;
          border-radius: 50px;
          background: #f0f1fd;
          text-align: center;
          line-height: 70px;
          // -webkit-transform: rotate(-30deg); 
          transition: width 0.2s, height 0.2s;
          -moz-transition: width 0.2s, height 0.2s, -moz-transform 0.2s;
          /* Firefox 4 */
          -webkit-transition: width 0.2s, height 0.2s, -webkit-transform 0.2s;
          /* Safari and Chrome */
          -o-transition: width 0.2s, height 0.2s, -o-transform 0.2s;
          /* Opera */
        }
      }

      &Swiper {
        width: 35%;
        margin: 20px 0;
      }

      &Todo {
        width: 30%;
        margin: 20px 0;
      }

      &Clock {
        width: 30%;
        margin: 20px 0;
      }

      &Middle {
        width: 100%;
        background-color: white;
        padding: 15px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        border-color: rgba(0, 0, 0, .05);
      }

      &Graph {
        width: 100%;
        padding: 10px;
        // background-color: white;
        // box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
        border-color: rgba(0, 0, 0, .5);
        text-align: center;
      }

      @media screen and (max-width:1000px) {
        &Item {
          width: 100%;
          margin: 10px 0;
        }

        &Graph {
          width: 100%;
          margin: 5px;
        }

        &Swiper {
          width: 100%;
        }

        &Todo {
          width: 100%;
        }

        &Clock {
          width: 100%;
        }
      }
    }

    &Block {
      flex: 0 0 50px;
    }
  }
</style>