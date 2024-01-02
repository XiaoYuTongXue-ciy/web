import { BasicColumn, FormSchema } from '@/components/Table';
import { getListInfo } from '@/api/major';
import { getPageInfo } from '@/api/sysUser';
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    title: '班级编号',
    dataIndex: 'classNumber',
    width: 200,
  },
  {
    title: '班级名称',
    dataIndex: 'className',
    width: 180,
  },
  {
    title: '专业',
    dataIndex: 'majorInfo.majorName',
    customRender: ({ record }) => {
      return record?.majorInfo?.majorName;
    },
    width: 180,
  },
  {
    title: '班主任',
    dataIndex: 'user.realName',
    customRender: ({ record }) => {
      return record?.user?.realName;
    },
    width: 180,
  },
  // stuCount
  {
    title: '人数',
    dataIndex: 'stuCount',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'teachername',
    label: '班主任',
    component: 'ApiSelect',
    colProps: { span: 5 },
    componentProps: {
      api: getPageInfo,
      resultField: 'items',
      labelField: 'account',
      valueField: 'id',
    },
  },
  {
    field: 'classname',
    label: '班级名称',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'grade',
    label: '年级',
    component: 'ApiSelect',
    colProps: { span: 5 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'grade' },
      labelField: 'value',
      valueField: 'code',
    },
  },
  {
    field: 'majorid',
    label: '专业',
    component: 'ApiSelect',
    colProps: { span: 5 },
    componentProps: {
      api: getListInfo,
      labelField: 'majorname',
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
