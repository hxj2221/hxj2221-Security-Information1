// 正式环境调用service（实际开发请查看该部分代码）
import service from '../util/request'
// mock数据直接调用axios
import axios from 'axios'

const qs = require('qs')
const baseUrl = '/'

export default  {
  // 登录
  login: async (data: Object) => {
    return await service.post(`${baseUrl}api/login/LoginCheck`, data).then(res => res).catch(err => err)
  },
<<<<<<< HEAD
  //上传附件
  uploadfilebase: async (data: Object) => {
    return await service.post(`${baseUrl}api/T_Enclosure/Upload`, data).then(res => res).catch(err => err)
  },
  //附件列表
  upfilelist: async (number: any, state: number) => {
    return await service.get(`${baseUrl}api/T_Enclosure/Gerlist`, { params: { number, state } }).then(res => res).catch(err => err)
  },
  //删除附件
  deleteupfilelist: async (data: any) => {
    return await service.post(`${baseUrl}api/T_Enclosure/DeleteFile`, data).then(res => res).catch(err => err)
  },
  //验证码
  VerificationCode: async () => {
    return await service.get(`${baseUrl}api/VerificationCode/VerificationCode`,).then(res => res).catch(err => err)
  },
  //记住密码
  remember: async () => {
    return await service.get(`${baseUrl}api/login/CheckdCookie`,).then(res => res).catch(err => err)
  },
  //退出
  Exit: async () => {
    return await service.get(`${baseUrl}api/login/Exit`,).then(res => res).catch(err => err)
  },
  // 投诉列表
  ComList: async (data: any, page: number, limit: number, id: number) => {
    return await service.get(`${baseUrl}api/T_DisInfor/Select`, { params: { data, page, limit, id } }).then(res => res).catch(err => err)
  },
  // 获取添加投诉列表信息
=======
// 投诉列表
  ComList: async (data:any,page:number,limit:number,id:number) => {
    return await service.get(`${baseUrl}api/T_DisInfor/Select`,{params:{data,page,limit,id}}).then(res => res).catch(err => err)
  },
// 获取添加投诉列表信息
>>>>>>> ecf3788304fcae81a992fdbafde4cd4735b33142
  AddCom: async () => {
    return await service.get(`${baseUrl}api/Page/Complaint`).then(res => res).catch(err => err)
  },
// 添加投诉
 AddComponent: async (data: any) => {
    return await service.post(`${baseUrl}api/T_DisInfor/Insert`,data ).then(res => res).catch(err => err)
  },
 // 获取字典下拉框信息 1 投诉人与患者的关系 2 事件状态 3 投诉类型 4 审批操作 5 投诉方式 6 轻重程度 7 不良类型 8 不良发生地点 9 责任度
 AddManaged: async (Identification:Number) => {
  return await service.get(`${baseUrl}api/T_DicManaged/DropDownList`,{params:{Identification:Identification}}).then(res => res).catch(err => err)
},
AddManageds: async (Identification:string) => {
  return await service.get(`${baseUrl}api/T_DicManaged/DropDownLists`,{params:{Identification:Identification}}).then(res => res).catch(err => err)
},
// 获取投诉科室下拉框信息
AddDepartment: async () => {
  return await service.get(`${baseUrl}api/T_Department/DepartmentSelect`).then(res => res).catch(err => err)
},
  deleteAdminList: async (params: any) => {
    return await service.delete(`${baseUrl}admin`, { params }).then(res => res).catch(err => err)
  },

  // 不良事件列表
  AdeList: async () => {
    return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  },
  // 不良新增
  badAdd: async (params:Object) => {
    return await service.post(`${baseUrl}api/bad/bad_add`,params).then(res => res).catch(err => err)
  },
  // 不良事件轻重程度
  // Weight: async () => {
  //   return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  // },
  // // 不良类型类型
  // badType: async () => {
  //   return await service.get(`${baseUrl}api/bad/lists`).then(res => res).catch(err => err)
  // },
  // 不良查看
  // badSee: async (params:Object) => {
  //   return await service.get(`${baseUrl}api/bad/bad_info`,params).then(res => res).catch(err => err)
  // },
  // 员工管理
  // 员工列表显示
  staffList: async (params:any,did:'',name:'') => {
    return await service.get(`${baseUrl}api/Permission_Level/GetList`,{params:{did,name}}).then(res => res).catch(err => err)
  },
  // 员工添加
  staffAdd: async (data:any) => {
    return await service.post(`${baseUrl}api/Permission_Level/InsertWorkers`,data).then(res => res).catch(err => err)
  },
  // 员工编号
  staffNum: async () => {
    return await service.get(`${baseUrl}api/Permission_Level/Number`).then(res => res).catch(err => err)
  },
  // 下拉框内容
  // 科室
  staffDepart: async () => {
    return await service.get(`${baseUrl}api/Permission_Level/GetDep`).then(res => res).catch(err => err)
  },
  // 角色
  staffRole: async () => {
    return await service.get(`${baseUrl}api/Permission_Level/GetRole`).then(res => res).catch(err => err)
  },
  // 员工状态
  staffState: async (params:any) => {
    return await service.post(`${baseUrl}api/Permission_Level/OutService`,params).then(res => res).catch(err => err)
  },
  // 员工编辑
  staffEdit: async (params:any) => {
    return await service.post(`${baseUrl}api/Permission_Level/UpdateWorkers`,params).then(res => res).catch(err => err)
  },
  // 编辑详情
  staffEditDetail: async (uid) => {
    return await service.get(`${baseUrl}api/Permission_Level/GetInformation`,{params:{uid}}).then(res => res).catch(err => err)
  },
  // 员工删除
  staffDel: async (data:Object) => {
    return await service.post(`${baseUrl}api/Permission_Level/NewDelete`,data).then(res => res).catch(err => err)
  },
  //
  getrole: async (params:Object) => {
    return await service.get(`${baseUrl}api/Employees/add`).then(res => res).catch(err => err)
  },
  // 科室管理
  // 列表
  DepList: async (params:any) => {
    return await service.get(`${baseUrl}api/T_Department/GetList`,{params}).then(res => res).catch(err => err)
  },
  // 新增
  DepAdd: async (params:Object) => {
    return await service.post(`${baseUrl}api/T_Department/NewInsert`,params).then(res => res).catch(err => err)
  },
<<<<<<< HEAD
  // 编辑详情
  DepEdit: async (params: any) => {
    return await service.get(`${baseUrl}api/T_Department/DepartmentDetails`, { params }).then(res => res).catch(err => err)
  },
  // 确认编辑
  DepSureEdit: async (params: any) => {
    return await service.post(`${baseUrl}api/T_Department/UpdateDepart`, params).then(res => res).catch(err => err)
  },
  // 删除
  DepDel: async (params: any) => {
    return await service.post(`${baseUrl}api/T_Department/NewDelete`, params).then(res => res).catch(err => err)
  },
  // 角色
  // 列表或搜索
  RoleList: async (params: any) => {
    return await service.get(`${baseUrl}api/T_Role/GetList`, { params }).then(res => res).catch(err => err)
  },
  // 状态
  RoleState: async (params: any) => {
    return await service.post(`${baseUrl}api/T_Role/OutService`, params).then(res => res).catch(err => err)
  },
  // 删除
  RoleDel: async (params: any) => {
    return await service.post(`${baseUrl}api/T_Role/DeleteRole`, params).then(res => res).catch(err => err)
  },
  // 权限列表
  powList: async (params: any) => {
    return await service.get(`${baseUrl}api/T_Permission/Qurey`, params).then(res => res).catch(err => err)
  },
  // 权限删除
  powDel: async (params: object) => {
    return await service.get(`${baseUrl}api/T_Permission/Delete`, { params }).then(res => res).catch(err => err)
  },
  // 权限编辑
  powEdit: async (params: object) => {
    return await service.get(`${baseUrl}api/T_Permission/GetOne`, { params }).then(res => res).catch(err => err)
  },
  // 权限保存
  powEditsave: async (params: any) => {
    return await service.post(`${baseUrl}api/T_Permission/Update`, params).then(res => res).catch(err => err)
  },
  // 权限添加
  powAdd: async (params: any) => {
    return await service.get(`${baseUrl}api/T_Permission/GetPname`, params).then(res => res).catch(err => err)
  },
  // 权限添加保存
  savepower: async (params: object) => {
    return await service.post(`${baseUrl}api/T_Permission/Insert`, params).then(res => res).catch(err => err)
  },
=======
 // 上级科室
 DepDepart: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Department/DeptHelper`,params).then(res => res).catch(err => err)
},
// 科室状态
DepState: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Department/DepState`,params).then(res => res).catch(err => err)
},
// 编辑详情
DepEdit: async (params:any) => {
  return await service.get(`${baseUrl}api/T_Department/DepartmentDetails`,{params}).then(res => res).catch(err => err)
},
// 确认编辑
DepSureEdit: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Department/UpdateDepart`,params).then(res => res).catch(err => err)
},
// 删除
DepDel: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Department/NewDelete`,params).then(res => res).catch(err => err)
},
// 角色
// 列表或搜索
RoleList: async (params:any) => {
  return await service.get(`${baseUrl}api/T_Role/GetList`,{params}).then(res => res).catch(err => err)
},
// 状态
RoleState: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Role/OutService`,params).then(res => res).catch(err => err)
},
// 删除
RoleDel: async (params:any) => {
  return await service.post(`${baseUrl}api/T_Role/DeleteRole`,params).then(res => res).catch(err => err)
},
// 获取个人信息
PerInfo: async (uid) => {
  return await service.get(`${baseUrl}api/Permission_Level/GetInformation`,{params:{uid}}).then(res => res).catch(err => err)
},
// 保存个人信息
PerInfoSure: async (params:any) => {
  return await service.post(`${baseUrl}api/Permission_Level/EditUser`,params).then(res => res).catch(err => err)
},
// 获取验证码
getCode: async (params:any) => {
  return await service.post(`${baseUrl}api/login/GetVerification`,params).then(res => res).catch(err => err)
},
// 校验
checkCode: async (params:any) => {
  return await service.post(`${baseUrl}api/login/CheckVerification`,params).then(res => res).catch(err => err)
},
// 发送邮箱
emailCode: async (params:any) => {
  return await service.post(`${baseUrl}api/login/QQ_email`,params).then(res => res).catch(err => err)
},
// 密码
// 获取验证码
CodePwd: async (params:any) => {
  return await service.post(`${baseUrl}api/Permission_Level/UpdatePwd`,params).then(res => res).catch(err => err)
},
// 权限列表
powList: async (params:any) => {
  return await service.get(`${baseUrl}api/T_Permission/Qurey`,params).then(res => res).catch(err => err)
},
// 权限删除
 powDel: async (params:object) => {
  return await service.get(`${baseUrl}api/T_Permission/Delete`,{params}).then(res => res).catch(err => err)
},
// 权限编辑
powEdit: async (params:object) => {
  return await service.get(`${baseUrl}api/T_Permission/GetOne`,{params}).then(res => res).catch(err => err)
},
>>>>>>> ecf3788304fcae81a992fdbafde4cd4735b33142
}