import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_specie';

let dropdownObj = []

@inject(Shared,Api)
export class LookupSpecieDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_specie = {};
  }

  select(args) {
    let name = args.model.htmlAttributes.id;
    dropdownObj.push({[name]: args.value})
  }
  async attached() {
    this.lookup_specie = this.shared.val
}

  save(){
    for (let obj of dropdownObj) {
      for (let [key, value] of Object.entries(obj)) 
       this.lookup_specie[key] = value;
      }
    this.api.update(this.lookup_specie.id,this.lookup_specie)
    }
}
