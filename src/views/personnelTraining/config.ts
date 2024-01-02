import { BasicColumn, FormSchema } from '/@/components/Table';

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
    dataIndex: 'courseCategory',
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
    dataIndex: 'assessment',
    width: 180,
  },

  {
    title: '学年',
    dataIndex: 'schoolYear',
    width: 180,
  },

  {
    title: '课时',
    dataIndex: 'classhours',
    width: 180,
  },

  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'majorId',
    label: '专业',
    required: true,
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'courseCategory',
    label: '课程类别',
    required: true,
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'grade',
    label: '年级',
    required: true,
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'schoolYear',
    label: '学年',
    required: true,
    component: 'Input',
    colProps: { span: 5 },
  },

  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '1' },
  //       { label: '停用', value: '0' },
  //     ],
  //   },
  // },
];

const courseCategoryOptions: LabelValueOptions = [
  {
    label: '公共基础课',
    value: '0',
  },
  {
    label: '专业基础课',
    value: '1',
  },
  {
    label: '专业核心课',
    value: '2',
  },
  {
    label: '专业实训课',
    value: '3',
  },
];
const assessmentOptions: LabelValueOptions = [
  {
    label: '考试',
    value: '0',
  },
  {
    label: '考查',
    value: '1',
  },
];

const schoolYearOptions: LabelValueOptions = [
  {
    label: '第一',
    value: '0',
  },
  {
    label: '第二 ',
    value: '1',
  },
  {
    label: '第三',
    value: '2',
  },
];
const ssemesterOptions: LabelValueOptions = [
  {
    label: '秋季',
    value: '0',
  },
  {
    label: '冬季 ',
    value: '1',
  },
];

export const formSchema: FormSchema[] = [
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
    component: 'Input',
  },
  {
    field: 'courseCategory',
    label: '课程类别',
    required: true,
    component: 'Select',
    componentProps: {
      options: courseCategoryOptions,
    },
  },
  {
    field: 'theoreticalHours',
    label: '学时分配(课程理论)',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'practicehours',
    label: '学时分配(课堂实践)',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'internshiphours',
    label: '学时分配(实习实践)',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'totalhours',
    label: '总学时(实习实践)',
    required: true,
    component: 'InputNumber',
  },
  {
    field: 'credit',
    label: '学分',
    required: true,
    component: 'InputNumber',
  },

  {
    field: 'assessment',
    label: '考察方式',
    required: true,
    componentProps: {
      options: assessmentOptions,
    },
    component: 'Input',
  },
  {
    field: 'schoolYear',
    label: '学年',
    required: true,
    componentProps: {
      options: schoolYearOptions,
    },
    component: 'Input',
  },
  // semester
  {
    field: 'semester',
    label: '学期',
    required: true,
    componentProps: {
      options: ssemesterOptions,
    },
    component: 'Input',
  },
  // classhours
  {
    field: 'classhours',
    label: '课时',
    required: true,
    component: 'InputNumber',
  },
];
