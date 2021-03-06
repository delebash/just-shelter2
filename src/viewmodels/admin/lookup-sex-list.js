import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Api} from '../../services/api';
const endpoint = 'lookup_sex';

let that;
let myroute;
@inject(Shared, Router,Api)
export class LookupSexList{
  constructor(shared,router,api){
    that  = shared;
    myroute = router;
    this.api = api;
    this.api.connect(endpoint);
  }

  async attached() {
    await this.api.connect(endpoint);
    let query = {};
    let data = await this.api.read(query);
    $('#Grid').ejGrid({
      dataSource: data,
      recordDoubleClick: this.rowClicked
    });
  }
  rowClicked(e){
    myroute.navigateToRoute('lookup_sex-detail', { id: e.data.id });
   that.val = e.data;
  }
}
