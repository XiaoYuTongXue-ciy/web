import { BasicColumn, FormSchema } from '@/components/Table'; // 奖学金
import { getListInfo } from '@/api/sysOrg';

export const columns: BasicColumn[] = [
  {
    title: '学校名称',
    dataIndex: 'schoolName',
    width: 200,
  },
  {
    title: '系部',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 100,
  },
];
// 查询
export const searchFormSchema: FormSchema[] = [
  {
    field: 'schoolId',
    label: '学校名称',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getListInfo,
      params: 'schoolName',
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'name',
    label: '系部',
    component: 'Input',
    colProps: { span: 7 },
  },
];

// 新增
export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'schoolId',
    label: '学校',
    component: 'ApiSelect',
    colProps: { span: 15 },
    componentProps: {
      api: getListInfo,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'name',
    label: '系部',
    component: 'Input',
    colProps: { span: 15 },
  },
  {
    field: 'remark',
    label: '备注',
    component: 'Input',
    colProps: { span: 15 },
  },
];
