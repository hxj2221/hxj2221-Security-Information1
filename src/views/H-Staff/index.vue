<template>
  <div>
    <div class="staffalBg" v-if="staffvue">
      <headpow></headpow>
      <div class="staffIptsech">
        <el-form ref="form" :model="con"></el-form>
        <span class="staffBelong">所属科室</span>
        <el-select
          v-model="con.did"
          placeholder="请选择"
          class="staffSel"
        >
          <el-option
            v-for="item in optionbeldepart"
            :key="item.D_ID"
            :label="item.D_Name"
            :value="item.D_ID"
          >
          </el-option>
        </el-select>
        <el-input
          v-model="con.name"
          class="staffNameipt"
          placeholder="请输入内容"
        ></el-input>
        <el-button @click="StaffSearch()" class="staffNamesch" icon="el-icon-search">搜索</el-button>
      </div>
      <el-table
        :data="tables"
        style="width: 99%; margin-left: 1%"
        :header-cell-style="{ background: '#C2C5F6' }"
        :cell-style="{ background: '#fff' }"
      >
        <el-table-column
          label="序号"
          width="50"
          prop="U_ID"
        >
        </el-table-column>
        <el-table-column prop="U_Number" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="U_Name" label="员工姓名" width="120">
        </el-table-column>
        <el-table-column prop="U_Gender" label="员工性别" width="100">
        </el-table-column>
        <el-table-column prop="U_Age" label="员工年龄" width="100">
        </el-table-column>
        <el-table-column prop="U_Phone" label="手机号码" width="150">
        </el-table-column>
        <el-table-column prop="D_Name" label="所属科室" width="120">
        </el-table-column>
        <el-table-column prop="Role" label="角色" width="120">
        </el-table-column>
        <el-table-column
          prop="P_Founder"
          label="创建人员"
          width="120"
        ></el-table-column>

        <el-table-column
          prop="U_Creat_Time"
          label="创建时间"
          width="150"
        ></el-table-column>
        <el-table-column label="员工状态" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.U_State"
              :active-value="0"
              :inactive-value="1"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch($event, scope.row)"
            ></el-switch>
          </template>
          </el-table-column
        >

        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              class="staffFotedit"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              class="staffFotdel"
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
    <!--新增-->
    <Staff v-show="add"></Staff>
    <!-- 编辑 -->
    <Edit v-show="isShow" :childed="childedit"></Edit>
  </div>
</template>

<script>
import Staff from "./component/add";
import Edit from './component/Edit'
import headpow from "../component/power";

//接口
// import { stList } from "@/network/Sta.js";
import service from '@/service/index'
import qs from 'qs'
export default {
  components: { Staff,Edit, headpow },
  data() {
    return {
      childedit:[],
      add: false,//新增
      isShow:false,//编辑
      currentPage: 0,
      total: 0, //总条数
      page: 1, //初始显示第几页
      pageSize: 5, //每页显示多少数据
      staffbeldepart: "",
      dialogVisible: false,
      staffvue: true,
      currentRow: [], //选中的值
      editFormVisible: false, //设置默认弹出框  为false
      optionbeldepart: [],
      tables: [],
      search: "",
      con:{
        did:'',
        name:''
      },
      U_ID:'',
      Edit:'',//编辑详情 
      Sex:'',//性别
    };
  },
  created() {
    let params=this.con
    // console.log(params)
    service.staffList({}).then(res=>{
      // console.log(res)
      this.tables=res.data
    })
    // 所属科室
    service.staffDepart().then(res=>{
      // console.log(res)
      this.optionbeldepart=res.data
    });
    
  },
  methods: {
    // 搜索
    StaffSearch(){
      let params={
        did:this.con.did,
        name:this.con.name
      }
      console.log(qs.stringify(params))
      service.staffList(qs.stringify(params)).then(res=>{
        
        // this.tables=res.data
      })
    },
    // 新增
    fathpowadd() {
      this.staffvue = false;
      this.add = true;
    },
    // 子的
    fathstaffno() {
      this.add = false;
      this.staffvue = true;
      this.isShow=!this.isShow
    },
    fathstaffyes() {
      setTimeout(() => {
        this.add = false;
        this.staffvue = true;
        this.isShow=!this.isShow
      }, 3000);
    },
    // switch开关
    changeSwitch(val, row) {
      // console.log(val,row)
      let params={
        U_ID:row.U_ID,
        U_Information_Change:4
      }
      console.log(qs.stringify(params))
      service.staffState(qs.stringify(params)).then(res=>{
        console.log(res)
        if(res.result==true){
          this.$message({
            type: "success",
            message: "员工启用成功!",
          });
        }else{
          this.$message({
            type: "success",
            message: "员工停用成功!",
          });
        }
      })
    },
    // 编辑
    handleEdit(index, row) {
      service.staffEditDetail(row.U_ID).then(res=>{
         
        if(res.result==true){
          this.staffvue = false;
          this.isShow = true;
          this.childedit = res.list;
        }
      })
      // this.editForm = Object.assign({}, row); //重点
      // console.log(this.editForm);
    },
    //删除：
    handleDelete(index, row) {
      let params={
        U_ID:row[index].U_ID
      }
      service.staffDel(qs.stringify(params)).then(res=>{
        // console.log(res)
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
@import "staff.css";
</style>
