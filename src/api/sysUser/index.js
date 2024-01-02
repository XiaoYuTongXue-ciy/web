import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/sysUser';

const Api = {
  page: `${BASEURL}/page`,
};

// 列表页
export const getPageInfo = () =>
  defHttp.post({
    url: Api.page,
  });
