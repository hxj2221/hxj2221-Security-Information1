<template>
  <div class="addstaffall">
    <!-- top -->
    <div class="departaddThre">
      <span class="departaddSpan">新增科室信息</span>
      <div style="padding-right: 30px">
        <el-button class="departaddgr" @click="departaddvueyes">保存</el-button>
        <el-button class="departaddb" @click="departaddvueno">返回</el-button>
      </div>
    </div>
    <hr class="departaddWidhr" />
    <!-- add -->
    <div class="addmain">
      <el-form ref="form" :model="form">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="科室编号" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder=""
                v-model="form.Number"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="科室名称" required>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                v-model="form.D_Name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item style="margin-top: 40px" label="科室状态">
              <el-switch
                v-model="form.D_State"
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
            <el-form-item class="ssks" label="上级科室" required>
              <el-select
                class="dialog-input-text"
                type="input"
                autosize
                v-model="form.Parent_D_ID"
                style="margin-top: 6px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.D_ID"
                  :label="item.D_Name"
                  :value="item.D_ID"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
          <el-col :span="8"> </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="创建人" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder=""
                v-model="form.Founder"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间" disabled>
              <el-input
                class="dialog-input-text"
                type="input"
                autosize
                placeholder="2020-12-29 12:43:56"
                v-model="form.CreateTime"
              ></el-input>
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
import qs from 'qs'
import service from '@/service/index'
export default {
  data() {
    return {
    form:{
      Number:'',
        D_Name:'',
        D_State:'',
        Parent_D_ID:'',
        CreateTime:'',
      },
      options: [],
      Founder:'12'
    };
  },
  created(){
    // 上级科室
    let params={
      Founder:this.Founder
      }
    // console.log(params)
    service.DepDepart(qs.stringify(params)).then(res=>{
      // console.log(res)
      this.options=res.PDep
      this.form=res
    })
  },
  methods: {
    departaddvueyes() {
      let params={
        D_Number:this.form.Number,
        D_State:this.form.D_State,
        D_Name:this.form.D_Name,
        Parent_D_ID:this.form.Parent_D_ID,
        CreateTime:this.form.CreateTime,
        D_Founder:12,
        D_Information_Change:12
      }
      // console.log(qs.stringify(params))
      service.DepAdd(qs.stringify(params)).then(res=>{
        // console.log(res)
        this.$parent.fathdepartyes();
      })
      
    },
    departaddvueno() {
      this.$parent.fathdepartno();
    },
  },
};
</script>

<style scoped>
@import "adddepart.css";
</style>
