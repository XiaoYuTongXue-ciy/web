<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <div class="wrap">
          <div class="wrap-box">
            <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadFile" />
            <a-button type="primary" class="export" @click="getExportData"> 导出 </a-button>
            <a-button type="primary" class="download"> 模板下载 </a-button>
          </div>
        </div>
        <a-button type="primary" @click="handleCreate"> 新增学生行规范 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
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
  import { getPageInfo, deleteItem } from '@/api/studentcodecfconduct';
  import { BasicUpload } from '/@/components/Upload';
  import { downloadByData } from '/@/utils/file/download';

  import { useDrawer } from '@/components/Drawer';
  import DetailDrawer from './detailDrawer.vue';

  import { columns, searchFormSchema } from './config';
  import { useMessage } from '@/hooks/web/useMessage';
  import dayjs from 'dayjs';

  const { notification } = useMessage();

  const [registerDrawer, { openDrawer }] = useDrawer();
  const [registerTable, { reload }] = useTable({
    title: '',
    api: getPageInfo,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      showAdvancedButton: true,
    },
    actionColOptions: {
      span: 4,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      fixed: undefined,
    },
  });

  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record) {
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
    reload();
  }

  function handleSuccess() {
    notification.success({
      message: '操作成功',
      duration: 2,
    });
    reload();
  }

  async function getExportData() {
    const data = await getExport({});
    // data 为接口返回文件流数据，如果你的接口嵌套一层那就逐层去取
    const currentTime = dayjs();
    const formattedTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
    downloadByData(data, `教材.xlsx  ${formattedTime}`);
  }

  const handleChange = (list) => {
    createMessage.info(`已上传文件${JSON.stringify(list)}`);
  };
</script>

<style scoped lang="less">
  .wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 18rem;
    margin-right: 3rem;

    .wrap-box {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
  }
</style>
