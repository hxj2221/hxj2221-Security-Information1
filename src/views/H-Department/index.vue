<template>
  <div>
    <div class="departalBg" v-if="departvue">
      <headpow></headpow>
      <div class="departIptsech">
        <el-input
          v-model="Department"
          class="departNameipt"
          placeholder="请输入内容"
        ></el-input>
        <el-button class="departNamesch" @click="Search()" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="tables"
        class="departtable"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column label="序号" prop="D_ID">
        </el-table-column>
        <el-table-column prop="D_Number" label="科室编号">
        </el-table-column>
        <el-table-column prop="D_Name" label="科室名称"> </el-table-column>
        <el-table-column prop="Sum" label="员工数量"> </el-table-column>
        <el-table-column prop="Parent" label="上级科室"> </el-table-column>
        <el-table-column
          prop="Founder"
          label="创建人员"
        ></el-table-column>

        <el-table-column prop="D_Creat_Time" label="创建时间"></el-table-column>
        <el-table-column label="科室状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.D_State"
              :active-value="0"
              :inactive-value="1"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch($event, scope.row)"
            />
          </template>
          ></el-table-column
        >

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              class="departEdit"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              class="departDel"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, tables)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="tables.length"
      >
      </el-pagination>
    </div>
    <!-- 新增 -->
    <adddep v-show="adddep"></adddep>
    <!-- 编辑 -->
    <el-dialog
      title="编辑"
      :visible.sync="editFormVisible"
      :close-on-click-modal="true"
      :append-to-body="true"
    >
      <!--editForm表单提交的数据-->
      <el-form :model="`editForm`" label-width="80px" ref="editForm">
        <el-form-item prop="D_ID" label="工号" width="100" >
          <el-input
          :disabled="true"
            v-model="editForm.D_ID"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="D_Number" label="科室编号" width="100">
          <el-input
          :disabled="true"
            v-model="editForm.D_Number"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="D_Name" label="科室名称" width="120">
          <el-input v-model="editForm.D_Name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="Parent" label="上级科室" width="120">
          <el-select v-model="editForm.Parent" placeholder="请选择">
    <el-option
      v-for="item in options"
        :key="item.D_ID"
        :label="item.D_Name"
        :value="item.D_ID">
    </el-option>
  </el-select>
        </el-form-item>
        <el-form-item prop="Founder" label="创建人员" width="120">
          <el-input
          :disabled="true"
            v-model="editForm.Founder"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="D_Creat_Time" label="创建时间" width="150">
          <el-input
          :disabled="true"
            v-model="editForm.D_Creat_Time"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="D_State" label="科室状态" width="150">
          <template slot-scope="scope">
            <el-switch
              v-model="editForm.D_State"
              :active-value="0"
              :inactive-value="1"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch($event, scope.row)"
            />
          </template>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
    <el-button @click="editFormVisible = false">取 消</el-button>
    <el-button style="background:#666ee8;border-color:#666ee8;" type="primary" @click="sure()">确 定</el-button>
  </div>
    </el-dialog>
  </div>
</template>

<script>
import headpow from "../component/power";
import adddep from "./component/departadd";

import qs from 'qs'
import service from '@/service/index'
export default {
  components: { headpow, adddep },
  data() {
    return {
      departvue: true,
      adddep: false,
      currentRow: [], //选中的值
      editFormVisible: false, //设置默认弹出框  为false
      editForm:{
        D_ID:'',
        D_Number:'',
        D_Name:'',
        Parent:'',
        Founder:'',
        D_Creat_Time:'',
        D_State:'',
        },
      tables:[],
      Department:'',
      options:[],//上级科室
      Founder:'4',
      disabled:false//不可更改
    };
  },
  created(){
    // 科室列表
    let params={
      Department:this.Department
    }
    // console.log(params)
    service.DepList(params).then(res=>{
      console.log(res)
      this.tables=res.data
    });
    // 上级科室
    let data={
      Founder:this.Founder
      }
    // console.log(data)
    service.DepDepart(qs.stringify(data)).then(res=>{
      console.log(res)
      this.options=res.PDep
    })
  },
  methods: {
    // 新增
    fathpowadd() {
      this.departvue = !this.departvue;
      this.adddep = !this.adddep;
    },
    // 子
    fathdepartyes() {
      setTimeout(() => {
        this.adddep = false;
        this.departvue = true;
      }, 3000);
    },
    fathdepartno() {
      this.adddep = false;
      this.departvue = true;
    },
    // switch开关
    changeSwitch(val, row) {
      console.log(row);
      let params={
        D_ID:row.D_ID,
        U_Information_Change:4
      }
      // console.log(qs.stringify(params))
      service.DepState(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.code==2){
          this.$message({
            message: "科室存在员工",
          });
        }
      })
    },
    // 搜索
    Search() {
      let params={
      Department:this.Department
    }
    console.log(params)
    service.DepList(params).then(res=>{
      console.log(res)
      this.tables=res.data
      })
    },
    // 编辑
    handleEdit(index, row) {
      this.editFormVisible = true;
      // this.editForm = Object.assign({}, row); //重点
      // console.log(this.editForm);
      let params={
        did:row.D_ID
      }
      service.DepEdit(params).then(res=>{
        console.log(res)
        this.editForm=res.list[0]
      })
    },
    // 确认编辑
    sure(){
      let params={
         D_ID:this.editForm.D_ID,
        D_Number:this.editForm.D_Number,
        D_Name:this.editForm.D_Name,
        Parent_D_ID:this.editForm.Parent,
        Founder:this.editForm.Founder,
        D_Creat_Time:this.editForm.D_Creat_Time,
        D_State:this.editForm.D_State,
        D_Information_Change:4
      }
      console.log(qs.stringify(params))
      service.DepSureEdit(qs.stringify(params)).then(res=>{
        console.log(res)
        this.editFormVisible=!this.editFormVisible
      })
    },
    //删除：
    handleDelete(index, row) {
      console.log(row[index].D_ID)
      let params={
        D_ID:row[index].D_ID
      }
      console.log(qs.stringify(params))
      service.DepDel(qs.stringify(params)).then(res=>{
        console.log(res)
      })
      // this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning",
      // })
      //   .then(() => {
      //     this.$message({
      //       type: "success",
      //       message: "删除成功!",
      //       delete: row.splice(index, 1),
      //     });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消删除",
      //     });
      //   });
    },
  },
};
</script>

<style>
@import "depart.css";
</style>
