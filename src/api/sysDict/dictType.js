import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/sysDictType';

const Api = {
  page: `${BASEURL}/page`,
  codeToValue: `${BASEURL}/dataList`,
};

// 获取所有字典类型
export function getAllDictTypes() {
  return defHttp.post({
    url: Api.page,
  });
}

// 通过code找枚举值
export function getDictValueByCode(params) {
  return defHttp.get({
    url: Api.codeToValue,
    params,
  });
}
