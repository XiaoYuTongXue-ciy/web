<template>
  <PageWrapper title="表单基础示例" contentFullHeight>
    <CollapseContainer title="基础示例">
      <BasicForm
        autoFocusFirstItem
        :labelWidth="200"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        @reset="handleReset"
      >
        <template #remoteSearch="{ model, field }">
          <ApiSelect
            :api="stugetPageInfo"
            showSearch
            v-model:value="model[field]"
            :filterOption="false"
            resultField="list"
            labelField="name"
            valueField="id"
            :params="searchParams"
            @search="useDebounceFn(onSearch, 300)"
          />
        </template>
      </BasicForm>
    </CollapseContainer>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { getPageInfo as stugetPageInfo } from '@/api/stuInfo'; // 学生
  import { BasicForm, ApiSelect, FormSchema } from '@/components/Form';
  import { useDebounceFn } from '@vueuse/core';
  import { computed, unref, ref } from 'vue';
  import { useMessage } from '@/hooks/web/useMessage';

  const { createMessage } = useMessage();
  const keyword = ref<string>('');
  const searchParams = computed<Recordable<string>>(() => {
    return { keyword: unref(keyword) };
  });

  function onSearch(value: string) {
    keyword.value = value;
  }

  function handleReset() {
    keyword.value = '';
  }

  function handleSubmit(values: any) {
    console.log('values', values);
    createMessage.success('click search,values:' + JSON.stringify(values));
  }

  const schemas: FormSchema[] = [
    {
      field: 'field32',
      // component: 'Input',
      label: '下拉远程搜索',
      helpMessage: ['ApiSelect组件', '将关键词发送到接口进行远程搜索'],
      required: true,
      slot: 'remoteSearch',
      colProps: {
        span: 8,
      },
      defaultValue: '0',
    },
  ];
</script>
