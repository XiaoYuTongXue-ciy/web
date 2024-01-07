/* eslint-disable @typescript-eslint/no-unused-vars */
import { BasicColumn, FormSchema } from '@/components/Table';
import { useDictStore } from '@/store/modules/dict.js';
import { getUpload } from '@/api/internshipenterprisesetting';

const dictStore = useDictStore();

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
    dataIndex: 'cooperativeUnitNature ',
    customRender: ({ text, record }) => {
      const cities = record?.cooperativeUnitNature || [];
      return cities.join(',');
    },
    width: 120,
  },
  {
    title: '所在省市',
    dataIndex: 'unitArea',
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
    field: 'unitName',
    label: '企业名称',
    component: 'Input',
    colProps: { span: 7 },
  },
  {
    field: 'contactName',
    label: '企业联系人',
    component: 'Input',
    colProps: { span: 7 },
  },
  {
    field: 'contactPhone',
    label: '联系人电话',
    component: 'Input',
    colProps: { span: 7 },
  },
  {
    field: 'unitArea',
    label: '所在省市',
    component: 'Input',
    colProps: { span: 7 },
  },
];

// 是否上市
const IsOrNo: LabelValueOptions = [
  {
    label: '是',
    value: true,
  },
  {
    label: '否',
    value: false,
  },
];

export const addFormSchema: FormSchema[] = [
  {
    field: 'id',
    show: false,
    slot: '',
  },
  {
    field: 'recordYear',
    label: '备案日期',
    component: 'DatePicker',
  },
  {
    field: 'companyName',
    label: '输入企业名称',
    component: 'Input',
  },
  {
    field: 'owningSectorId',
    component: 'ApiCascader',
    label: '所属行业',
    componentProps: {
      dropdownMatchSelectWidth: true,
      filterOption: true,
      api: dictStore.getDictValueToCode,
      apiParamKey: 'Code',
      labelField: 'value',
      valueField: 'id',
      initFetchParams: {
        Code: 'owning_sector',
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      },
    },
  },
  {
    field: 'owningIndustryId',
    component: 'ApiCascader',
    label: '所属产业',
    componentProps: {
      dropdownMatchSelectWidth: true,
      api: dictStore.getDictValueToCode,
      apiParamKey: 'Code',
      labelField: 'value',
      valueField: 'id',
      initFetchParams: {
        Code: 'owning_industry',
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      },
    },
  },
  {
    field: 'professionalCategoryId',
    component: 'ApiCascader',
    label: '对应专业',
    componentProps: {
      expandTrigger: 'hover',
      dropdownMatchSelectWidth: true,
      filterOptionL: true,
      api: dictStore.getDictValueToCode,
      apiParamKey: 'Code',
      labelField: 'value',
      valueField: 'id',
      initFetchParams: {
        Code: 'professional_category',
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      },
    },
  },
  {
    field: 'cooperativeEnterpriseScaleId',
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
    field: 'enterpriseCreditCode',
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
    component: 'ApiCascader',
    label: '合作单位行政区域',
    componentProps: {
      dropdownMatchSelectWidth: true,
      api: dictStore.getDictValueToCode,
      apiParamKey: 'Code',
      labelField: 'value',
      valueField: 'id',
      initFetchParams: {
        Code: 'unit_area',
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      },
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
    field: 'contactPosition',
    label: '联系人职务',
    component: 'Input',
  },
  {
    field: 'contactPhone',
    label: '联系人电话',
    component: 'InputNumber',
  },
  {
    field: 'cooperativeUnitAttributeIds',
    label: '合作单位属性',
    component: 'ApiSelect',
    componentProps: {
      mode: 'multiple',
      api: dictStore.getDictValueToCode,
      params: { Code: 'cooperative_unit_attribute' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'cooperativeUnitNatureId',
    label: '合作单位性质',
    component: 'ApiSelect',
    componentProps: {
      mode: 'multiple',
      api: dictStore.getDictValueToCode,
      params: { Code: 'cooperative_unit_nature' },
      labelField: 'value',
      valueField: 'id',
    },
  },
  {
    field: 'cooperativeEnterpriseScaleId',
    label: '企业规模',
    component: 'Input',
  },
  {
    field: 'workforce',
    label: '职工人数',
    component: 'InputNumber',
  },
  {
    field: 'isBelisted',
    label: '是否上市',
    component: 'Select',
    componentProps: {
      options: IsOrNo,
    },
  },
  {
    field: 'isNationalTop500',
    label: '是否全国500强',
    component: 'Select',
    componentProps: {
      options: IsOrNo,
    },
  },
  {
    field: 'registeredCapital',
    label: '注册资本',
    component: 'Select',
    componentProps: {
      options: IsOrNo,
    },
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
    label: '学校考察报告',
    component: 'Input',
  },
  // {
  //   field: 'schoolEnterpriseAgreement',
  //   component: 'Upload',
  //   label: '校企合作协议',
  //   colProps: {
  //     span: 8,
  //   },
  //   rules: [{ required: true, message: '请选择上传文件' }],
  //   componentProps: {
  //     api: () => {
  //       getUpload({ uploadtype: 'schoolEnterpriseAgreement' });
  //     },
  //   },
  // },
  // {
  //   field: 'writtenReport',
  //   component: 'Upload',
  //   label: '学校考察报告',
  //   colProps: {
  //     span: 8,
  //   },
  //   rules: [{ required: true, message: '请选择上传文件' }],
  //   componentProps: {
  //     api: () => {
  //       getUpload({ uploadtype: 'writtenReport' });
  //     },
  //   },
  // },
];
