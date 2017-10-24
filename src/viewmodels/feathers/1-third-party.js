import getRemoteRecords from './get-remote-records';
import {delay} from './utils';

module.exports = async function (feathersApp, customerRealtime) {
  const customerRemote = feathersApp.service('customers');

  // Example 1

 //  console.log('===== customerRemote, before mutations')
 // await getRemoteRecords(customerRemote, 'last_name', true)
 //
 //  console.log('===== client replica, before mutations')
 //  await customerRealtime.store.records.forEach(record => {
 //      console.log(record);
 //  });

  console.log('===== mutate customerRemote while online');
  console.log('customerRemote.patch id: 3');
  await customerRemote.patch(3, { last_name: "jeff" });
  delay(500);

  console.log('===== customerRemote, after mutations');
  await getRemoteRecords(customerRemote, 'last_name', true);

  console.log('===== client replica, after mutations');
  customerRealtime.store.records.forEach(record => {
    console.log(record);
  })

};

// .then(() =>  console.log('===== mutate stockRemote'))
// .then(() =>  console.log('stockRemote.patch stock: a1'))
// .then(() => stockRemote.patch(remoteIds['a1'], { foo: 1 }))
// .then(() =>  console.log('stockRemote.create stock: a99'))
// .then(() => stockRemote.create({ dept: 'a', stock: 'a99' }))
// .then(() =>  console.log('stockRemote.remove stock: a2'))
// .then(() => stockRemote.remove(remoteIds['a2']))
//
// .then(() => delay(500)) // wait for events to quiesce
//
// .then(() =>  console.log('===== stockRemote, after mutations'))
// .then(() => getRemoteRecords(stockRemote, 'stock', true))
// .then(ids => { remoteIds = ids; })
// .then(() =>  console.log('===== client replica, after mutations'))
// .then(() => stockRealtime.store.records.forEach(record => {
//   console.log(record);
// }))

