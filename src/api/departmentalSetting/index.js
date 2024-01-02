import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/departmentalSetting';

const Api = {
  page: `${BASEURL}/page`,
  list: `${BASEURL}/list`,
  add: `${BASEURL}/add`,
  update: `${BASEURL}/update`,
  delete: `${BASEURL}/delete`,
};

// 列表页
export const getPageInfo = (params) =>
  defHttp.post({
    url: Api.page,
    params,
  });

// 详情
export const getGet = (params) =>
  defHttp.post({
    url: Api.list,
    params,
  });

//  新增
export const add = (params) =>
  defHttp.post({
    url: Api.add,
    params,
  });

//  更新
export const update = (params) =>
  defHttp.post({
    url: Api.update,
    params,
  });

// 删除
export const deleteItem = (params) =>
  defHttp.post({
    url: Api.delete,
    params,
  });
