import Mock from 'mockjs';
import {ItemType} from '../../types/index';
const Users: ItemType[] = [];

for (let i = 0; i < 10; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1),
    address: Mock.mock('@county(true)'),
    'age|18-30': 1,
  }));
}
export { Users };
