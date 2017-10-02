import {Api} from '../../services/api'
import {inject} from 'aurelia-framework'
const endpoint = 'suppliers'

@inject(Api)
export class GetData {

  constructor(api) {
    this.api = api
  }

  async getdata() {
    await this.api.connect(endpoint)
    let query = {};
    let rec = await this.api.read(query)
      console.log(rec);
  }
  async simulateDisconnect(){
    await this.api.disconnect();
    // this.api.update(1,{company:'Test'})
  }
}

