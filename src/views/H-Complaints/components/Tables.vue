<template>
  <div>
    <div class="Complaints-content">
      <el-table
        :data="tableData"
        style="width: 94%; margin-left: 3%; text-align: center"
        :header-cell-style="getRowClass"
      >
        <el-table-column type="index" width="50" label="序号"> </el-table-column>
        <el-table-column prop="D_I_Number" label="事件编码"></el-table-column>
        <el-table-column prop="C_I_Name" label="投诉人姓名"> </el-table-column>
        <el-table-column prop="C_I_Gender" label="性别"> </el-table-column>
        <el-table-column prop="C_I_Age" label="年龄"> </el-table-column>
        <el-table-column prop="C_I_Phone" label="手机号码"> </el-table-column>
        <el-table-column prop="D_Name" label="投诉科室"> </el-table-column>
        <el-table-column prop="C_M_Name" label="投诉方式"> </el-table-column>
        <el-table-column prop="Complaint_Time" label="投诉时间"> </el-table-column>
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
  </div>
</template>
<script>
import service from "@/service/index";
export default {
  components: {},

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "1",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "1 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "1 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1 1516 弄",
        },
      ],
    };
  },

  methods: {
    handle(row) {
      // console.log(row);
    },
    // 设置表头颜色
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },
  created() {
     service.ComList({},1,9,8).then((res) => {
        // console.log(res);
        this.tableData=res.data
        res.data.forEach(element => {
          var index=element.Complaint_Time.indexOf('T');
          // console.log(index);
          element.Complaint_Time=element.Complaint_Time.substring(0,index);
          // console.log(element.Complaint_Time);
        });

      });
    // service.ComList().then((res) => {
    //   console.log(res);
    //   if (res.code === 20010) {
    //     this.tableData = res.data;
    //   } else {
    //     this.$message({
    //       message: res.msg,
    //       type: "error",
    //       duration: 1000,
    //     });
    //     this.$router.push("/login");
    //     localStorage.clear();
    //   }
    // });
  },
};
</script>

<style scoped>
@import "../css/Table.css";
</style>
