import service from '@/service/index';
<template>
  <div class="addAll">
    <!-- 新增 -->
    <div class="formBasics">
      <h2>基本信息</h2>
      <el-form class="form_con" ref="addAde" :model="addAde">
        <div class="info">
          <el-form-item label="业务编号">
            <el-input v-model="addAde.number" :disabled="true" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="不良类型" required>
              <el-select v-model="addAde.evrnt_type" >
                <el-option v-for="item in options"
                  :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="不良发生地点" required>
            <el-select v-model="addAde.occur_scene" >
                <el-option v-for="item in options1"
                  :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="患者姓名" required>
            <el-input v-model="addAde.patient_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" required>
            <el-select v-model="addAde.sex" placeholder="男">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
              <el-option label="未知" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input placeholder="请输入内容" v-model.number="addAde.age" class="input-with-select inp">
              <template slot="append">
                <el-select v-model="addAde.specific_age" slot="prepend" placeholder="岁">
                  <el-option label="岁" value="1"></el-option>
                  <el-option label="月" value="2"></el-option>
                  <el-option label="天" value="3"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="入院日期" required>
            <el-date-picker v-model="addAde.hospitalized_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="科室" required>
            <el-input v-model="addAde.department_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="床号" required>
            <el-input v-model="addAde.bed_number" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="住院号" required>
            <el-input v-model="addAde.admission_id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="不良发生时间" required>
            <el-date-picker v-model="addAde.occur_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="报告时间" required>
            <el-date-picker v-model="addAde.create_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="info">
          <el-form-item label="主管医师" required>
            <el-input v-model="addAde.Indications_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="主管护士" required>
            <el-input v-model="addAde.nurse_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="在场相关人员" required>
            <el-input v-model="addAde.stakeholder" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="info info_last">
          <el-form-item label="上报人" required>
            <el-input v-model="addAde.create_uid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="last" label="轻重程度" required label-width="180">
            <el-select v-model="addAde.degree_weight_id" placeholder="请选择">
              <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="入院诊断" required>
              <el-input type="textarea" v-model="addAde.admitting_diagnosis"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="诊疗经过" required>
              <el-input type="textarea" v-model="addAde.diagnosis_process"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="患者目前情况" required>
              <el-input type="textarea" v-model="addAde.patient_situation"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="width:90%" label="不良事件描述" required>
              <el-input type="textarea" v-model="addAde.event_describe"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 关联 -->
    <div class="table_info">
      <h2>关联患者信息（调用HIS）</h2>
      <el-table class="info" :data="tableData">
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
        </el-table-column>
        <el-table-column prop="date" label="出生日期">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话">
        </el-table-column>
        <el-table-column prop="address" label="联系方式" :show-overflow-tooltip='true' width="207">
        </el-table-column>
        <el-table-column prop="depart" label="科室">
        </el-table-column>
        <el-table-column prop="diagnosis" label="诊断">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">取消关联</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="add">
        <i class="el-icon-circle-plus-outline"><span>添加患者信息</span></i>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="root">
      <i class="fa fa-file-o fa-2" aria-hidden="true" @click="sure('addAde')"><span>提交</span></i>
      <i class="fa fa-reply fa-2" aria-hidden="true" @click="back()"><span>返回</span></i>
    </div>
  </div>

</template>

<script>
import service from '@/service/index'
  export default {
    components: {},
    props: {

    },
    data() {
      return {
        addAde: {
          number: 'BL202011150001',// 事件编号
          evrnt_type: '',// 不良类型
          occur_scene: '',// 发生地点
          patient_name:'',//患者姓名
          sex: '',// 性别
          age: '', // 年龄
          specific_age: '',//年龄类别
          hospitalized_time: '',// 入院日期
          department_id: '',// 科室
          bed_number: '',// 床号
          admission_id: '',// 住院号
          occur_time: '',// 不良发生时间
          create_time: '',// 报告时间
          Indications_uid: '',// 主管医师
          nurse_uid: '',// 主管护士
          stakeholder: '',// 在场相关人员
          create_uid: '',// 上报人
          degree_weight_id: '',// 轻重程度
          admitting_diagnosis: '',// 入院诊断
          diagnosis_process: '',// 诊疗经过
          patient_situation: '',// 患者目前情况
          event_describe: '',// 不良事件描述
        },
        options: [{
          value: '选项1',
          label: '医疗'
        }, {
          value: '选项2',
          label: '输血不良事件'
        }, {
          value: '选项3',
          label: '器械'
        }, {
          value: '选项4',
          label: '护理不良事件'
        }, {
          value: '选项5',
          label: '药品类'
        }, {
          value: '选项6',
          label: '医技类'
        }, {
          value: '选项7',
          label: '后勤类'
        }, {
          value: '选项8',
          label: '安全类'
        }, {
          value: '选项9',
          label: '信息类'
        }, {
          value: '选项10',
          label: '暴力事件'
        }, {
          value: '选项11',
          label: '其他管理类'
        }],
        options1: [{
          value: '1',
          label: '急诊'
        }, {
          value: '2',
          label: '门诊'
        }, {
          value: '3',
          label: '病房部'
        }, {
          value: '4',
          label: '手术室'
        }, {
          value: '5',
          label: '医技检查室'
        }, {
          value: '6',
          label: '后勤区域'
        }, {
          value: '7',
          label: '其他'
        }, ],
        options4: [{
          value: '选项1',
          label: 'A级：客观环境或条件可能引发不良事件（隐患）'
        }, {
          value: '选项2',
          label: 'B级：发生但未累及患者'
        }, {
          value: '选项3',
          label: 'C级：累及到患者，但没有造成伤害'
        }, {
          value: '选项4',
          label: 'D级：累及到患者，需要进行监测以确保患者不被伤害，或需通过干预阻止伤害发生'
        }, {
          value: '选项5',
          label: 'E级：造成患者暂时性伤害，并需要进行治疗或干预'
        }, {
          value: '选项6',
          label: 'F级：造成患者暂时性伤害，并需要住院或延长住院时间'
        }, {
          value: '选项7',
          label: 'G级：造成患者永久性伤害'
        }, {
          value: '选项8',
          label: 'H级：导致患者需要治疗挽救生命'
        }, {
          value: '选项9',
          label: 'I级：导致患者死亡'
        }, ],
        tableData: [{
          name: '王小虎',
          sex: '男',
          date: '1998-05-02 ',
          phone: '13612345656',
          address: '城中区人民大道188号9栋302',
          depart: '门诊/急诊',
          diagnosis: '高血压',
        }, ],
      };
    },
    methods: {
      // 提交
      sure(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params=this.addAde
            console.log(params)
            service.badAdd(params).then(res=>{
              console.log(res)
            })
          } 
        });
        // let params={
        //   evrnt_type:this.addAde.evrnt_type,
        //   occur_scene:this.addAde.occur_scene,
        //   occur_time:this.addAde.occur_time,
        //   create_uid:this.addAde.create_uid,
        //   create_time:this.addAde.create_time,
        //   update_time:this.addAde.update_time,
        //   patient_name:this.addAde.patient_name,
        //   sex:this.addAde.sex,
        //   age:this.addAde.age,
        //   degree_weight_id:this.addAde.degree_weight_id,
        //   specific_age:this.addAde.specific_age,
        //   admission_id:this.addAde.admission_id,
        //   nurse_uid:this.addAde.nurse_uid,
        //   Indications_uid:this.addAde.Indications_uid,
        //   stakeholder:this.addAde.stakeholder,
        //   department_id:this.addAde.department_id,
        //   hospitalized_time:this.addAde.hospitalized_time,
        //   bed_number:this.addAde.bed_number,
        //   admitting_diagnosis:this.addAde.admitting_diagnosis,
        //   patient_situation:this.addAde.patient_situation,
        //   diagnosis_process:this.addAde.diagnosis_process,
        //   event_describe:this.addAde.event_describe,
        // }
        // console.log(params)
        // service.badAdd(params).then(res=>{
        //   console.log(res)
        // })
        // this.$emit('pageAdd')

      },
      // 返回
      back() {
        this.$emit('pageAdd')
      },
      // 取消关联
      // 查看
      handleClick(row) {
        console.log(row);
      },

    },
  }
</script>
<style>

</style>