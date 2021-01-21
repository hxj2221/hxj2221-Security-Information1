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
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="投诉方式">
            <el-select v-model="complainttype" placeholder="请选择" clearable>
              <el-option
                v-for="item in options"
                :key="item.D_M_ID"
                :label="item.D_M_Name"
                :value="item.D_M_ID"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="事件状态">
            <el-select v-model="complaintstatus" placeholder="请选择" clearable>
              <el-option
                v-for="item in option"
                :key="item.D_M_ID"
                :label="item.D_M_Name"
                :value="item.D_M_ID"
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
      <div class="Complaints-content">
        <el-table
          :data="tableData"
          style="width: 94%; margin-left: 3%; text-align: center"
          :header-cell-style="getRowClass"
        >
          <el-table-column type="index" width="50" label="序号">
          </el-table-column>
          <el-table-column prop="D_I_Number" label="事件编码"></el-table-column>
          <el-table-column prop="C_I_Name" label="投诉人姓名">
          </el-table-column>
          <el-table-column prop="C_I_Gender" label="性别"> </el-table-column>
          <el-table-column prop="C_I_Age" label="年龄"> </el-table-column>
          <el-table-column prop="C_I_Phone" label="手机号码"> </el-table-column>
          <el-table-column prop="D_Name" label="投诉科室"> </el-table-column>
          <el-table-column prop="C_M_Name" label="投诉方式"> </el-table-column>
          <el-table-column prop="Complaint_Time" label="投诉时间">
          </el-table-column>
          <el-table-column prop="Deparment" label="流转部门"> </el-table-column>
          <el-table-column prop="E_S_Name" label="事件状态"> </el-table-column>
          <slot name="column">
            <el-table-column fixed="right" label="操作" width="150%">
              <template slot-scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">医患记录</el-button>
                <el-button type="text" size="small">操作</el-button>
              </template>
            </el-table-column>
          </slot>
        </el-table>
      </div>

      <div class="Complaints-footer">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[6, 8, 10]"
      :page-size="sizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Tables from "../components/Tables";
import service from "@/service/index";
export default {
  components: { Tables },

  data() {
    return {
      total:100,//总条数
      uid:'',//uid
      sizes:6,//页面条数
      currentPage4:1,//当前页数
      tableData: [],
      complaintname: "", //投诉人姓名
      complainttype: "", //投诉方式
      complaintstatus: "", //投诉状态
      complaintsate: "", //日期
      form: {},
      options: [],
      option: [
        {
          value: "1",
          label: "2",
        },
      ],
      StartTime: "", //开始时间
      EndTime: "", //结束时间
    };
  },

  methods: {
     handleSizeChange(val) {
       this.sizes=val
      service.ComList({}, this.currentPage4,this.sizes, this.uid).then((res) => {
      this.tableData = res.data;
       this.total=res.count
      res.data.forEach((element) => {
        var index = element.Complaint_Time.indexOf("T");
        element.Complaint_Time = element.Complaint_Time.substring(0, index);
      });
    });

      },
      handleCurrentChange(val) {
        this.currentPage4=val
         service.ComList({}, this.currentPage4,this.sizes, this.uid).then((res) => {
          this.tableData = res.data;
         this.total=res.count
      res.data.forEach((element) => {
        var index = element.Complaint_Time.indexOf("T");
        element.Complaint_Time = element.Complaint_Time.substring(0, index);
      });
    });
      },
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
    // 搜索事件
    clicks() {
      var StartTime = "";
      var EndTime = "";
      // 将标准时间转为年月日
      if(this.complaintsate!==null&&this.complaintsate!==''){
          var stime = new Date(this.complaintsate[0]);
        StartTime =stime.getFullYear() + "-" +(stime.getMonth() + 1) + "-" + stime.getDate();
         var etime = new Date(this.complaintsate[1]);
        EndTime =etime.getFullYear() + "-" +(etime.getMonth() + 1) + "-" +etime.getDate();
         let params = {
        C_I_Name: this.complaintname,
        Complaint_Mode: this.complainttype,
        Event_State: this.complaintstatus,
        StartTime: StartTime, //开始时间
        EndTime: EndTime, //结束时间
      };
      service.ComList(params, this.currentPage4,this.sizes, this.uid).then((res) => {
        console.log(params);
        this.tableData = res.data;
        this.total=res.count
        res.data.forEach((element) => {
          var index = element.Complaint_Time.indexOf("T");
          element.Complaint_Time = element.Complaint_Time.substring(0, index);
        });
      });
      }
      else{
        let params = {
        C_I_Name: this.complaintname,
        Complaint_Mode: this.complainttype,
        Event_State: this.complaintstatus,
        StartTime: this.StartTime, //开始时间
        EndTime: this.EndTime, //结束时间
      };
      console.log(params)
      service.ComList(params, this.currentPage4,this.sizes, this.uid).then((res) => {
        console.log(params);
        this.tableData = res.data;
       this.total=res.count
        res.data.forEach((element) => {
          var index = element.Complaint_Time.indexOf("T");
          element.Complaint_Time = element.Complaint_Time.substring(0, index);
        });
      });
      }
    },
  },
  created() {
   this.uid=sessionStorage.getItem('uid')
    service.AddManaged(5).then((res) => {
      this.options = res.data; // 投诉方式
    });
    service.AddManaged(4).then((res) => {
      this.option = res.data; // 事件状态
    });
    service.ComList({}, this.currentPage4,this.sizes, this.uid).then((res) => {
      this.tableData = res.data;
     this.total=res.count
      res.data.forEach((element) => {
        var index = element.Complaint_Time.indexOf("T");
        element.Complaint_Time = element.Complaint_Time.substring(0, index);
      });
    });
  },
};
</script>

<style scoped>
@import "../css/complaintslist.css";
</style>
