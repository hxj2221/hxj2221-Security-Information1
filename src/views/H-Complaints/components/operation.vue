<template>
  <div>
    <div class="operation" style="min-height: 800px">
      <div class="operation-top">
        <span>投诉详情-调查中</span>
        <div>
          <slot name="records">
            <el-button type="primary" icon="el-icon-edit" class="records"
              >医患记录</el-button
            >
          </slot>
          <slot name="detail">
            <el-button
              type="primary"
              icon="el-icon-s-order"
              class="detail"
              slot="reference"
              @click="drawer = true"
              >投诉详情</el-button
            >
          </slot>
          <slot name="back">
            <el-button
              type="primary"
              icon="iconfont el-icon-hospital-passwordai207"
              class="return"
              style="border: 1px solid #949aef"
              >返回</el-button
            >
          </slot>
        </div>
      </div>
      <slot name="drawer"> </slot>

      <div class="operation-content">
        <!-- 基本信息 -->
        <div class="box-Information">
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span><b>基本信息</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="box-content">
            <el-row>
              <el-col :span="4"
                ><div class="grid-content bg-purple">
                  <span class="label">事件编号：</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.D_I_Number }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">事件状态：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.E_S_Name }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">投诉科室：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.D_Name }}</span>
                </div></el-col
              >
            </el-row>
            <el-row>
              <el-col :span="4"
                ><div class="grid-content bg-purple">
                  <span class="label">投诉人姓名：</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.C_I_Name }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">性别：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.C_I_Gender }}</span>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div>
                <span class="label">年龄：</span></el-col
              >
              <el-col :span="4"
                ><div class="grid-content bg-purple-light">
                  <span class="value">{{ operationsdata.C_I_Age }}</span>
                </div></el-col
              >
            </el-row>

            <div
              style="
                border-bottom: 0.5px solid #e0e2fa;
                width: 100%;
                margin-bottom: 20px;
              "
            ></div>
          </div>
        </div>

        <!-- 科室反馈 -->
        <div
          class="box-feedback"
          v-if="
            operationsdata.Event_State == 10 || operationsdata.Event_State == 20
          "
        >
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="feedback-title"><b>科室反馈</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="feedback-content">
            <!-- 操作区域 -->
            <div v-show="operationsdata.Event_State == 10">
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">当事员工:</span>
                    <el-select v-model="peopel" multiple placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.U_ID"
                        :label="item.U_Name"
                        :value="item.U_ID"
                      >
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">诊疗经过:</span>
                    <el-input
                      type="textarea"
                      v-model="treatment"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">针对性答复:</span>
                    <el-input
                      type="textarea"
                      v-model="response"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
            <!-- 改进完成科室 -->
            <div v-show="operationsdata.Event_State == 20">
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">选择责任人:</span>
                    <el-select v-model="liable" placeholder="请选择责任人">
                      <el-option
                        v-for="item in liablelist"
                        :key="item.U_ID"
                        :label="item.U_Name"
                        :value="item.U_ID"
                      >
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">根因分析:</span>
                    <el-input
                      type="textarea"
                      v-model="analysis"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">责任意见:</span>
                    <el-input
                      type="textarea"
                      v-model="responsibility"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="20" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">整改措施:</span>
                    <el-input
                      type="textarea"
                      v-model="rectification"
                      placeholder="请填写"
                      autosize
                    ></el-input></div
                ></el-col>
              </el-row>
            </div>
          </div>
        </div>
        <!-- 审批操作 -->
        <div
          class="box-feedback"
          v-show="
            operationsdata.Event_State !== 10 &&
            operationsdata.Event_State !== 20
          "
        >
          <div class="box-top">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="7" :push="1"
                ><div class="grid-content bg-purple">
                  <span class="feedback-title"><b>审批操作</b></span>
                </div></el-col
              >
            </el-row>
          </div>
          <div class="feedback-content">
            <!-- 操作区域 -->
            <div>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">审批操作:</span>
                    <el-select
                      v-model="checkstate"
                      placeholder="请选择事件状态"
                      @change="changes"
                    >
                      <el-option
                        v-for="item in statelist"
                        :key="item.D_M_ID"
                        :label="item.D_M_Name"
                        :value="item.D_M_ID"
                      >
                      </el-option>
                    </el-select></div
                ></el-col>
              </el-row>
              <!-- 经办人信息 -->

              <!-- 退回 -->
              <div v-show="checkstate == 9">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">退回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="sendreson"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 驳回 -->
              <div v-show="checkstate == 8">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">驳回原因:</span>
                      <el-input
                        type="textarea"
                        v-model="rejectreson"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 科室自查 -->
              <div v-show="checkstate == 10">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <br />
                      <el-cascader
                        style="margin-left: 10px"
                        ref="cascader"
                        :options="issuelist"
                        :props="{
                          value: 'D_ID',
                          label: 'Name',
                          children: 'list',
                          multiple: 'true',
                        }"
                        :show-all-levels="false"
                        v-model="issue"
                        clearable
                      ></el-cascader></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div
                      class="grid-content bg-purple"
                      style="margin-left: 10px"
                    >
                      <span class="label">输入天数:</span>
                      <el-input
                        type="input"
                        v-model="needtime"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 院内讨论 -->
              <div v-show="checkstate == 12">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择抄送部门:</span>
                      <br />
                      <el-cascader
                        style="margin-left: 10px"
                        ref="cascader"
                        :options="issuelist"
                        :props="{
                          value: 'D_ID',
                          label: 'Name',
                          children: 'list',
                          multiple: 'true',
                        }"
                        :show-all-levels="false"
                        v-model="duplicate"
                        clearable
                      ></el-cascader></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">主要事实:</span>
                      <el-input
                        type="textarea"
                        v-model="facts"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">争议焦点:</span>
                      <el-input
                        type="textarea"
                        v-model="focus"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 医患沟通 -->
              <div
                v-show="
                  checkstate == 13 ||
                  checkstate == 15 ||
                  checkstate == 16 ||
                  checkstate == 17 ||
                  checkstate == 18 ||
                  checkstate == 19 ||
                  checkstate == 21 ||
                  checkstate == 14
                "
              >
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">约定日期:</span>
                      <el-input
                        style="margin-left: 10px"
                        type="input"
                        v-model="date"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row
                  type="flex"
                  class="row-bg"
                  justify="space-between"
                  v-show="
                    checkstate == 13 ||
                    checkstate == 15 ||
                    checkstate == 16 ||
                    checkstate == 17 ||
                    checkstate == 18 ||
                    checkstate == 19
                  "
                >
                  <el-col :span="20" :push="1">
                    <div
                      class="grid-content bg-purple"
                      v-show="checkstate == 13"
                    >
                      <span class="label">初步意见:</span>
                      <el-input
                        type="textarea"
                        v-model="preliminary"
                        placeholder="请填写"
                        autosize
                      ></el-input>
                    </div>
                    <div
                      class="grid-content bg-purple"
                      v-show="checkstate == 15 || checkstate == 19"
                    >
                      <span class="label">情况说明:</span>
                      <el-input
                        type="textarea"
                        v-model="note"
                        placeholder="请填写"
                        autosize
                      ></el-input>
                    </div>
                    <div
                      v-show="checkstate == 16"
                      class="grid-content bg-purple"
                    >
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="Handling"
                        placeholder="请填写"
                        autosize
                      ></el-input>
                    </div>
                    <div
                      v-show="checkstate == 17 || checkstate == 18"
                      class="grid-content bg-purple"
                    >
                      <span class="label">事实及理由:</span>
                      <el-input
                        type="textarea"
                        v-model="reasons"
                        placeholder="请填写"
                        autosize
                      ></el-input>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <!-- 持续改进【科室】 -->
              <div v-show="checkstate == 20">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择下发科室:</span>
                      <br />
                      <el-cascader
                        style="margin-left: 10px"
                        ref="cascader"
                        :options="Kaizenlist"
                        :props="{
                          value: 'D_ID',
                          label: 'Name',
                          children: 'list',
                          multiple: 'true',
                        }"
                        :show-all-levels="false"
                        v-model="Kaizen"
                        clearable
                      ></el-cascader></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">约定日期:</span>
                      <el-input
                        style="margin-left: 10px"
                        type="input"
                        v-model="date"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>

              <!-- 改进完成医院 -->
              <div v-show="checkstate == 23">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="Handling"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">管理措施:</span>
                      <el-input
                        type="textarea"
                        v-model="measures"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
              <!-- 结束 -->
              <div v-show="checkstate == 24">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任科室:</span>
                      <el-cascader
                        style="margin-left: 10px"
                        ref="cascader"
                        :options="dutylist"
                        :props="{
                          value: 'D_ID',
                          label: 'Name',
                          children: 'list',
                          multiple: 'true',
                        }"
                        :show-all-levels="false"
                        v-model="duty"
                        clearable
                      ></el-cascader></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉类别:</span>
                      <el-select v-model="type" placeholder="请选择投诉类别">
                        <el-option
                          v-for="item in typelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID"
                        >
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="6" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">选择责任度:</span>
                      <el-select v-model="degree" placeholder="请选择责任度">
                        <el-option
                          v-for="item in degreelist"
                          :key="item.D_M_ID"
                          :label="item.D_M_Name"
                          :value="item.D_M_ID"
                        >
                        </el-option>
                      </el-select></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">直接经济损失:</span>
                      <el-input
                        type="textarea"
                        v-model="loss"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="20" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">处理意见:</span>
                      <el-input
                        type="textarea"
                        v-model="Handling"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <div
              class="box-feedback"
              v-show="
                checkstate == 8 ||
                checkstate == 9 ||
                checkstate == 7 ||
                checkstate == 10
              "
            >
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="7" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="feedback-title"><b>经办人信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="feedback-content">
                <!-- 操作区域 -->

                <el-row
                  type="flex"
                  class="row-bg"
                  justify="space-between"
                  style="margin-left: 10px"
                >
                  <el-col :span="10" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">经办人姓名:</span>
                      <el-input
                        type="input"
                        v-model="agentname"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
                <el-row
                  type="flex"
                  class="row-bg"
                  justify="space-between"
                  style="margin-left: 10px"
                >
                  <el-col :span="10" :push="1"
                    ><div class="grid-content bg-purple">
                      <span class="label">经办人联系电话:</span>
                      <el-input
                        type="input"
                        v-model="agentphone"
                        placeholder="请填写"
                        autosize
                      ></el-input></div
                  ></el-col>
                </el-row>
              </div>
            </div>
            <!-- 附件 -->
            <div
              v-show="
                checkstate == 11 ||
                checkstate == 12 ||
                checkstate == 14 ||
                checkstate == 15 ||
                checkstate == 17 ||
                checkstate == 18 ||
                checkstate == 19 ||
                checkstate == 22 ||
                checkstate == 23
              "
            >
              <el-row
                type="flex"
                class="row-bg"
                justify="space-between"
                style="margin: 20px 0"
              >
                <el-col :span="15" :push="1"
                  ><div class="grid-content bg-purple">
                    <span class="label">附件信息:</span>
                  </div></el-col
                >
                <el-col :span="2" :pull="1"
                  ><div class="grid-content bg-purple">
                    <el-button
                      type="primary"
                      icon="el-icon-circle-plus"
                      @click="upfile()"
                      style="background-color: #666ee8; border: none"
                      >上传附件</el-button
                    >
                  </div></el-col
                >
              </el-row>
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="22" :push="1"
                  ><div class="grid-content bg-purple">
                    <el-table
                      :data="fileLists"
                      style="width: 100%"
                      :header-cell-style="getRowClass"
                    >
                      <el-table-column prop="E_Number" label="ID" width="width">
                      </el-table-column>
                      <el-table-column
                        prop="E_Name"
                        label="文件名"
                        width="width"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="E_Describe"
                        label="描述"
                        width="width"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="E_Size"
                        label="文件大小"
                        width="width"
                      >
                      </el-table-column>

                      <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                          <slot name="fileoper">
                            <el-button
                              type="text"
                              size="small"
                              @click="deletes(scope.row)"
                              >删除</el-button
                            >
                          </slot>
                        </template>
                      </el-table-column>
                    </el-table>
                  </div></el-col
                >
              </el-row>
            </div>
          </div>
        </div>
        <!-- 提交 -->
        <div class="box-button">
          <slot name="submit">
            <el-button
              type="primary"
              icon="el-icon-finished"
              v-show="
                (checkstate !== 10 &&
                  checkstate !== 20 &&
                  checkstate !== 9 &&
                  checkstate !== 8) ||
                operationsdata.Event_State == 10
              "
              @click="submit"
              >确认提交</el-button
            >
            <el-button
              type="primary"
              v-show="checkstate == 10 || checkstate == 20"
              @click="Issue"
              >下发</el-button
            >
            <el-button type="primary" v-show="checkstate == 9" @click="send"
              >退回</el-button
            >
            <el-button type="primary" v-show="checkstate == 8" @click="reject"
              >驳回</el-button
            >
          </slot>
        </div>
      </div>
      <!-- 上传文件弹窗 -->
      <div class="upfile">
        <el-dialog
          title="上传文件"
          :visible.sync="upfiles"
          width="30%"
          style="margin-top: 8%"
          :before-close="Close"
        >
          <el-form ref="form" label-width="90px">
            <el-form-item label="文件标题：">
              <el-input
                v-model="filetitle"
                placeholder="请输入文件标题"
              ></el-input>
            </el-form-item>
            <el-form-item label="文件描述：">
              <el-input
                type="textarea"
                v-model="filedescribe"
                placeholder="请输入文件描述"
              ></el-input>
            </el-form-item>
            <el-form-item label="上传附件：" class="uploadfile">
              <el-upload
                action="http://bt1.wlqqlp.com:8081/"
                class="upload-demo"
                :on-change="handleChange"
                :on-exceed="exceed"
                :limit="1"
                :file-list="listsss"
                :disabled="filetitle == '' || filedescribe == '' ? true : false"
                :multiple="false"
                :auto-upload="false"
              >
                <el-button
                  slot="trigger"
                  size="small"
                  type="primary"
                  :disabled="
                    filetitle == '' || filedescribe == '' ? true : false
                  "
                  >选取文件</el-button
                >
                <div slot="tip" class="el-upload__tip">
                  一次只能上传一个文件，且不超过5MB
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
          <!-- <el-button type="primary" icon="el-icon-upload" class="uploadfiles"
            >上传文件</el-button
          > -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="upfiles = false">取 消</el-button>
            <el-button type="primary" @click="upfilesubmit">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import service from "@/service";
import Look from "../components/Look";
import qss from "@/service/qs";
import qs from "qs";
export default {
  props: { operationsdata: "", },
  components: {
    Look,
  },
  data() {
    return {
      duplicate: "", //抄送部门
      rejectreson: "", //驳回原因
      sendreson: "", //退回原因
      reasons: "", //事实及理由
      Handling: "", //处理意见
      note: "", //情况说明
      date: "", //约定日期
      liable: "", //责任人
      liablelist: [], //责任人列表
      type: "", //投诉类别
      typelist: "", //投诉类别列表
      degree: "", //责任度
      degreelist: [], //责任度列表
      agentname: "", //经办人姓名
      agentphone: "", //经办人联系方式
      treatment: "", // 诊疗经过
      response: "", //针对性答复
      needtime: "", //输入天数
      issue: "", //下发科室
      issuelist: [], //科室列表
      Kaizen: "", //持续改进
      Kaizenlist: [], //科室列表
      duty: "", //责任科室
      dutylist: [], //责任科室列表
      facts: "", //主要事实
      focus: "", //争议焦点
      analysis: "", //根因分析
      loss: "", //经济损失
      responsibility: "", //责任意见
      measures: "", //管理措施
      rectification: "", //整改措施
      preliminary: "", //初步意见
      checkstate: "请选择", //选中状态
      statelist: [], //状态列表
      drawer: false,
      uploadfile: "", //上传附件
      filedescribe: "", //文件描述
      form: "",
      filetitle: "", //文件标题
      upfiles: false,

      dialogVisibless: false,
      reason: "", //投诉原因
      peopel: "", //当事员工
      options: [
        //员工列表
        {
          value: "1",
          lable: "终止",
        },
      ],
      filebeforename: "",
      fileLists: [], //已上传成功的附件列表
      file: {}, //单次上传文件
      listsss: [], //未上传文件列表
    };
  },
  methods: {
    //删除附件
    deletes(index) {
      // console.log(index);
      let params = {
        E_Number: index.E_Number, //文件编号
      };
      service.deleteupfilelist(qs.stringify(params)).then((res) => {
        console.log(res)
        if (res.code == 0) {
          // this.$router.go(0);
          this.$message({
            message: res.msg,
            type: "succsess",
            duration: 1000,
          });
          service.upfilelist(this.$parent.operationsdata.D_I_Number,this.checkstate).then((res) => {
              this.fileLists = res.data;
              console.log(res);
            });
        }
      });
      console.log(index.E_Number);
    },
    //当选中状态改变时
    changes() {
      //附件
      if (
        this.checkstate == 11 ||
        this.checkstate == 12 ||
        this.checkstate == 14 ||
        this.checkstate == 15 ||
        this.checkstate == 17 ||
        this.checkstate == 18 ||
        this.checkstate == 19 ||
        this.checkstate == 22 ||
        this.checkstate == 23
      ) {
        service
          .upfilelist(this.$parent.operationsdata.D_I_Number, this.checkstate)
          .then((res) => {
            this.fileLists = res.data;
            // console.log(this.fileLists);
          });
      }
    },
    //关闭上传文件弹窗
    Close() {
      this.listsss = [];
      this.upfiles = false;
      this.filedescribe = "";
      this.filetitle = "";
      this.file = {};
    },
    //超出限制的上传文件提示
    exceed() {
      this.$message({
        message: "单次只能上传一个文件",
        type: "error",
        duration: 1000,
      });
    },
    //删除上传文件
    handleRemove(file, fileList) {
      console.log(file);
      console.log(fileList);
    },
    // 上传附件
    upfilesubmit() {
      console.log(this.file);
      this.getBase64(this.file.raw).then((resBase64) => {
        let base64file = resBase64.split(",")[1]; //直接拿到base64信息
        // console.log(base64file)
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          base64_file: base64file, //文件
          E_Name: this.filetitle, //文件标题
          E_Describe: this.filedescribe, //文件描述
          filebeforename: this.filebeforename, //文件名
          E_Upload_Personnel: sessionStorage.getItem("uid"), //当前登录人id
          D_M_ID: this.checkstate, //当前选中状态
        };
        console.log(params);
        service
          .uploadfilebase(qs.stringify(params))
          .then((res) => {
            if (res.code == 0) {
              // this.$router.go(0);
              this.$message({
                message: res.msg,
                type: "succsess",
                duration: 1000,
              });
              this.listsss = []; //上传附件弹窗内显示的选择文件列表
              this.upfiles = false;
              this.upfilesss = true; //文件列表
              this.filedescribe = "";
              this.filetitle = "";
              this.file = {};
              service
                .upfilelist(this.$parent.operationsdata.D_I_Number, this.checkstate)
                .then((res) => {
                  this.fileLists = res.data;
                  console.log(this.fileLists);
                });
            } else {
              this.$message({
                message: res.msg,
                type: "error",
                duration: 2000,
              });
            }
          })
          .catch((res) => {
            console.log(res);
          });
      });
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file); //开始转
        reader.onload = function () {
          fileResult = reader.result;
        }; //转 失败
        reader.onerror = function (error) {
          reject(error);
        }; //转 结束  咱就 resolve 出去
        reader.onloadend = function () {
          resolve(fileResult);
        };
      });
    },
    //上传附件
    handleChange(file, fileList) {
      //    file.name=this.filetitle
      // file.filedescribe=this.filedescribe
      this.filebeforename = file.name;
      this.file = fileList[0];
    },
    //确认提交
    submit() {
      //改进完成（科室）
      if (this.$parent.operationsdata.E_S_ID == 20) {
        let data = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          U_ID: this.liable, //责任人
          K_Operation: sessionStorage.getItem("uid"), //当前登录人id
          E_Number: "", //附件编号
          K_Analysis: this.analysis, //根因分析
          K_Opinion: this.responsibility, //责任意见
          K_Measures: this.rectification, //整改措施
          K_Identification: 1, //持续改进标识 1 为科室
        };
        console.log(123);
        service.AddKaizen(qs.stringify(data)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //科室反馈
      else if (this.$parent.operationsdata.E_S_ID == 10) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          E_Number: "", //附件编号
          Peopel: this.peopel.toString(), //当事员工
          I_After: this.treatment, //诊疗经过
          I_Reply: this.response, //针对性答复
        };
        service.AddInvestigation(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //改进完成（医院）
      else if (this.checkstate == 23) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          K_Operation: sessionStorage.getItem("uid"), //当前登录人id
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          K_Identification: 0, //持续改进标识 0 为医院
          E_Number: "", //附件编号
          K_Opinion: this.Handling, //处理意见
          K_Measures: this.measures, //管理措施
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //院内讨论
      else if (this.checkstate == 12) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          CC: this.duplicate, //抄送部门
          A_Main_Facts: this.facts, //主要事实
          A_Dispute: this.focus, //争议焦点
          E_Number: "", //附件编号
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //医患沟通中
      else if (this.checkstate == 13) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          A_Preliminary_Comments: this.preliminary, //初步意见
          A_Appointment_Date: this.date, //约定日期
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      }
      //人民调解
      else if (this.checkstate == 14) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          A_Appointment_Date: this.date, //约定日期
          E_Number: "", //附件编号
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      }
      //责任鉴定中、司法诉讼
      else if (this.checkstate == 15 || this.checkstate == 19) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          A_Appointment_Date: this.date, //约定日期
          A_Information_Note: this.note, //情况说明
          E_Number: "", //附件编号
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //患方推迟
      else if (this.checkstate == 16) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          A_Opinion: this.Handling, //处理意见
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //中止调解、终止调解
      else if (this.checkstate == 17 || this.checkstate == 18) {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          A_Reason: this.reasons, //事实及理由
          E_Number: "", //附件编号
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      }
      //已结束
      else if (this.checkstate == 24) {
        let duty = "";
        if (this.duty !== "") {
          duty = this.duty.map((x) => {
            return x[1];
          });
        }
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          Duty: duty.toString(), //责任科室
          Complaint_D_M_ID: this.type, //投诉类别
          A_Degree: this.degree, //责任度
          A_Economic_Loss: this.loss, //直接经济损失
          A_Opinion: this.Handling, //处理意见
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } else {
        let params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      }
    },

    // 退回
    send() {
      var params = {
        D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
        New_D_M_ID: this.checkstate, //选中状态
        A_Operation: sessionStorage.getItem("uid"), //当前登录人id
        D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
        New_Ag_Name: this.agentname, //新的经办人                                  经办人变更要不要记录
        Ag_Phone: this.agentphone, //经办人联系方式
        A_Return_Reasons: this.sendreson, //退回原因
      };
      service.AddApproval(qs.stringify(params)).then((res) => {
        if (res.code == 0) {
          this.$router.go(0);
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    },
    // 驳回
    reject() {
      var params = {
        D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
        New_D_M_ID: this.checkstate, //选中状态
        A_Operation: sessionStorage.getItem("uid"), //当前登录人id
        D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
        New_Ag_Name: this.agentname, //新的经办人                                  经办人变更要不要记录
        Ag_Phone: this.agentphone, //经办人联系方式
        A_Reject_Reasons: this.rejectreson, //驳回原因
      };
      service.AddApproval(qs.stringify(params)).then((res) => {
        if (res.code == 0) {
          this.$router.go(0);
        } else {
          this.$message({
            message: res.msg,
            type: "error",
            duration: 1000,
          });
        }
      });
    },
    // 下发
    Issue() {
      //科室自查
      if (this.checkstate == 10) {
        let issue = "";
        if (this.issue !== "") {
          issue = this.issue.map((x) => {
            return x[1];
          });
        }
        var params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          New_Ag_Name: this.agentname, //新的经办人                                  经办人变更要不要记录
          Ag_Phone: this.agentphone, //经办人联系方式
          D_Name: issue.toString(), //下发科室
          A_Input: this.needtime, //输入天数
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      } //持续改进（科室）
      else if (this.checkstate == 20) {
        let Kaizen = "";
        if (this.Kaizen !== "") {
          Kaizen = this.Kaizen.map((x) => {
            return x[1];
          });
        }
        var params = {
          D_I_Number: this.$parent.operationsdata.D_I_Number, //事件编号
          A_Operation: sessionStorage.getItem("uid"), //当前登录人id
          New_D_M_ID: this.checkstate, //选中状态
          D_M_ID: this.$parent.operationsdata.E_S_ID, //改变前的状态
          Kaizen: Kaizen.toString(), //持续改进（科室）
          K_Identification: 1, //持续改进标识 1 为科室
        };
        service.AddApproval(qs.stringify(params)).then((res) => {
          if (res.code == 0) {
            this.$router.go(0);
          } else {
            this.$message({
              message: res.msg,
              type: "error",
              duration: 1000,
            });
          }
        });
      }
    },
    handleClose() {
      this.dialogVisibless = false;
    },
    Close() {
      this.upfiles = false;
    },
    //   投诉详情
    detaile() {
      if (this.dialogVisibless != true) {
        this.dialogVisibless = true;
      } else {
        this.dialogVisibless = false;
      }
    },
    //   上传文件弹窗

    upfile() {
      this.upfiles = true;
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
    var id = sessionStorage.getItem("uid"); //当前登录人id 1 医务处  2 科室三  4 科室二
    // console.log(id)
    service.AddManaged(4).then((res) => {
      res.data.splice(0, 1);
      res.data.splice(3, 1);
      res.data.splice(13, 1);
      this.statelist = res.data;
    });
    service.AddManaged(3).then((res) => {
      this.typelist = res.data;
    });

    service.AddManaged(9).then((res) => {
      this.degreelist = res.data;
    });
    //获取当前科室下拉框
    service.AddDepartment().then((res) => {
      this.issuelist = res.data;
      this.dutylist = res.data;
      this.Kaizenlist = res.data;
    });
    //获取当事人、责任人下拉框
    service.Party(id).then((res) => {
      this.liablelist = res.Party;
      this.options = res.Party;
    });
  },
};
</script>
<style scoped>
@import "../css/operation.css";
</style>
