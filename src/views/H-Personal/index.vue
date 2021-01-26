<template>
  <div class="personall">
    <userthre :headTitle="pageTitle"></userthre>
    <!-- add -->
    <div class="personmain">
      <el-form ref="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="员工编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="10001"
                v-model="U_Number"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="员工姓名" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="U_Name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-input
                placeholder="请输入内容"
                v-model="U_Age"
                class=""
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="U_Gender"
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
                v-model="U_Phone"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电子邮箱" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="U_Mailbox"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="证件号码" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="U_IDNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="职位" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="R_ID"
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
                v-model="U_Address"
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
                v-model="U_Detailed_Address"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
      </el-form>
    </div>
    <div style="display: flex; margin-top: 50px; margin-left: 35px">
      <el-button class="persongr" @click="personsave"
        ><i class="iconfont el-icon-icon-fanhui"></i> 保存</el-button
      >
      <el-button class="personb">返回</el-button>
    </div>
  </div>
</template>

<script>
import userthre from "../component/userthre";
import options from "./coun.js";
import service from '@/service/index'
import qs from "qs";

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
  components: { userthre },
  data() {
    return {
      options: regionData,
      pageTitle: "个人信息",
      U_Number:'',//员工编号
      U_Name: "",//员工姓名
      U_Age: "",//年龄
      U_Gender: "",//性别
      U_Phone: "",//手机号
      U_Mailbox: "",//邮箱
      U_IDNumber: "",//证件号
      R_ID: "",//职位
      U_Address: [],//地址
      U_Detailed_Address: "",//详细地址
      U_ID:12,//用户id
      optiongen: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "0",
          label: "女",
        },
        {
          value: "选项3",
          label: "未知",
        },
      ],
    };
  },
  // 个人信息数据
  created() {
    service.PerInfo(this.U_ID).then(res=>{
      console.log(res)
      this.U_Number=res.list[0].U_IDNumber;
      this.U_Name=res.list[0].U_Name;
      this.U_Age=res.list[0].U_Age;
      this.U_Gender=res.list[0].U_Gender;
      this.U_Phone=res.list[0].U_Phone;
      this.U_Mailbox=res.list[0].U_Mailbox;
      this.U_IDNumber=res.list[0].U_IDNumber;
      this.R_ID=res.list[0].R_ID;
      this.U_Address=res.list[0].U_Address;
      this.U_Detailed_Address=res.list[0].U_Detailed_Address
    })
  },
  methods: {
    personsave() {
      let params={
        U_ID:this.U_ID,
        U_Number:this.U_Number,
        U_Name:this.U_Name,
        U_Age:this.U_Age,
        U_Gender:this.U_Gender,
        U_Phone:this.U_Phone,
        U_Mailbox:this.U_Mailbox,
        U_IDNumber:this.personCardipt,
        R_ID:this.R_ID,
        U_Address:this.U_Address,
        U_Detailed_Address:this.U_Detailed_Address
      }
      service.PerInfoSure(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.result==true){
          this.$message('修改成功');
        }
      })
    },
    handleChange(){

    },
  },
};
</script>

<style >
@import "person.css";
</style>
