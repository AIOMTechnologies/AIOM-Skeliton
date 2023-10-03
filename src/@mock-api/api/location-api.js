import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

let stateMasterDB = mockApi.components.examples.administrator_location_state.value;


mock.onGet('/api/administrator/location/stateMaster').reply((config) => {
  return [200, stateMasterDB];
});

mock.onPost('/api/administrator/location/stateMaster').reply(({ data }) => {
  const newStateMaster = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  stateMasterDB.push(newStateMaster);

  return [200, newStateMaster];
});

mock.onDelete('/api/administrator/location/stateMaster').reply(({ data }) => {
  const ids = JSON.parse(data);
  stateMasterDB = stateMasterDB.filter((item) => ids.includes(item.id));

  return [200, stateMasterDB];
});

mock.onGet(/\/api\/administrator\/location\/state\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/administrator\/location\/state\/(?<id>[^/]+)/).groups;

  return [200, _.find(stateMasterDB, { id })];
});

mock.onPut(/\/api\/administrator\/location\/state\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/administrator\/location\/state\/(?<id>[^/]+)/).groups;

  _.assign(_.find(stateMasterDB, { id }), JSON.parse(data));

  return [200, _.find(stateMasterDB, { id })];
});

mock.onDelete(/\/api\/administrator\/location\/state\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/administrator\/location\/state\/(?<id>[^/]+)/).groups;

  _.remove(stateMasterDB, { id });

  return [200, id];
});






