<template>
  <div>
    <div class="look">
    
      <!-- 打印内容 -->
      <slot name="content">
        <div
          class="look-content"
          v-for="item in datas"
          :key="item.ComplaintsInformation[0].D_I_Number"
        >
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
            style="
              border-bottom: 2px solid #cccccc70;
              width: 100%;
              height: 30px;
            "
          ></div>
        </div>
        <br/> <br/> <br/> <br/>
      </slot>
          <div class="look-content-title">
            <span>投诉事件调查表</span>
          </div>
          <!-- 标题 -->
          <div class="look-content-top">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span
                    ><span>医院名称：</span
                    >{{ item.BasicInformation[0].H_Name }}</span
                  >
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple-light"></div
              ></el-col>
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
              <el-col :span="6"
                ><div class="grid-content bg-purple-light"></div
              ></el-col>
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
              <el-col :span="6"
                ><div class="grid-content bg-purple-light"></div
              ></el-col>
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
            <!-- 科室改进 -->
            <div v-if="item.Kaizen.length !== 0">
              <div
                class="box-Information"
                v-for="items in item.Kaizen"
                :key="items.K_Time"
              >
                <div class="box-top">
                  <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col :span="3" :push="2">
                      <div class="grid-content bg-purple">
                        <span
                          ><b>改进完成【{{ items.K_Identification }}】</b></span
                        >
                      </div></el-col
                    >
                    <el-col :span="3"
                      ><div class="grid-content bg-purple-light"></div
                    ></el-col>
                    <el-col :span="9" :pull="1"
                      ><div class="grid-content bg-purple">
                        <span><b>完成时间：</b>{{ items.K_Time }}</span>
                      </div></el-col
                    >
                  </el-row>
                </div>
                <div class="box-content">
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">改进科室：</span>
                      </div></el-col
                    >
                    <el-col :span="20"
                      ><div class="grid-content bg-purple-light">
                        <span class="value">{{ items.D_Name }}</span>
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
                        <span class="value">{{ items.PersonLiable }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">责任人：</span>
                      </div></el-col
                    >
                    <el-col :span="20"
                      ><div class="grid-content bg-purple-light">
                        <span class="value">{{ items.Person }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">根因分析：</span>
                      </div></el-col
                    >
                    <el-col :span="20"
                      ><div class="grid-content bg-purple-light">
                        <span class="value">{{ items.K_Analysis }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">责任意见：</span>
                      </div></el-col
                    >
                    <el-col :span="20"
                      ><div class="grid-content bg-purple-light">
                        <span class="value">{{ items.K_Opinion }}</span>
                      </div></el-col
                    >
                  </el-row>
                  <el-row>
                    <el-col :span="4"
                      ><div class="grid-content bg-purple">
                        <span class="label">整改措施：</span>
                      </div></el-col
                    >
                    <el-col :span="20"
                      ><div class="grid-content bg-purple-light">
                        <span class="value">{{ items.K_Measures }}</span>
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
                        v-for="itemsss in itemss[0].E_Name"
                        :key="itemsss.E_Name"
                      >
                        <span class="filename">{{ itemsss.E_Name }}</span>
                        <span class="filedetaile">查看</span>
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
                    <el-row
                      v-if="
                        it.A_Economic_Loss !== '' && it.A_Economic_Loss !== null
                      "
                    >
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">直接经济损失：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.A_Economic_Loss }}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Reject_Reasons">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">驳回原因：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{it.A_Reject_Reasons}}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.A_Return_Reasons">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">退回原因：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{it.A_Return_Reasons}}</span>
                        </div></el-col
                      >
                    </el-row>
                    <el-row v-if="it.CCDepartment">
                      <el-col :span="4"
                        ><div class="grid-content bg-purple">
                          <span class="label">抄送部门：</span>
                        </div></el-col
                      >
                      <el-col :span="20"
                        ><div class="grid-content bg-purple-light">
                          <span class="value">{{ it.CCDepartment }}</span>
                        </div></el-col
                      >
                    </el-row>

                    <div
                      style="border-bottom: 0.5px solid #797979; width: 100%"
                    ></div>
                    <div class="file clearfix">
                      <div
                        v-for="itemsssss in it.E_Name"
                        :key="itemsssss.E_Name"
                      >
                        <span class="filename">{{ itemsssss.E_Name }}</span>
                        <span class="filedetaile">查看</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
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
                      <span class="value">{{
                        item.ComplaintsInformation[0].C_I_Name
                      }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{
                        item.ComplaintsInformation[0].C_I_Gender
                      }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >{{ item.ComplaintsInformation[0].C_I_Age }}岁</span
                      >
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
                      <span class="value">{{
                        item.ComplaintsInformation[0].Complaint_Mode
                      }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">与患者关系：</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{
                        item.ComplaintsInformation[0].D_M_Name
                      }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">答复协商日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value"
                        >{{ item.ComplaintsInformation[0].Reply_Time }}日</span
                      >
                    </div></el-col
                  >
                </el-row>
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple">
                      <span class="label">经办人信息：</span>
                    </div></el-col
                  >
                  <el-col :span="20"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{
                        item.ComplaintsInformation[0].Ag_Name == null
                          ? "无"
                          : item.ComplaintsInformation[0].Ag_Name
                      }}</span>
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
                      <span class="value">{{
                        item.ComplaintsInformation[0].D_Name
                      }}</span>
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
                      <span class="value">{{
                        item.ComplaintsInformation[0].Complaint_Type
                      }}</span>
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
                      <span class="value">{{
                        item.ComplaintsInformation[0].Complain_Reason
                      }}</span>
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
              <hr v-show="item.PatientInformation.length !== 0" />
            </div>
            <!-- 患者信息 -->
            <div
              class="box-Information"
              v-show="item.PatientInformation.length !== 0"
              v-for="itemssss in item.PatientInformation"
              :key="itemssss.P_I_Name"
            >
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
                      <span class="value">{{ itemssss.P_I_Name }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">性别：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{ itemssss.P_I_Gender }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">年龄：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{ itemssss.P_I_Age }}</span>
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
                      <span class="value">{{ itemssss.Insurance_Type }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">手机：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{ itemssss.P_I_Phone }}</span>
                    </div></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple"></div>
                    <span class="label">最新就诊日期：</span></el-col
                  >
                  <el-col :span="4"
                    ><div class="grid-content bg-purple-light">
                      <span class="value">{{
                        itemssss.Hz_Diagnosis_Time
                      }}</span>
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
                      <span class="value">{{ itemssss.Inpatient_Area }}</span>
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
                      <span class="value">{{ itemssss.Ward_Number }}</span>
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
                      <span class="value">{{
                        itemssss.Hz_Outpatient_Diagnosis
                      }}</span>
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
  components: {},
  // props:['datas'],
  props: {
    datas: Array,
    // datas:function() {
    //   return this.sortKey(this.datas, "Time");
    // }
  },

  data() {
    return {
      data: [],
    };
  },
  methods: {},
  created() {
    // this.data=datas
  },
};
</script>
<style scoped>
@import "../css/look.css";
</style>
