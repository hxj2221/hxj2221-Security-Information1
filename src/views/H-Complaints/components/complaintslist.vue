<template>
  <div>
    <div class="comlist">
      <div class="Complaints-header clearfix">
        <span>投诉事件</span>
        <slot name="buttom">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            class="addcomplaint"
            >新增</el-button
          >
        </slot>
        <slot name="export">
          <el-button
            icon="iconfont el-icon-hospital-passwordexport"
            class="exportcomplaint"
            >导出</el-button
          >
        </slot>
      </div>
      <div class="Complaints-screen clearfix">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="投诉人">
            <el-input
              v-model="complaintname"
              placeholder="请输入投诉人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="投诉方式">
            <el-select v-model="complainttype" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件状态">
            <el-select v-model="complaintstatus" placeholder="请选择">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="投诉日期">
            <el-date-picker
              style="width: 200%"
              v-model="complaintsate"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          icon="el-icon-search"
          class="search"
          @click="clicks"
        ></el-button>
      </div>
      <slot name="table"> </slot>

      <div class="Complaints-footer">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Tables from "../components/Tables";
import service from "@/service/index";
// const qs = require('qs')
import qss from "@/service/qs";
export default {
  components: { Tables },

  data() {
    return {
      complaintname: "",
      complainttype: "",
      complaintstatus: "",
      complaintsate: "",
      form: {},
      options: [
        {
          value: "1",
          label: "2",
        },
      ],
      option: [
        {
          value: "1",
          label: "2",
        },
      ],
    };
  },

  methods: {
    // 搜索事件
    clicks() {
      // 将标准时间转为年月日
      var stime = new Date(this.complaintsate[0]);
      var StartTime =
        stime.getFullYear() +
        "-" +
        (stime.getMonth() + 1) +
        "-" +
        stime.getDate();
      var etime = new Date(this.complaintsate[1]);
      var EndTime =
        etime.getFullYear() +
        "-" +
        (etime.getMonth() + 1) +
        "-" +
        etime.getDate();
    },
  },
  created() {
    let params = {
      data: Object,
      page: 1,
      limit: 9,
      id: 8,//当前登录人id
    };
    // service.ComList({},1,9,8).then((res) => {
    //     console.log(res);
    //   });
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
