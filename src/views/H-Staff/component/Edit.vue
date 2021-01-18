<template>
  <div class="addstaffall">
    <!-- top -->

    <div class="staffThre">
      <span class="staffSpan">编辑员工信息</span>

      <div style="padding-right: 30px">
        <el-button class="staffgr" @click="staffaddvueyes">保存</el-button>

        <el-button class="staffb" @click="staffaddvueno">返回</el-button>
      </div>
    </div>

    <hr class="staffWidhr" />

    <!-- edit -->

    <div class="addmain">
      <el-form ref="form" :model="addStaff">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                disabled="disabled"
                v-model="addStaff.U_Number"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_Name"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="年龄" required>
              <el-input type="number" v-model="addStaff.U_Age"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_Gender"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiongen"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="手机号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_Phone"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_Mailbox"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_IDNumber"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.position"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="地址" required>
              <el-cascader
                class="dialog-input-text"
                style="
                  display: block;

                  position: relative;

                  font-size: 14px;

                  line-height: 40px;
                "
                size="large"
                :options="options"
                v-model="addStaff.U_Address"
                @change="handleChange"
              >
              </el-cascader>
            </el-form-item>
          </el-col>

          <el-col :span="16">
            <el-form-item label="详细地址" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.U_Detailed_Address"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8"> </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item class="ssks" label="所属科室" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="addStaff.D_ID"
                style="margin-top: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in optiondepart"
                  :key="item.D_ID"
                  :label="item.D_Name"
                  :value="item.D_ID"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="角色" required>
              <el-select style="margin-top: 40px;line-hight:20px"  v-model="addStaff.R_ID" multiple placeholder="请选择">
                <el-option
                  v-for="item in optionrole"
                  :key="item.R_ID"
                  :label="item.R_Name"
                  :value="item.R_ID"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室负责人">
              <el-switch
                v-model="addStaff.Department_Head"
                :active-value="0"
                :inactive-value="1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="8"> </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="密码" required>
              <el-input
                class="dialog-input-text"
                type="password"
                v-model="addStaff.Pwd"
                placeholder="******"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="员工状态">
              <el-switch
                v-model="addStaff.U_State"
                :active-value="0"
                :inactive-value="1"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="8"> </el-col>

          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>



<script>
// 添加员工，调后台

//  import { Aepyee } from "@/network/Sta.js";

import qs from "qs";

import service from "@/service/index";

//地址级联选择器

import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode,
} from "element-china-area-data";

export default {
  components: {},
  props: ["childed"],
  data() {
    return {
      options: regionData,

      addStaff: {
        U_ID:'',
        U_Number: "", // 员工编号
        U_Name: "", // 姓名
        U_Age: "", //年龄
        U_Gender: "", //性别
        U_Phone: "", //手机号
        U_Mailbox: "", //电子邮箱
        U_IDNumber: "", //证件号
        position: "", //职位
        U_Detailed_Address: "", //详细地址
        Department_Head: "", //科室负责人
        U_State: "", //员工状态
        Pwd: "", //密码
        U_Address: '', //地址
        D_ID: "", //所属科室
        U_Information_Change:12,
        R_ID:'', //角色
      },
      
      // 性别循环

      optiongen: [
        {
          value: "0",

          label: "男",
        },

        {
          value: "1",

          label: "女",
        },

        {
          value: "2",

          label: "未知",
        },
      ],
      // 科室
      optiondepart: [],
      // 角色
      optionrole: [],
    };
  },
  watch: {
    childed(res) {
      console.log(res);
      this.addStaff=res[0]
      this.addStaff.R_ID=res[0].Role
    },
  },
  methods: {
    one(val, row) {
      console.log(val, row);
    },
    // 保存

    staffaddvueyes() {
      let params ={
        U_ID:this.addStaff.U_ID,
        U_Information_Change:12,//用户ID
        U_Number:this.addStaff.U_Number,
        U_Name:this.addStaff.U_Name,
        U_Age:this.addStaff.U_Age,
        U_Gender:this.addStaff.U_Gender,
        U_Phone:this.addStaff.U_Phone,
        U_Mailbox:this.addStaff.U_Mailbox,
        U_IDNumber:this.addStaff.U_IDNumber,
        U_Address:this.addStaff.U_Address,
        U_Detailed_Address:this.addStaff.U_Detailed_Address,
        Department_Head:this.addStaff.Department_Head,
        U_State:this.addStaff.U_State,
        Pwd:this.addStaff.Pwd,
        D_ID: this.addStaff.D_ID,
        R_ID:this.addStaff.R_ID
      };
      // let params=this.addStaff
      // console.log(qs.stringify(params))
      service.staffEdit(qs.stringify(params)).then((res) => {
        console.log(res)
      });
      // this.$parent.fathstaffno();
    },

    handleChange(cityvalue) {},

    // 子调用父

    staffaddvueno() {
      this.$parent.fathstaffno();
    },
  },

  created() {
    // 所属科室
    service.staffDepart().then((res) => {
      this.optiondepart = res.data;
    });
    // 角色
    service.staffRole().then((res) => {
      this.optionrole = res.data;
    });
  },
};
</script>

<style scoped>
@import "add.css";
</style>

