import { BasicColumn, FormSchema } from '@/components/Table';
import { getPageInfo } from '@/api/departmentalSetting';
import { getPageInfo as getUserPageInfo } from '@/api/sysUser';

export const columns: BasicColumn[] = [
  {
    title: '系部',
    dataIndex: 'departmentName',
    width: 180,
  },
  {
    title: '专业编号',
    dataIndex: 'majorcode',
    width: 200,
  },
  {
    title: '专业名称',
    dataIndex: 'majorname',
    width: 180,
  },
  {
    title: '专业描述',
    dataIndex: 'majordescription',
    width: 180,
  },
  {
    title: '学制',
    dataIndex: 'majorduration',
    width: 180,
  },
  {
    title: '相关链接',
    dataIndex: 'relatedlinks',
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
    field: 'majorname',
    label: '专业名称',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'majorduration',
    label: '学制',
    component: 'InputNumber',
    colProps: { span: 5 },
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'departmentId',
    label: '系部',
    required: true,
    component: 'ApiSelect',
    colProps: { span: 15 },
    componentProps: {
      resultField: 'items',
      api: getPageInfo,
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'accredteacher',
    label: '主任授课老师',
    required: true,
    component: 'ApiSelect',
    colProps: { span: 20 },
    componentProps: {
      resultField: 'items',
      mode: 'multiple',
      api: getUserPageInfo,
      labelField: 'realName',
      valueField: 'id',
    },
  },
  {
    field: 'partteacher',
    label: '兼任授课老师',
    required: true,
    component: 'ApiSelect',
    colProps: { span: 20 },
    componentProps: {
      mode: 'multiple',
      resultField: 'items',
      api: getUserPageInfo,
      labelField: 'realName',
      valueField: 'id',
    },
  },
  {
    field: 'majorcode',
    label: '专业编号',
    required: true,
    component: 'Input',
  },
  {
    field: 'majorname',
    label: '专业名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'majordescription',
    label: '专业描述',
    required: true,
    component: 'Input',
  },
  {
    field: 'majorduration',
    label: '学制',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'relatedlinks',
    label: '链接',
    required: true,
    component: 'Input',
  },
  {
    field: 'remark',
    label: '备注',
    required: true,
    component: 'Input',
  },
];
