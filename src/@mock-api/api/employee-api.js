import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

let employeesDB = mockApi.components.examples.administrator_employees.value;
//let ordersDB = mockApi.components.examples.ecommerce_orders.value;

mock.onGet('/api/administrator/employees').reply((config) => {
  return [200, employeesDB];
});

mock.onPost('/api/administrator/employees').reply(({ data }) => {
  const newProduct = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  employeesDB.push(newEmployee);

  return [200, newEmployee];
});

mock.onDelete('/api/administrator/employees').reply(({ data }) => {
  const ids = JSON.parse(data);
  employeesDB = employeesDB.filter((item) => ids.includes(item.id));

  return [200, employeesDB];
});

mock.onGet(/\/api\/administrator\/employees\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/administrator\/employees\/(?<id>[^/]+)/).groups;

  return [200, _.find(employeesDB, { id })];
});

mock.onPut(/\/api\/administrator\/employees\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/administrator\/employees\/(?<id>[^/]+)/).groups;

  _.assign(_.find(employeesDB, { id }), JSON.parse(data));

  return [200, _.find(employeesDB, { id })];
});

mock.onDelete(/\/api\/administrator\/employees\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/administrator\/employees\/(?<id>[^/]+)/).groups;

  _.remove(employeesDB, { id });

  return [200, id];
});






