<template>
  <div class="columnList_all">
    <!-- top -->
    <div class="columnList_top">
      <div class="columnList_top_left">
        <h5>文章分类</h5>
      </div>
      <div class="columnList_top_right">
        <el-button
          type="primary"
          icon="el-icon-circle-plus"
          @click="dialogVisible = true"
          >新增记录</el-button
        >
        <el-button @click="articleList">返回文章列表</el-button>
      </div>
    </div>
    <hr />
    <!-- 弹框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span> -->
      <div class="dialog_div">
        <div class="dialog_div_select">
          <span>上级分类:</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span>一级分类选择"无"</span>
        </div>
        <div class="dialog_div_title">
          <span>分类标题:</span>
          <el-input v-model="input" placeholder="请输入分类标题"></el-input>
        </div>
        <div class="dialog_div_z">
          <span>分类权重:</span>
          <el-input v-model="input1" placeholder="默认0，越大越靠前"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- table -->
    <div class="columnList_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="weight" label="权重"> </el-table-column>
        <el-table-column prop="classification" label="分类名称">
        </el-table-column>
        <el-table-column prop="num" label="文章数量"> </el-table-column>
        <el-table-column prop="date" label="更新时间"> </el-table-column>
        <el-table-column label="状态">
          <el-switch
            v-model="tableData.value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column prop="name" label="修改人员"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogVisible = true"
              >编辑</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="handDel(scope.$index, tableData)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="columnList_table_paging">
        <el-pagination
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminHead from './components/AdminHead'
import "@/views/H-Columnlist/css.css";
export default {
  components: {},

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
          value: false,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          weight: "上海",
          classification: "普陀区",
          num: "12",
          value: true,
        },
      ],
      dialogVisible: false,
      //
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      input: "",
      input1: "",
      currentPage1:1
    };
  },

  methods: {
    articleList() {
      this.$router.push("/Articlelist");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handDel(i, row) {
      row.splice(i, 1);
       this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        });
    },
  },
};
</script>

<style lang="less" scoped></style>
