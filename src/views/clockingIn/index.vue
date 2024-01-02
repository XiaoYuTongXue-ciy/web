<template>
  <div>
    <BasicTable @register="registerTable">
      <!-- <template #expandedRowRender="{ record }">
        <span>No: {{ record }} </span>
      </template> -->
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleInfo.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <!-- <template v-if="column.key === 'signInRate'"> {{ `${record.signInRate}%` }} </template> -->
      </template>
      <template #form-localSearch="{ model, field }">
        <ApiSelect
          :api="getUserList"
          showSearch
          v-model:value="model[field]"
          optionFilterProp="label"
          resultField="items"
          labelField="realName"
          valueField="id"
        />
      </template>
    </BasicTable>
    <ClockingInDrawer @register="registerDrawer" @success="handleSuccess" @error="handleError" />
    <DetailModal @register="registerModal" />
  </div>
</template>
<script setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { ApiSelect } from '@/components/Form';
  import { getPageInfo as getUserList } from '@/api/sysUser/index.js';
  import { getPageInfo } from '@/api/clockingIn';

  import ClockingInDrawer from './components/clockingInDrawer.vue';
  import DetailModal from './components/detailModal.vue';

  import { useDrawer } from '@/components/Drawer';
  import { useModal } from '@/components/Modal';

  import { MessageEnum } from '@/enums/MessageEnum.ts';
  import { useMessage } from '@/hooks/web/useMessage';

  import { columns, searchFormSchema } from './config';

  const { notification } = useMessage();

  const [registerDrawer, { openDrawer }] = useDrawer();
  const [registerModal, { openModal }] = useModal({});
  const [registerTable, { reload }] = useTable({
    title: '',
    api: getPageInfo,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      actionColOptions: {
        span: 11,
      },
      alwaysShowLines: 1,
    },

    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    expandRowByClick: true,
    isTreeTable: true,

    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  function handleEdit(record) {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record) {
    console.log(record);
  }

  function handleSuccess() {
    notification.success({
      message: MessageEnum.SUCCESS,
      duration: 2,
    });
    reload();
  }

  function handleError() {
    notification.error({
      message: MessageEnum.ERROR,
      duration: 2,
    });
    reload();
  }

  function handleInfo(record) {
    console.log('rec', record);
    openModal(true, {
      id: record.id,
    });
  }
</script>
