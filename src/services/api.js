const feathers = require('feathers-client');
const io = require('socket.io-client');
const Realtime = require('feathers-offline-realtime');
const snapshot = require('feathers-offline-snapshot');

const app = feathers()
  .configure(feathers.socketio(io('http://localhost:3030')));

let remote;
let realtime;

export class Api {

  async connect(endpoint) {
    remote = await app.service(endpoint)
    realtime = new Realtime(remote);
    await realtime.connect();
  }

  async disconnect() {
    await realtime.disconnect();
  }

  async readLocal() {
    realtime.store.records.forEach(record => {
      console.log(record);
    })
  }

  async read(query) {
    return await snapshot(remote,query)
  }

  async create(data) {
    //Change Local
    await remote.create(data)
  }
  async update(id,data) {
    //Change Local
    await remote.patch(id,data)
  }
  async delete(id) {
    //Change Local
    await remote.remove(id)
  }
}

