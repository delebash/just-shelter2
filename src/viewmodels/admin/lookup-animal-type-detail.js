import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_animal_type';


@inject(Shared,Api)
export class LookupAnimalTypeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_animal_type = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.lookup_animal_type = this.shared.val
  }

  save(){
    this.api.update(this.lookup_animal_type.id,this.lookup_animal_type)
  }

}
