import { BasicColumn, FormSchema } from '/@/components/Table';

import { getDictValueByCode } from '@/api/sysDict/dictType';
import { getListInfo } from '@/api/major';

export const columns: BasicColumn[] = [
  {
    title: '课程编号',
    dataIndex: 'courseCode',
    width: 200,
  },
  {
    title: '课程名',
    dataIndex: 'courseName',
    width: 180,
  },
  {
    title: '课程类别',
    dataIndex: 'courseCategoryName',
    width: 180,
  },
  {
    title: '学时分配(课程理论)',
    dataIndex: 'theoreticalHours',
    width: 180,
  },
  {
    title: '学时分配(课堂实践)',
    dataIndex: 'practicehours',
    width: 180,
  },
  {
    title: '学时分配(实习实践)',
    dataIndex: 'internshiphours',
    width: 180,
  },
  {
    title: '学分',
    dataIndex: 'credit',
    width: 180,
  },

  {
    title: '考察方式',
    dataIndex: 'assessmentModeName',
    width: 180,
  },

  {
    title: '课时',
    dataIndex: 'classhours',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'majorname',
    label: '专业名称',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'courseCategory',
    label: '课程类别',
    component: 'ApiSelect',
    colProps: { span: 5 },
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'course_category' },
      resultField: 'items',
      labelField: 'remark',
      valueField: 'id',
    },
  },
  {
    field: 'gradeId',
    label: '年级',
    component: 'ApiSelect',
    colProps: { span: 5 },
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'grade' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'schoolYear',
    label: '学年',
    component: 'InputNumber',
    colProps: { span: 5 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
  },
  {
    field: 'courseCode',
    label: '课程编号',
    required: true,
    component: 'Input',
  },
  {
    field: 'courseName',
    label: '课程名',
    required: true,
    // subLabel: '( 选填 )',
    component: 'Input',
  },
  {
    field: 'courseCategoryId',
    label: '课程类别',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'course_category' },
      resultField: 'items',
      labelField: 'remark',
      valueField: 'id',
    },
  },
  {
    field: 'majorId',
    label: '专业类别',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getListInfo,
      labelField: 'majorname',
      valueField: 'id',
      immediate: true,
    },
  },
  {
    field: 'gradeId',
    label: '年级',
    component: 'ApiSelect',
    required: true,
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'grade' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'semesterId',
    label: '学期',
    required: true,
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'semester' },
      labelField: 'value',
      valueField: 'id',
    },
    component: 'ApiSelect',
  },
  {
    field: 'credit',
    label: '学分',
    required: true,
    component: 'InputNumber',
    componentProps: {
      min: 0,
    },
  },
  {
    field: 'theoreticalHours',
    label: '学时分配(课程理论)',
    required: true,
    component: 'InputNumber',

    componentProps: {
      min: 0,
      formatter: (value: string) => (value ? `${value}H` : ''),
      parser: (value: string) => value.replace('H', ''),
      placeholder: '请输入',
    },
  },
  {
    field: 'practicehours',
    label: '学时分配(课堂实践)',
    // required: true,
    component: 'InputNumber',
    componentProps: {
      min: 0,
      formatter: (value: string) => (value ? `${value}H` : ''),
      parser: (value: string) => value.replace('H', ''),
      placeholder: '请输入',
    },
    // changeEvent: 'formChange',
  },
  {
    field: 'internshiphours',
    label: '学时分配(实习实践)',
    required: true,
    component: 'InputNumber',
    componentProps: {
      min: 0,
      formatter: (value: string) => (value ? `${value}H` : ''),
      parser: (value: string) => value.replace('H', ''),
      placeholder: '请输入',
    },
  },
  {
    field: 'totalhours',
    label: '总学时(实习实践)',
    required: true,
    component: 'InputNumber',
    componentProps: {
      min: 0,
      formatter: (value: string) => (value ? `${value}H` : ''),
      parser: (value: string) => value.replace('H', ''),
      placeholder: '请输入',
    },
  },

  {
    field: 'assessmentModeId',
    label: '考察方式',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getDictValueByCode,
      params: { Code: 'assessment_mode' },
      labelField: 'value',
      valueField: 'id',
    },
  },

  {
    field: 'classhours',
    label: '课时',
    required: true,
    component: 'InputNumber',
    componentProps: {
      min: 0,
      formatter: (value: string) => (value ? `${value}H` : ''),
      parser: (value: string) => value.replace('H', ''),
      placeholder: '请输入',
    },
  },
];
