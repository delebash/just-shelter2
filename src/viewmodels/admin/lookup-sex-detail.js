import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_sex';


@inject(Shared,Api)
export class LookupSexDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_sex = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.lookup_sex = this.shared.val
  }

  save(){
    this.api.update(this.lookup_sex.id,this.lookup_sex)
  }

}
