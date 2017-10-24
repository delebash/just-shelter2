import getRemoteRecords from './get-remote-records';
import {delay} from './utils';

module.exports = async function (feathersApp, customerRealtime) {
  const customerRemote = feathersApp.service('customers');

 // await getRemoteRecords(customerRemote, 'last_name', true)

  await customerRealtime.disconnect();
  console.log('>>>>> disconnecting from server');


  console.log('===== change data locally for  customerRemote while offline');
  console.log('customerRemote.patch id: 3');
  customerRemote.patch(3, { last_name: 'al' });

  console.log('<<<<< reconnecting to server');
  customerRealtime.connect();

//give time for records to sync
  delay(500);


  console.log('===== customerRemote, after reconnection');
  getRemoteRecords(customerRemote, 'last_name', true);


};

// .then(() => console.log('stockRemote.create stock: a98'))
// .then(() => stockRemote.create({ dept: 'a', stock: 'a98' }))
// .then(() => console.log('stockRemote.remove stock: a5'))
// .then(() => stockRemote.remove(remoteIds['a5']))
//


