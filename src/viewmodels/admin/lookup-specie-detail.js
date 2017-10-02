import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_specie';


@inject(Shared,Api)
export class LookupSpecieDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_specie = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.lookup_specie = this.shared.val
  }

  save(){
    this.api.update(this.lookup_specie.id,this.lookup_specie)
  }

}
