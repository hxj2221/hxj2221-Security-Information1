<template>
  <div  >
    <div class="filelist" v-show="filesIsShow" >
      <!-- 头部 -->
      <div class="head">
        <h4 class="title">文件列表</h4>
        <div class="push_btn">
          <i class="fa fa-plus-circle fa-2" aria-hidden="true" @click="uploadclassify()"><span>上传文件</span></i>
          <i class="fa fa-plus-circle fa-2" aria-hidden="true" @click="newclassify()"><span>新建分类</span></i>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <el-form class="search_form" ref="form" :model="form">
          <el-form-item class="classify" label="文件分类">
            <el-select v-model="form.region" placeholder="全部">
              <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-input placeholder="请输入内容" v-model="form.input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form>
      </div>
      <!-- 表格内容 -->
      <div class="TableContent">
        <el-table :data="tableData">
          <el-table-column prop="id" label="ID" width="180">
          </el-table-column>
          <el-table-column prop="filename" label="文件名" width="180">
          </el-table-column>
          <el-table-column prop="describe" label="文件描述" width="260">
          </el-table-column>
          <el-table-column prop="sizes" label="文件大小" width="180">
          </el-table-column>
          <el-table-column prop="newdate" label="更新时间" width="180">
          </el-table-column>
          <el-table-column prop="classify" label="文件分类" width="180">
          </el-table-column>
          <el-table-column prop="name" label="上传人员" width="180">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button style="color:#666ee8" @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
              <el-button style="color: #1E1E1E;" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="pagenum">
        <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <!-- 新增分类 -->
    <add-files v-show="addIsShow" @newly="newclassify()" ></add-files>
  </div>
</template>

<script>
  import './css/Files.css'
  import AddFiles from './components/AddFiles'
  export default {
    components: {
      AddFiles
    },
    props: {},
    data() {
      return {
        form: {
          input: '',
          region: '',
          options: [{
            value: '选项1',
            label: '分类1'
          }, {
            value: '选项2',
            label: '分类2'
          }, {
            value: '选项3',
            label: '分类3'
          }, {
            value: '选项4',
            label: '分类4'
          }, ]
        },
        tableData: [{
          id: 'AT20201203001',
          filename: '调解书模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '第三方调查模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '内部调查模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '上报公安模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '会议记录模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        },{
          id: 'AT20201203001',
          filename: '调解书模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '第三方调查模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '内部调查模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '上报公安模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }, {
          id: 'AT20201203001',
          filename: '会议记录模板',
          describe: '这里是描述...最多300字',
          sizes: '96.32KB',
          newdate: '2020-12-02 20:56:37',
          classify: '分类1',
          name: '王小虎',
        }],
        filesIsShow:true,
        addIsShow:false
      };
    },
    methods: {
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 下载
      handleClick(row) {
        console.log(row);
      },
      // 上传文件
      uploadclassify(){

      },
      // 新增分类
      newclassify(){
        this.filesIsShow=!this.filesIsShow
        this.addIsShow=!this.addIsShow
      },
    },
  }
</script>
<style>
</style>