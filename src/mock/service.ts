import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Users } from './data/user';
import { About } from './data/about';


export default {
  bootstrap() {
    const mock = new MockAdapter(axios);
    mock.onGet('/users').reply(200, {
      list: Users,
    });
    mock.onGet('/about').reply(200, {
      list: About,
    });
    mock.onPost('/users/delete').reply((config) => {
      console.log(config);
      return new Promise((resolve) => {
        resolve([200, { code: 200, msg: '删除成功' }]);
      });
    });
    mock.onPost('/users/add').reply((config) => {
      console.log(config);
      return new Promise((resolve) => {
        resolve([200, { code: 200, msg: '添加成功' }]);
      });
    });
    mock.onPost('/users/edit').reply((config) => {
      console.log(config);
      return new Promise((resolve) => {
        resolve([200, { code: 200, msg: '编辑成功' }]);
      });
    });
  },
};
