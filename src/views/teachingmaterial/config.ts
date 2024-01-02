import { BasicColumn, FormSchema } from '@/components/Table';
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    title: '学期',
    dataIndex: 'semester',
    width: 200,
  },
  {
    title: '教材名称',
    dataIndex: 'textbookname',
    width: 150,
  },
  {
    title: '出版社',
    dataIndex: 'publisher',
    width: 150,
  },
  {
    title: '价格/元',
    dataIndex: 'price',
    width: 80,
  },
  {
    title: '库存量',
    dataIndex: 'number',
    width: 150,
  },
  {
    title: '录入人员',
    dataIndex: 'createUserName',
    width: 100,
  },
  {
    title: '录入时间',
    dataIndex: 'createTime',
    width: 150,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'semesterId',
    label: '学期',
    component: 'ApiSelect',
    colProps: { span: 7 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'semester' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'publisher',
    label: '出版社',
    colProps: { span: 6 },
    component: 'Input',
  },
  {
    field: 'textbookname',
    label: '书名',
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
    field: 'semesterId',
    label: '学期',
    component: 'ApiSelect',
    colProps: { span: 15 },
    required: true,
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'semester' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'textbookname',
    label: '书名',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'publisher',
    label: '出版社',
    required: true,
    colProps: { span: 15 },
    component: 'Input',
  },
  {
    field: 'price',
    label: '单价',
    required: true,
    colProps: { span: 15 },
    component: 'InputNumber',
  },
  {
    field: 'number',
    label: '库存',
    required: true,
    colProps: { span: 15 },
    component: 'InputNumber',
  },
];
