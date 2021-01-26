<template>
  <div>
    <div class="H-edit">
      <div class="edit-top">
        <el-button type="primary" @click="add">添加权限</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        :header-cell-style="getRowClass"
        row-key="ID"
        border
        :tree-props="{ children: 'Subordinate', hasChildren: 'hasChildren'}"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="P_Name" label="名称" width="180"> </el-table-column>

        <el-table-column prop="P_Details" label="备注"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="400">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >添加子级</el-button
            >
            <el-button type="text" size="small" @click="handleEdit(scope.$index,tableDate,scope.row.ID)" >编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.$index,tableData,scope.row.ID)"  >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-dialog
          title="添加权限"
          :visible.sync="dialogVisible"
          width="width"
          :before-close="dialogBeforeClose">
          <div>
            <div>
              <span>权限名：</span> <el-input v-model="name" placeholder="请输入权限名" style="width:70%"></el-input>
            </div>
           
          </div>
          <div slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/service/index'
export default {
  data() {
    return {
      name:'',//权限名
      dialogVisible:false,
      tableData: [
          ],
    };
  },
  created(){
    service.powList().then(res=>{
      console.log(res)
      this.tableData = res.data
    })
  },
  methods: {
    // 添加权限
    add(){
      this.dialogVisible=true
    },
    dialogBeforeClose(){
       this.dialogVisible=false
    },
    handleClick() {},
    // 编辑
    handleEdit(index, row,ID){
    console.log(ID)
        let data={
          id:ID
        }
      service.powEdit(data).then(res=>{
          console.log(res);
        })
    },
    handleDelete(index, row,ID) {
      console.log(ID)
        let data={
          id:ID
        }
        service.powDel(data).then(res=>{
          console.log(res);
        })
      },
      getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#c2c5f6;color:#000";
      } else {
        return "";
      }
    },
  },

};
</script>

<style scoped>
@import "edit.css";
</style>
