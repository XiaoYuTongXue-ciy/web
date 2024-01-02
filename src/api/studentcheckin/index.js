import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/dormitory';

const Api = {
  getDormitoryInspection: `${BASEURL}/getDormitoryInspection`,
  addDormitoryInspection: `${BASEURL}/addDormitoryInspection`,
};

// 查寝信息
export const getDormitoryInspection = (params) =>
  defHttp.post({
    url: Api.getDormitoryInspection,
    params,
  });

//增加查寝信息
export const addDormitoryInspection = (params) =>
  defHttp.post({
    url: Api.addDormitoryInspection,
    params,
  });
