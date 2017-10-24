import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'
const endpoint = 'lookup_sex';

let dropdownObj = []

@inject(Shared,Api)
export class LookupSexDetail{

  constructor(shared,api) {
    this.shared = shared;
    this.api = api;
    this.lookup_sex = {};
  }

  select(args) {
    let name = args.model.htmlAttributes.id;
    dropdownObj.push({[name]: args.value})
  }
  async attached() {
    this.lookup_sex = this.shared.val
}

  save(){
    for (let obj of dropdownObj) {
      for (let [key, value] of Object.entries(obj)) 
       this.lookup_sex[key] = value;
      }
    this.api.update(this.lookup_sex.id,this.lookup_sex)
    }
}
