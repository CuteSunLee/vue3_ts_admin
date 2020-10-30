import Mock from 'mockjs';
import {ItemType} from '../../types/index';
const About: ItemType[] = [];

for (let i = 0; i < 10; i++) {
  About.push(Mock.mock({
    id: Mock.Random.guid(),
    users: Mock.Random.cname(),
    date: Mock.Random.date(),
  }));
}
export { About };
