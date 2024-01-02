import { BasicColumn, FormSchema } from '@/components/Table';
import { getListInfo } from '@/api/major';
import { getPageInfo } from '@/api/sysUser';
import { getListInfo as getClassListInfo } from '@/api/classes';
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    title: '学生编号',
    dataIndex: 'studentnumber',
    customRender: ({ record }) => {
      return record.studentInfo?.studentnumber;
    },
    width: 200,
  },
  {
    title: '学生名称',
    dataIndex: 'name',
    customRender: ({ record }) => {
      return record.studentInfo?.name;
    },
    width: 180,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    customRender: ({ record }) => {
      return record.studentInfo?.name ? '男' : '女';
    },
    width: 180,
  },
  {
    title: '手机号',
    dataIndex: 'phonenumber',
    customRender: ({ record }) => {
      return record.studentInfo?.phonenumber?.[0];
    },
    width: 180,
  },
  {
    title: '身份证号',
    dataIndex: 'studentInfo',
    customRender: ({ record }) => {
      return record.studentInfo?.idcard;
    },
    width: 180,
  },
  {
    title: '籍贯',
    dataIndex: 'studentInfo',
    customRender: ({ record }) => {
      return record.studentInfo?.hometown;
    },
    width: 180,
  },
  {
    title: '民族',
    dataIndex: 'studentInfo',
    customRender: ({ record }) => {
      return record.studentInfo?.hationality;
    },
    width: 180,
  },
  {
    title: '政治面貌',
    dataIndex: 'studentInfo',
    customRender: ({ record }) => {
      return record.studentInfo?.politicalstatus;
    },
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '姓名',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'studentnumber',
    label: '学号',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'building',
    label: '楼栋',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'majorId',
    label: '专业',
    component: 'ApiSelect',
    colProps: { span: 6 },
    componentProps: {
      api: getListInfo,
      labelField: 'majorname',
      valueField: 'id',
    },
  },
  {
    field: 'gradeId',
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
    field: 'classId',
    label: '班级',
    component: 'ApiSelect',
    colProps: { span: 6 },
    componentProps: {
      api: getClassListInfo,
      labelField: 'classname',
      valueField: 'id',
      immediate: true,
    },
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
  },
  {
    field: 'classnumber',
    label: '班级编号',
    required: true,
    component: 'Input',
  },
  {
    field: 'classname',
    label: '班级名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'majorid',
    component: 'ApiSelect',
    label: '专业',
    componentProps: {
      api: getListInfo,
      labelField: 'majorname',
      valueField: 'id',
      immediate: true,
    },
  },
  {
    field: 'teacherid',
    component: 'ApiSelect',
    label: '班主任',
    componentProps: {
      api: getPageInfo,
      resultField: 'items',
      labelField: 'account',
      valueField: 'id',
      immediate: true,
    },
  },

  {
    field: 'remark',
    label: '备注',
    required: true,
    component: 'Input',
  },
];
