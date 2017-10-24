import client from 'feathers-client'
import {io} from 'socket.io-client'
import * as realtime from 'feathers-offline-realtime'

const feathersApp = feathers()
  .configure(feathers.socketio(io('http://localhost:3030')));

const customerRemote = feathersApp.service('/customers');
const customerRealtime = new Realtime(customerRemote);

export class GetData{

  attached(){
    this.sync()
  }

  async sync() {
    await customerRealtime.connect()
    await step1(feathersApp, customerRealtime);
    await step2(feathersApp, customerRealtime);
    console.log('===== Example finished.');
  }

}
