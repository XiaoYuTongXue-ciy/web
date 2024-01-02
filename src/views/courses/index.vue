<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增课程 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template
          v-if="
            ['theoreticalHours', 'practicehours', 'internshiphours', 'classhours'].includes(
              column.key,
            )
          "
        >
          {{ `${record[column.key]}H` }}
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
      </template>
    </BasicTable>
    <DetailDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getPageInfo, deleteItem } from '@/api/course';
  import { useDrawer } from '@/components/Drawer';
  import DetailDrawer from './detailDrawer.vue';
  import { columns, searchFormSchema } from './config';
  import { useMessage } from '@/hooks/web/useMessage';

  const { notification } = useMessage();

  const [registerDrawer, { openDrawer }] = useDrawer();
  const [registerTable, { reload }] = useTable({
    title: '',
    api: getPageInfo,
    columns,
    formConfig: {
      labelWidth: 85,
      schemas: searchFormSchema,
      actionColOptions: {
        span: 4,
      },
      showAdvancedButton: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    indexColumnProps: {
      fixed: 'left',
    },
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      fixed: 'right',
    },
  });

  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record) {
    console.log('record', record);
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }

  async function handleDelete(record) {
    await deleteItem({ id: record.id });
    notification.success({
      message: '操作成功',
      duration: 2,
    });
  }

  function handleSuccess() {
    notification.success({
      message: '操作成功',
      duration: 2,
    });
    reload();
  }
</script>
