import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_animal_category';

let dropdownObj = []

@inject(Shared,Api)
export class LookupAnimalCategoryDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_animal_category = {};
  }

  select(args) {
    let name = args.model.htmlAttributes.id;
    dropdownObj.push({[name]: args.value})
  }
  async attached() {
    this.lookup_animal_category = this.shared.val
}

  save(){
    for (let obj of dropdownObj) {
      for (let [key, value] of Object.entries(obj)) 
       this.lookup_animal_category[key] = value;
      }
    this.api.update(this.lookup_animal_category.id,this.lookup_animal_category)
    }
}
