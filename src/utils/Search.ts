import { debounce } from 'lodash-es';
import { computed, unref, ref } from 'vue';

const keyword = ref<string>('');
export const searchParams = computed<Recordable<string>>(() => {
  return { Name: unref(keyword) };
});

export const onSearch = debounce((e) => {
  keyword.value = e.target._value;
}, 500);
