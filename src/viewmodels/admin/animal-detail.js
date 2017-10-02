import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'animal';


@inject(Shared,Api)
export class AnimalDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.animal = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.animal = this.shared.val
  }

  save(){
    this.api.update(this.animal.id,this.animal)
  }

}
