<template>
  <div>
    <div class="look">
      <slot name="title">
       <div class="look-top">
          <span>投诉详情-调查中</span>
          <div>
            <slot name="stamp">
              <el-button
                type="primary"
                icon="iconfont el-icon-hospital-passworddayin"
                class="printing"
                >打印调查表</el-button
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
          <div
            style="border-bottom: 2px solid #cccccc70; width: 100%; height: 30px"
          ></div>
        </div>
      </slot>
      <!-- 打印内容 -->
      <slot name="content">
        <div
          class="look-content"
          v-for="item in data"
          :key="item.BasicInformation[0].D_I_Number"
        >
          <div class="look-content-title">
            <span>投诉事件调查表</span>
          </div>
          <!-- 标题 -->
          <div class="look-content-top">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>医院名称：</span>{{ item.BasicInformation[0].H_Name }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件编号：</span
                    >{{ item.BasicInformation[0].D_I_Number }}</span
                  >
                </div></el-col
              >
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>投诉日期：</span
                    >{{ item.BasicInformation[0].Complaint_Time }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事发日期：</span
                    >{{ item.BasicInformation[0].Incident_Time }}</span
                  >
                </div></el-col
              >
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件性质：</span
                    >{{ item.BasicInformation[0].Dispute_State }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>事件状态：</span
                    >{{ item.BasicInformation[0].Event_State }}</span
                  >
                </div></el-col
              >
            </el-row>
            <hr />
          </div>
          <div class="look-content-box">
            <!-- 审批节点 -->
             <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>科室自查</b></span>
                    </div></el-col>
                     <el-col :span="3"
                    ><div class="grid-content bg-purple-light"></div
                  ></el-col>
                  <el-col :span="9" :pull="1"
                    ><div class="grid-content bg-purple">
                      <span><b>操作时间：</b>2021-1-4 00:00:00</span>
                    </div></el-col>
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">审批部门：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">医务处</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">负责人：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">魏忠文/13955551234</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">状态修改：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >已受理→科室自查
                        </span>
                    </div></el-col
                  >
                </el-row>
                 <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">下发科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >血液科</span>
                    </div></el-col
                  >
                </el-row>
                 <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">主要事实：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >无</span>
                    </div></el-col
                  >
                </el-row>
                 <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">争议焦点：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >无</span>
                    </div></el-col
                  >
                </el-row>
                <div
                  style="
                    border-bottom: 0.5px solid #797979;
                    width: 100%;
                  "
                ></div>
                  <div class="file clearfix">
                    <div>
                      <span class="filename">文件名</span>
                      <span class="filedetaile">查看</span>
                    </div>
                     <div>
                      <span class="filename">文件名</span>
                      <span class="filedetaile">查看</span>
                    </div>
                     <div>
                      <span class="filename">文件名</span>
                      <span class="filedetaile">查看</span>
                    </div>
                  </div>
              </div>
              <hr />
            </div>
            <!-- 科室调查 -->
            <div
              class="box-contents"
              v-for="item in data[0].GetLoop"
              :key="item.Participating[0].Num"
            >
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2">
                    <div class="grid-content bg-purple">
                      <span
                        ><b>{{ item.Participating[0].Num }}</b></span
                      >
                    </div></el-col
                  >
                  <el-col :span="3"
                    ><div class="grid-content bg-purple-light"></div
                  ></el-col>
                  <el-col :span="9" :pull="1"
                    ><div class="grid-content bg-purple">
                      <span><b>下发时间：</b>{{ item.Participating[0].Time }}</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content clearfix">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">参与调查科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20">
                    <div class="grid-content bg-purple-light">
                      <span>{{ item.Participating[0].D_Names }}</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div
                v-for="items in item.Participating"
                :key="items.SurveyProgress[0].D_Name"
              >
                <div
                  class="box-content-child clearfix"
                  v-for="itemss in items.SurveyProgress"
                  :key="itemss[0].D_Name"
                >
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">调查科室：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ itemss[0].D_Name }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">负责人：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ itemss[0].Department_Head }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">当事员工：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ itemss[0].StaffInvolved }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">反馈时间：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ itemss[0].EndTime }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">诊疗经过：</span>
                      </div></el-col
                    >
                    <el-col :span="20">
                      <div class="grid-content bg-purple-light">
                        <span class="value">{{ itemss[0].I_Reply }}</span>
                      </div></el-col
                    >
                  </el-row>
<<<<<<< HEAD
                  <div
                    style="
                      border-bottom: 0.5px solid #797979;
                      width: 100%;
                      margin-bottom: 20px;
                    "
                  ></div>
                </div>
                <hr />
              </div>
            </div>
            <!-- 科室调查 -->
            <div
              class="box-contents"
              v-show="items.length !== 0"
              v-for="items in item.GetLoop"
              :key="items"
            >
              <div class="box-top" v-if="items.Participating.length !== 0">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2">
                    <div class="grid-content bg-purple">
                      <span
                        ><b>{{ items.Participating[0].Num }}</b></span
                      >
                    </div></el-col
                  >
                  <el-col :span="3"
                    ><div class="grid-content bg-purple-light"></div
                  ></el-col>
                  <el-col :span="9" :pull="1"
                    ><div class="grid-content bg-purple">
                      <span
                        ><b>下发时间：</b
                        >{{ items.Participating[0].Time }}</span
                      >
                    </div></el-col
                  >
                </el-row>
              </div>
              <div
                class="box-content clearfix"
                v-if="items.Participating.length !== 0"
              >
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">参与调查科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20">
                    <div class="grid-content bg-purple-light">
                      <span>{{ items.Participating[0].D_Names }}</span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div v-if="items.Participating.length !== 0">
                <div
                  v-for="itemss in items.Participating[0].SurveyProgress"
                  :key="itemss[0].D_Name"
                >
                  <div class="box-content-child clearfix">
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">调查科室：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{ itemss[0].D_Name }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">负责人：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{
                            itemss[0].Department_Head
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">当事员工：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{
                            itemss[0].StaffInvolved
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">反馈时间：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{
                            itemss[0].EndTime == "0001-01-01 00:00:00"
                              ? "未反馈"
                              : itemss[0].EndTime
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">诊疗经过：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{
                            itemss[0].I_After == null ? "无" : itemss[0].I_After
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">针对性答复：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{
                            itemss[0].I_Reply==null ? "无" : itemss[0].I_Reply
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <div
                      style="border-bottom: 0.5px solid #797979; width: 100%"
                    ></div>
                    <div class="file clearfix">
                      <div
                        v-for="(itemsss,key) in itemss[0].E_Name"
                        :key="itemsss.E_Name"
                      >
                        <span class="filename">{{ itemsss.E_Name }}</span>
                         <span class="filedetaile" @click="down(itemsss,key)"> <a href="#" style=" text-decoration: none;  color: #666ee8;">下载</a></span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr style="margin-top: 20px; margin-bottom: 20px" />
              </div>
              <!-- 审批节点 -->
              <div v-if="items.ApprovalDepartment">
                <div
                  class="box-Information"
                  v-for="it in items.ApprovalDepartment"
                  :key="it.Department"
                >
                  <div class="box-top">
                    <el-row type="flex" class="row-bg" justify="space-between">
                      <el-col :span="3" :push="2"
                        ><div class="grid-content bg-purple">
                          <span
                            ><b>{{ it.Name }}</b></span
                          >
                        </div></el-col
                      >
                      <el-col :span="3"
                        ><div class="grid-content bg-purple-light"></div
                      ></el-col>
                      <el-col :span="9" :pull="1"
                        ><div class="grid-content bg-purple">
                          <span><b>操作时间：</b>{{ it.Time }}</span>
                        </div></el-col
                      >
                    </el-row>
                  </div>
                  <div class="box-content">
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">审批部门：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Department }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">负责人：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Department_Head }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">状态修改：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.UpdateState }} </span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.D_Name">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">下发科室：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.D_Name }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.Ag_Name">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">经办人信息：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Ag_Name }}</span>
                        </div></el-col
                      >
                    </el-row>

                    <el-row v-if="it.Duty !== '' && it.Duty !== null">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">责任科室：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Duty }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.Complaint_D_M_ID">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">投诉类别：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Complaint_Type }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.Degree">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">责任度：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{ it.Degree }}</span>
                        </div></el-col
                      >
                    </el-row>

                    <el-row
                      v-if="it.A_Main_Facts !== '' && it.A_Main_Facts !== null"
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">主要事实：</span>
                        </div></el-col
                      >
                      <el-col :span="20">
                        <div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Main_Facts }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Dispute !== '' && it.A_Dispute !== null">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">争议焦点：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Dispute }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row
                      v-if="
                        it.A_Preliminary_Comments !== '' &&
                        it.A_Preliminary_Comments !== null
                      "
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">初步意见：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{
                            it.A_Preliminary_Comments
                          }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row
                      v-if="
                        it.A_Appointment_Date !== '' &&
                        it.A_Appointment_Date !== null
                      "
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">约定日期：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Appointment_Date }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row
                      v-if="
                        it.A_Information_Note !== '' &&
                        it.A_Information_Note !== null
                      "
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">情况说明：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Information_Note }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Opinion !== '' && it.A_Opinion !== null">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">处理意见：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Opinion }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Reason !== '' && it.A_Reason !== null">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">事实及理由：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Reason }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row
                      v-if="it.A_Measures !== '' && it.A_Measures !== null"
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">管理措施：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Measures }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Economic_Loss !== '' && it.A_Economic_Loss !== null">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">直接经济损失：</span>
                        </div></el-col>
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Economic_Loss }}</span>
                        </div></el-col>
                    </el-row>
                    <el-row v-if="it.A_Reject_Reasons">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">驳回原因：</span>
                        </div></el-col>
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{it.A_Reject_Reasons}}</span>
                        </div></el-col>
                    </el-row>
                    <el-row v-if="it.A_Return_Reasons">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">退回原因：</span>
                        </div></el-col>
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{it.A_Return_Reasons}}</span>
                        </div></el-col>
                    </el-row>
                    <el-row v-if="it.CCDepartment">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">抄送部门：</span>
                        </div></el-col >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.CCDepartment }}</span>
                        </div></el-col>
                    </el-row>

                    <div style="border-bottom: 0.5px solid #797979; width: 100%" ></div>
                    <div class="file clearfix">
                      <div v-for="itemsssss in it.E_Name" :key="itemsssss.E_Name" >
                        <span class="filename">{{ itemsssss.E_Name }}</span>
                        <span class="filedetaile"> <a href="#" style=" text-decoration: none;  color: #666ee8;">下载</a></span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
=======
                  <div style="border-bottom: 0.5px solid #797979; width: 100%"></div>
                  <div class="file clearfix">
                    <div v-for="itemsss in itemss[0].E_Name" :key="itemsss._Name">
                      <span class="filename">{{ itemsss.E_Name }}</span>
                      <span class="filedetaile">查看</span>
                    </div>
                  </div>
                </div>
>>>>>>> ecf3788304fcae81a992fdbafde4cd4735b33142
              </div>
              <hr />
            </div>
            <!-- 投诉人信息 -->
            <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>投诉人信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉人姓名：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">张大牛</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">男</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">65</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">投诉方式：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">上级转办</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">与患者关系：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">本人</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">答复协商日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">3日</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉科室：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">心血管内科、血液科</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉类别：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">费用、医院制度、服务态度</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉原因：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >患者后颈部疼痛伴四肢无力8小时急诊入院，5小时后接入手术室行手术治疗，现患者截瘫，家属认为要求办理转院手续</span
                      >
                    </div></el-col
                  >
                </el-row>
                <div
                  style="
                    border-bottom: 0.5px solid #797979;
                    width: 100%;
                    margin-bottom: 20px;
                  "
                ></div>
              </div>
              <hr />
            </div>
            <!-- 患者信息 -->
            <div class="box-Information">
              <div class="box-top">
                <el-row type="flex" class="row-bg" justify="space-between">
                  <el-col :span="3" :push="2"
                    ><div class="grid-content bg-purple">
                      <span><b>患者信息</b></span>
                    </div></el-col
                  >
                </el-row>
              </div>
              <div class="box-content">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">投诉人姓名：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">张大牛</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">男</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">65</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">医保类型：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">社保</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">手机：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">13898761234</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">最新就诊日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">2020-11-15</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">所在病区：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">普通外科一病区</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">所在病房：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">306</span>
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">诊断信息：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >患者后颈部疼痛伴四肢无力8小时急诊入院，5小时后接入手术室行手术治疗，现患者截瘫，家属认为要求办理转院手续</span
                      >
                    </div></el-col
                  >
                </el-row>
                <div
                  style="
                    border-bottom: 0.5px solid #797979;
                    width: 100%;
                    margin-bottom: 20px;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  components: {
      },
  data() {
    return {
      
      data: [
        {
          GetLoop: [
            {
              Participating: [
                {
                  D_Names: "科室一、科室四",
                  Num: "第1次科室调查",
                  Time: "2020-12-29 00:00:00",
                  SurveyProgress: [
                    [
                      {
                        D_Name: "科室一",
                        Department_Head: "李四/12345678921",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "无",
                        I_Reply: "无",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                    [
                      {
                        D_Name: "科室四",
                        Department_Head: "李四/1248787821",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "1111",
                        I_Reply: "1111",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                  ],
                },
              ],
              ApprovalDepartment: [
                {
                  Time: "2020-12-31 00:00:00",
                  Department: "医务处",
                  Department_Head: "王五/12345678921",
                  UpdateState: "无→345",
                  D_Name: "科室一、科室四",
                  Complaint_Type: "456",
                  Duty: "无",
                  PersonLiable: "张三/科室一",
                  CCDepartment: "无",
                  A_Opinion: "审批意见意见意见意见",
                  E_Name: [
                    {
                      E_Number: "55555",
                      E_Name: "附件五",
                    },
                    {
                      E_Number: "666666",
                      E_Name: "附件六",
                    },
                    {
                      E_Number: "55555",
                      E_Name: "附件五",
                    },
                  ],
                },
              ],
            },
            {
              Participating: [
                {
                  D_Names: "科室五",
                  Num: "第2次科室调查",
                  Time: "2020-12-29 00:00:00",
                  SurveyProgress: [
                    [
                      {
                        D_Name: "科室五",
                        Department_Head: "张三/12345678921",
                        StaffInvolved: "无",
                        EndTime: "2020-01-01 00:00:00",
                        I_After: "4444",
                        I_Reply: "4444",
                        E_Name: [
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                          {
                            E_Number: "666666",
                            E_Name: "附件六",
                          },
                          {
                            E_Number: "55555",
                            E_Name: "附件五",
                          },
                        ],
                      },
                    ],
                  ],
                },
              ],
              ApprovalDepartment: [],
            },
          ],
          BasicInformation: [
            {
              H_Name: "兰州大学第二医院",
              D_I_Number: "YY12143254376587",
              Complaint_Time: "2020-12-31",
              Incident_Time: "2020-12-31",
              Dispute_State: "纠纷",
              Event_State: "科室自查",
            },
          ],
          ComplaintsInformation: [
            {
              C_I_Name: "投诉人一号",
              C_I_Gender: 0,
              C_I_Age: 18,
              Complaint_Mode: "345",
              D_M_Name: "345",
              Reply_Time: 3,
              D_Name: "科室二、科室三",
              Complaint_Type: "456",
              Complain_Reason: "原因",
            },
          ],
          PatientInformation: [
            {
              P_I_Name: "患者一号",
              P_I_Gender: 0,
              P_I_Age: 18,
              Insurance_Type: 0,
              P_I_Phone: 13445678945,
              Hz_Diagnosis_Time: "2020-01-01 00:00:00",
              Inpatient_Area: "病区",
              Ward_Number: "病房",
              Hz_Outpatient_Diagnosis: "诊断",
              P_I_Medical_Card: "123465",
            },
          ],
        },
      ],
    };
  },
<<<<<<< HEAD
  methods: {
    down(itemsss,key){
      console.log(itemsss,key)
      let params={
        E_Number:itemsss.E_Number//附件编号
      }
      
    }
  },
  created() {
    // this.data=datas
  },
=======
  methods: {},
  created() {},
>>>>>>> ecf3788304fcae81a992fdbafde4cd4735b33142
};
</script>
<style scoped>
@import "../css/look.css";
</style>
