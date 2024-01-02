import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/dBCourses';

const Api = {
  page: `${BASEURL}/page`,
  detail: `${BASEURL}/course`,
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
export const getDetailInfo = (params) =>
  defHttp.post({
    url: Api.detail,
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
