import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_animal_category';


@inject(Shared,Api)
export class LookupAnimalCategoryDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_animal_category = {};
  }

  async attached() {
    await this.api.connect(endpoint)
    this.lookup_animal_category = this.shared.val
  }

  save(){
    this.api.update(this.lookup_animal_category.id,this.lookup_animal_category)
  }

}
