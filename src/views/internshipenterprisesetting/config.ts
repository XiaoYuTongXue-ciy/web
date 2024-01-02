import { BasicColumn, FormSchema } from '@/components/Table';
import { useDictStore } from '@/store/modules/dict.js';

const dictStore = useDictStore();

// 数据联动

const DataCascader = async () => {
  await dictStore
    .getDictValueToCode({ Code: 'owning_sector' })
    .then((res) => {
      console.log(res);
      Data(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Data = (arr, children = []) => {
  arr.forEach((items) => {
    if (items.children) {
      children.push({ value: items.value, id: items.id, children: Data(items.children) });
    }
  });
  console.log(children);
  return children;
};
console.log(DataCascader());

export const columns: BasicColumn[] = [
  {
    title: '企业名称',
    dataIndex: 'unitName',
    width: 150,
  },
  {
    title: '企业信用代码',
    dataIndex: 'enterpriseCreditCode',
    width: 180,
  },
  {
    title: '企业联系人',
    dataIndex: 'contactName',
    width: 100,
  },
  {
    title: '企业联系电话',
    dataIndex: 'contactPhone',
    width: 120,
  },
  {
    title: '企业规模',
    dataIndex: 'cooperativeEnterpriseScale',
    width: 120,
  },
  {
    title: '企业性质',
    dataIndex: '',
    width: 120,
  },
  {
    title: '所在省市',
    dataIndex: 'unitArea',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customRender: ({ text, record }) => {
      const cities = record?.unitArea || [];
      return cities.join(',');
    },
    width: 150,
  },

  {
    title: '备注',
    dataIndex: 'remark',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'companyName',
    label: '输入企业名称',
    component: 'Input',
    colProps: { span: 7 },
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'companyName',
    label: '输入企业名称',
    component: 'Input',
  },
  {
    field: 'owning_sector',
    label: '所属行业',
    component: 'Select',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'owning_sector' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'owningIndustryId',
    label: '所属产业',
    component: 'Select',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'professional_category' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'professionalCategoryId',
    label: '对应专业',
    component: 'ApiSelect',
    // required: true,
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'professional_category' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'companysize',
    label: '公司规模',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'cooperative_enterprise_scale' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'contactperson',
    label: '企业信用代码',
    component: 'Input',
  },
  {
    field: 'organizationCode',
    label: '企业机构代码',
    component: 'Input',
  },
  {
    field: 'legalRepresentativeName',
    label: '企业法人名称',
    component: 'Input',
  },
  {
    field: 'unitAreaId',
    label: '合作单位行政区域',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'unit_area' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'unitAddress',
    label: '单位地址',
    component: 'Input',
  },
  {
    field: 'contactperson',
    label: '企业联系人',
    component: 'Input',
  },
  {
    field: 'contactPhone',
    label: '联系人电话',
    component: 'InputNumber',
  },
  {
    field: 'cooperativeUnitAttributeIds',
    label: '合作单位性质',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'cooperative_unit_attribute' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'cooperativeEnterpriseScaleId',
    label: '企业规模',
    component: 'InputNumber',
  },
  {
    field: 'cooperativeEnterpriseScaleId',
    label: '职工人数',
    component: 'InputNumber',
  },
  {
    field: 'cooperationNatureId',
    label: '合作性质',
    component: 'ApiSelect',
    componentProps: {
      api: dictStore.getDictValueToCode,
      params: { Code: 'cooperation_nature' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'enterpriseIntroduction',
    label: '企业慨述',
    component: 'Input',
  },
  {
    field: 'schoolEnterpriseAgreement',
    label: '校企合作协议',
    component: 'Input',
  },
  {
    field: 'writtenReport',
    component: 'Upload',
    label: '学校考察报告',
    colProps: {
      span: 8,
    },
    rules: [{ required: true, message: '请选择上传文件' }],
    componentProps: {
      api: 'uploadApi',
    },
  },
  {
    field: 'remark',
    label: '备注',
    component: 'Input',
  },
];
