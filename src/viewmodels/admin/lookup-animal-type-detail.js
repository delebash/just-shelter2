import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_animal_type';

let dropdownObj = []

@inject(Shared,Api)
export class LookupAnimalTypeDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_animal_type = {};
  }

  select(args) {
    let name = args.model.htmlAttributes.id;
    dropdownObj.push({[name]: args.value})
  }
  async attached() {
    this.lookup_animal_type = this.shared.val
}

  save(){
    for (let obj of dropdownObj) {
      for (let [key, value] of Object.entries(obj)) 
       this.lookup_animal_type[key] = value;
      }
    this.api.update(this.lookup_animal_type.id,this.lookup_animal_type)
    }
}
