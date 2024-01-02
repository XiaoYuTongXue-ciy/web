import { BasicColumn, FormSchema } from '@/components/Table';
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

export const columns: BasicColumn[] = [
  {
    title: '奖学金名称',
    dataIndex: 'scholarshipName',
    width: 200,
  },
  {
    title: '总额',
    dataIndex: 'amount',
    width: 180,
  },
  {
    title: '等级',
    dataIndex: 'scholarshiplevelName',
    width: 300,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'scholarshipName',
    label: '输入查询奖学金名称',
    component: 'Input',
    colProps: { span: 10 },
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'scholarshiplevelId',
    label: '奖学金等级',
    component: 'ApiSelect',
    rules: [{ required: true }],
    colProps: { span: 15 },
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'scholarship_level' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'scholarshipName',
    label: '奖学金名称',
    rules: [{ required: true }],
    component: 'Input',
  },
  {
    field: 'amount',
    label: '总额',
    rules: [{ required: true }],
    component: 'InputNumber',
  },

  {
    field: 'remark',
    label: '备注',
    component: 'Input',
  },
];
