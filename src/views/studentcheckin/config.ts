import { BasicColumn, FormSchema } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '房号',
    dataIndex: 'studentName',
    width: 100,
  },
  {
    title: '在寝人数',
    dataIndex: 'studentnumber',
    width: 100,
  },
  {
    title: '请假寝人数',
    dataIndex: 'className',
    width: 100,
  },
  {
    title: '房号',
    dataIndex: 'majorName',
    width: 100,
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
    field: '',
    label: '查寝日期',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: '',
    label: '楼栋',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: '',
    label: '楼层',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: '',
    label: '房号',
    component: 'Input',
    colProps: { span: 6 },
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
    field: 'remark',
    label: '备注',
    colProps: { span: 15 },
    component: 'Input',
  },
];
