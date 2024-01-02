import { BasicColumn, FormSchema } from '@/components/Table';
import { getListInfo as getMajorListInfo } from '@/api/major'; // 专业
import { getListInfo as getSchoolListInfo } from '@/api/sysOrg'; // 学校
import { getListInfo as getClassListInfo } from '@/api/classes'; // 班级
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    title: '学校信息',
    dataIndex: 'schoolName',
    width: 150,
  },
  {
    title: '系部名称',
    dataIndex: 'departmentName',
    width: 150,
  },
  {
    title: '年级',
    dataIndex: 'grade',
    width: 50,
  },
  {
    title: '专业',
    dataIndex: 'majorName',
    width: 150,
  },
  {
    title: '班级名称',
    dataIndex: 'className',
    width: 80,
  },
  {
    title: '学号',
    dataIndex: 'studentNumber',
    width: 100,
  },
  {
    title: '学生姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '性别',
    dataIndex: 'genderDescription',
    width: 50,
  },
  {
    title: '身份证号',
    dataIndex: 'idCardNumber',
    width: 180,
  },
  {
    title: '手机号',
    dataIndex: 'contactPhone',
    width: 150,
  },
  {
    title: '学籍状态',
    dataIndex: 'studentStatus',
    width: 150,
  },
  // {
  //   title: '政治面貌',
  //   dataIndex: 'studentInfo',
  //   customRender: ({ record }) => {
  //     return record.studentInfo?.politicalstatus;
  //   },
  //   width: 180,
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'SchoolId',
    label: '学校名称',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getSchoolListInfo,
      params: 'schoolName',
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'MajorId',
    label: '专业',
    component: 'ApiSelect',
    colProps: { span: 6 },
    componentProps: {
      api: getMajorListInfo,
      labelField: 'majorname',
      valueField: 'id',
    },
  },
  {
    field: 'GradeId',
    label: '年级',
    component: 'ApiSelect',
    colProps: { span: 6 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'grade' },
      labelField: 'value',
      valueField: 'id',
      immediate: true,
    },
  },
  {
    field: 'ClassId',
    label: '班级',
    component: 'ApiSelect',
    colProps: { span: 6 },
    componentProps: {
      api: getClassListInfo,
      labelField: 'className',
      valueField: 'id',
    },
  },
  {
    field: 'Name',
    label: '姓名',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'StudentNumber',
    label: '学号',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'StudentStatusId',
    label: '学籍状态',
    colProps: { span: 6 },
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'student_status ' },
      labelField: 'value',
      valueField: 'id',
    },
  },
];

// 性别
const gender: LabelValueOptions = [
  {
    label: '未说明性别',
    value: '0',
  },
  {
    label: '男',
    value: '1',
  },
  {
    label: '女',
    value: '2',
  },
  {
    label: '其他',
    value: '3',
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'studentNumber',
    label: '学号',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'name',
    label: '姓名',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'gender',
    label: '性别',
    required: true,
    colProps: { span: 15 },
    component: 'Select',
    componentProps: {
      options: gender,
    },
  },
  {
    field: 'idCardNumber',
    label: '身份证号',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'ethnicGroupId',
    component: 'ApiSelect',
    label: '民族',
    required: true,
    colProps: { span: 15 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'ethnic_group' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'politicalProfileId',
    component: 'ApiSelect',
    label: '政治面貌',
    required: true,
    colProps: { span: 15 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'political_profile' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'examRegistrationNumber',
    label: '中考报名号',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'admissionTicketNumber',
    label: '准考证号',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'examinationTypeId',
    component: 'ApiSelect',
    label: '考试类型',
    required: true,
    colProps: { span: 15 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'examination_type' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'juniorHighSchool',
    label: '初中学校',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'examgrades',
    label: '中考成绩',
    colProps: { span: 15 },
    component: 'InputNumber',
  },
  {
    field: 'examVolunteer',
    label: '中考志愿',
    colProps: { span: 15 },
    component: 'InputNumber',
  },
  {
    field: 'admissionSpecialty',
    label: '录取专业',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'homeAddress',
    label: '家庭地址',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'PostalCode',
    label: '邮政编码',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'contactPhone',
    label: '联系电话',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'qq',
    label: 'QQ',
    colProps: { span: 15 },
    component: 'InputNumber',
  },
  {
    field: 'wechat',
    label: '  微信',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'remark',
    label: '备注',
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'studentStatusId',
    label: '学籍状态',
    colProps: { span: 15 },
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'student_status' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'classId',
    label: '班级',
    required: true,
    component: 'ApiSelect',
    colProps: { span: 15 },
    componentProps: {
      api: getClassListInfo,
      labelField: 'className',
      valueField: 'id',
      immediate: true,
    },
  },
  {
    field: 'familyId',
    label: '家长',
    colProps: { span: 15 },
    component: 'Input',
  },
];
