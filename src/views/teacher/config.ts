import { BasicColumn, FormSchema } from '@/components/Table';
import { useDictStore } from '@/store/modules/dict.js';
import { genderOptions, genderMap } from './utils';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: '工号',
    dataIndex: 'jobNumber',
    width: 50,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 50,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 50,
    customRender: ({ record }) => {
      return record?.gender ? genderMap[record?.gender] : '';
    },
  },
  {
    title: '现任岗位类别',
    dataIndex: 'currentJobCategory',
    width: 100,
  },
  {
    title: '现任岗位等级',
    dataIndex: 'currentJoblevel',
    width: 100,
  },
  {
    title: '聘用类型',
    dataIndex: 'employmentCategory',
    width: 80,
  },
  {
    title: '政治面貌',
    dataIndex: 'politicalProfile',
    width: 100,
  },
  {
    title: '移动电话',
    dataIndex: 'mobileTelephone',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'Name',
    label: '姓名',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'StudentNumber',
    label: '工号',
    colProps: { span: 6 },
    component: 'Input',
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'jobNumber',
    label: '工号',
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
      options: genderOptions,
    },
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
    field: 'documentType',
    label: '证件类型',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'document_type' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'certificateNumber',
    label: '身份证号',
    component: 'InputNumber',
  },
  {
    field: 'highestDegreelevelId',
    label: '最高学位层次',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'highest_degree_level' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'politicalProfileId',
    component: 'ApiSelect',
    label: '政治面貌',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'political_profile' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'teacherTypeId',
    label: '教师类型',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'teacher_type' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'currentJobCategoryId',
    label: '现任岗位类别',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'current_post_category' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'currentJoblevelId',
    label: '岗位等级',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'current_post_level' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'jobCategoryId',
    label: '兼任岗位类别',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'part_time_job_category' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'legalRepresentativeNameId',
    label: '兼任岗位等级',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'current_post_level' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'currentStateId',
    label: '当前状态',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'current_state' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'onDutySituationId',
    label: '在岗情况',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'in_service_situation' },
      labelField: 'value',
      valueField: 'id',
    },
  },

  {
    field: 'facultySourceId',
    label: '教职工来源',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'faculty_source' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'employmentCategoryId',
    label: '聘请类别',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'employment_category' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'highestEducation',
    label: '最高学历',
    component: 'ApiCascader',
    componentProps: {
      api: dictStore.getDictValueToCode,
      initFetchParams: {
        Code: 'highest_education',
      },
      dynamicFetch: false,
      expandTrigger: 'hover',
      childrenField: 'children',
      labelField: 'value',
      valueField: 'id',
      isLeaf: (record) => {
        return !record.children.length;
      },
    },
  },
  {
    field: 'semesterId',
    label: '考试类型',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'examination_type' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'facultyCategory',
    label: '教职工类别',
    component: 'ApiCascader',
    componentProps: {
      api: dictStore.getDictValueToCode,
      initFetchParams: {
        Code: 'faculty_category',
      },
      dynamicFetch: false,
      expandTrigger: 'hover',
      childrenField: 'children',
      apiParamKey: 'id',
      labelField: 'value',
      valueField: 'id',
      isLeaf: (record) => {
        return !record.children.length;
      },
    },
  },
  {
    field: 'mobileTelephone',
    label: '联系电话',
    component: 'InputNumber',
  },
];
