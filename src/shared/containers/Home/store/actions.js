import { HOME_DATA } from './constants';

const actionCreater = (type, payload) => {
  return {
    type,
    payload
  };
};

export const getHomeData = () => {
  // https://www.easy-mock.com/mock/5c0b417d6162b83fe0a50c81/list
  // 服务器端不能使用相对路径请求，会请求到本地文件
  return (dispatch, getState, axios) => {
    return axios.get('list').then(res => {
      dispatch(actionCreater(HOME_DATA, res.data.list));
    });
  };
};