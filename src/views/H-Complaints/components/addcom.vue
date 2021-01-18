<template>
  <div>
    <div class="addcom">
      <div class="addcom-top">
        <h4>基本信息</h4>
      </div>
      <div class="addcom-form-basic">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 业务编号 </span>
              <el-input v-model="comnumber" disabled></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉日期<span>*</span> </span> <br />
              <el-date-picker
                v-model="comdata"
                type="date"
                placeholder="选择日期"
              ></el-date-picker></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 事发日期<span>*</span> </span> <br />
              <el-date-picker
                v-model="incidentdata"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人姓名 </span>
              <el-input
                v-model="comname"
                placeholder="请输入投诉人姓名"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 性别<span>*</span> </span> <br />
              <el-select v-model="comgender" placeholder="请选择">
                <el-option
                  v-for="item in comgenders"
                  :key="item.value"
                  :label="item.lable"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 年龄</span> <br />
              <el-input
                placeholder="请输入"
                v-model="comagenumber"
                class="input-with-select"
              >
                <template slot="append">
                  <el-select
                    v-model="comage"
                    slot="prepend"
                    style="width: 80px"
                  >
                    <el-option label="岁" value="0"></el-option>
                    <el-option label="月" value="1"></el-option>
                    <el-option label="日" value="2"></el-option> </el-select
                ></template>
              </el-input></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 手机号码 </span>
              <el-input
                v-model="comphone"
                placeholder="请输入投诉人手机号码"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉方式<span>*</span> </span> <br />
              <el-select v-model="commode" placeholder="请选择">
                <el-option
                  v-for="item in commodes"
                  :key="item.D_M_ID"
                  :label="item.D_M_Name"
                  :value="item.D_M_ID"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉科室<span>*</span> </span> <br />
              <!-- <el-select v-model="comde" placeholder="请选择">
                <el-option
                  v-for="item in comdes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> -->
              <el-cascader
                ref="cascader"
                :options="comdes"
                :props="{
                  value: 'D_ID',
                  label: 'Name',
                  children: 'list',
                  multiple: 'true',
                }"
                :show-all-levels="false"
                v-model="comde"
                clearable
                @change="getCascaderObj"
              ></el-cascader></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <span> 投诉人与患者关系 </span><br />
              <el-select v-model="relation" placeholder="请选择">
                <el-option
                  v-for="item in relationlist"
                  :key="item.D_M_ID"
                  :label="item.D_M_Name"
                  :value="item.D_M_ID"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 答复协商时间</span> <br />
              <el-input
                placeholder="请输入"
                v-model="consulttime"
                style="width: 60%"
              >
                <template slot="append">天</template>
              </el-input>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-purple-light">
              <span> 投诉类别(多选)</span> <br />
              <el-select v-model="comtype" multiple placeholder="请选择">
                <el-option
                  v-for="item in comtypelist"
                  :key="item.D_M_ID"
                  :label="item.D_M_Name"
                  :value="item.D_M_ID"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6" :push="1"
            ><div class="grid-content bg-purple">
              <span> 事件性质 </span><br />
              <el-select v-model="nature" placeholder="请选择">
                <!-- <el-option
                  v-for="item in natures"
                  :key="item.D_M_ID"
                  :label="item.D_M_Name"
                  :value="item.D_M_ID"
                >
                </el-option> -->
                <el-option label="投诉" value="0">投诉</el-option>
                <el-option label="纠纷" value="1">纠纷</el-option>
                <el-option label="投诉转纠纷" value="2">投诉转纠纷</el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="12" :push="3"
            ><div class="grid-content bg-purple-light">
              <span> 联系地址<span>*</span> </span> <br />
              <el-input
                v-model="address"
                placeholder="联系地址"
              ></el-input></div
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="20" :push="1"
            ><div class="grid-content bg-purple">
              <span> 投诉原因</span
              ><el-input
                type="textarea"
                v-model="reason"
                placeholder="请输入投诉原因"
              ></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 经办人 -->
      <div class="Addcom-agent">
        <h4>经办人信息</h4>
        <div>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6" :pull="2"
              ><div class="grid-content bg-purple">
                <span> 经办人姓名<span>*</span> </span>
                <el-input
                  v-model="newagentname"
                  placeholder="请输入姓名"
                ></el-input>
                <el-input v-model="agentname" disabled v-show="false"></el-input
                ><!--老的名字 -->
              </div>
            </el-col>
            <el-col :span="6" :pull="6"
              ><div class="grid-content bg-purple-light">
                <span>经办人手机<span>*</span> </span> <br />
                <el-input
                  v-model="agentphone"
                  placeholder="请输入手机号码"
                ></el-input></div
            ></el-col>
          </el-row>
        </div>
      </div>
      <!-- 患者信息 -->
      <div class="addcom-relevance" v-show="false">
        <h4>关联患者信息(调用HIS)</h4>
        <el-table
          :data="data"
          style="
            width: 94%;
            margin-left: 3%;
            margin-top: 20px;
            margin-bottom: 20px;
          "
          :header-cell-style="getRowClass"
        >
          <el-table-column type="index" width="50" label="序号">
          </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="name" label="性别"> </el-table-column>
          <el-table-column prop="name" label="出生日期"> </el-table-column>
          <el-table-column prop="name" label="联系方式"> </el-table-column>
          <el-table-column prop="name" label="地址"> </el-table-column>
          <el-table-column prop="name" label="科室"> </el-table-column>
          <el-table-column prop="name" label="诊断"> </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100%"
            style="border-bottom: none"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="handleClick(scope.row)"
                style="border-bottom: none"
                >取消关联</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div align="center">
          <el-button
            type="primary"
            icon="el-icon-circle-plus"
            class="addrelevance"
            >添加患者信息</el-button
          >
        </div>
      </div>
      <!-- 弹窗 -->
      <div class="requirement">
        <slot name="dialog"> </slot>
      </div>
      <!-- <slot name="conserve"> -->
      <Conserve>
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordbaocun"
          class="keep"
          slot="keep"
          @click="keepform()"
          >提交</el-button
        >
        <el-button
          type="primary"
          icon="iconfont el-icon-hospital-passwordai207"
          class="return"
          style="border: 1px solid #949aef"
          slot="back"
          @click="backss()"
          >返回</el-button
        >
      </Conserve>
      <!-- </slot> -->
    </div>
  </div>
</template>
<script>
import Conserve from "../components/conserve";
// 获取列表
import service from "@/service/index";
import qss from "@/service/qs";
import qs from "qs";
export default {
  components: {
    Conserve,
  },

  data() {
    return {
      
      props: { multiple: true },
      agree: "", //同意要求

      data: [
        {
          name: 1,
        },
      ],
      agentname: "", //经办人姓名
      newagentname: "", //新经办人姓名
      agentphone: "", //经办人手机号
      comnumber: "", //业务编号
      comdata: "", //投诉日期
      incidentdata: "", //事发日期
      comname: "", //投诉人姓名
      comgender: "", //投诉人性别
      comage: "岁", //投诉人年龄
      comagenumber: "", //投诉人年龄
      comphone: "", //投诉人电话
      consulttime: "", //协商时间
      address: "", //联系地址
      reason: "", //投诉原因
      comgenders: [
        //性别
        {
          value: "1",
          lable: "男",
        },
        {
          value: "0",
          lable: "女",
        },
        {
          value: "2",
          lable: "未知",
        },
      ],
      commodes: [], // 投诉方式列表
      commode: "", //投诉方式
      comdes: [], //投诉科室列表
      comde: "", //投诉科室
      relationlist: [], //投诉人与患者的关系
      relation: "", //关系列表
      comtypelist: [], //投诉类别列表
      comtype: "", //投诉类别
      natures: [], //事件性质列表
      nature: "", //事件性质
    };
  },

  methods: {
    getCascaderObj() {
      // console.log(this.comde);
    },
    //保存提交事件
    keepform() {
      // this.$router.go(0);
      var stime = new Date(this.comdata);
      var StartTime =
        stime.getFullYear() +
        "-" +
        (stime.getMonth() + 1) +
        "-" +
        stime.getDate();
      var etime = new Date(this.incidentdata);
      var EndTime =
        etime.getFullYear() +
        "-" +
        (etime.getMonth() + 1) +
        "-" +
        etime.getDate();
      let comde = this.comde.map((x) => {
        return x[1];
      });

      let params = {
        D_I_Number: this.comnumber, //业务编号
        Complaint_Type: this.comtype.toString(), //投诉类型
        Complain_Reason: this.reason, //投诉原因
        Incident_Time: EndTime, //事发时间
        D_ID: comde.toString(), //投诉科室
        Complaint_Time: StartTime, //投诉日期
        Complaint_Model: this.commode, //投诉方式
        C_I_Name: this.comname, //投诉人姓名
        C_I_Phone: this.comphone, //投诉人电话
        C_I_Gender: this.comgender, //投诉人性别
        C_I_Age_Type: 0, //岁月天
        C_I_Age: this.comagenumber, //投诉人年龄
        D_M_ID: this.relation, //患者关系
        Reply_Time: this.consulttime, //协商时间
        Dispute_State: this.nature, //事件性质this.nature
        Ag_Name: this.agentname, //经办人姓名
        New_Ag_Name: this.newagentname, //新经办人姓名
        Ag_Phone: this.agentphone, //经办人手机号
        U_ID: 1, //获取当前登录人ID
      };

      let uid = 1;
      console.log(params);
      service.AddComponent(qs.stringify(params)).then((res) => {
        // console.log(res);
      });
    },
    backss() {
      this.$router.go(0);
    },

    //表格点击事件
    handleClick(index, rows) {
      // console.log(index, rows);
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
    service
      .AddManaged(5)
      .then((res) => {
        // console.log(res);
        this.commodes = res.data; // 投诉方式
      })
      .catch((err) => {});
    service.AddDepartment().then((res) => {
      // console.log(res);
      this.comdes = res.data; //投诉科室
    });
    service.AddCom().then((res) => {
      // console.log(res);
      this.comnumber = res.number; // 事件编号
    });
    service.AddManaged(1).then((res) => {
      // console.log(res);
      this.relationlist = res.data; // 关系列表
    });
    service.AddManaged(3).then((res) => {
      // console.log(res);
      this.comtypelist = res.data; // 投诉类别
    });
  },
};
</script>

<style scoped>
@import "../css/addcom.css";
</style>
