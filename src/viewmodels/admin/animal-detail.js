import {Shared} from "../../services/shared-service";
import {inject} from 'aurelia-framework';
import {Api} from '../../services/api'

const endpoint = 'animal';

let dropdownObj = []

@inject(Shared, Api)
export class AnimalDetail {

  constructor(shared, api) {
    this.shared = shared;
    this.api = api;
    this.animal = {};
  }

  select(args) {
    let name = args.model.htmlAttributes.id;
    dropdownObj.push({[name]: args.value})
  }

  async attached() {
    this.animal = this.shared.val;
    let category = await this.api.staticRead('category', {})
    $('#categoryId').ejDropDownList({
      select: this.select,
      dataSource: category.data,
      width: "100%",
      watermarkText: "Select a category",
      fields: {text: "type", value: "id"},
      htmlAttributes: {id: "categoryId"}
    });
    let objCategory = $("#categoryId").ejDropDownList("instance");
    objCategory.selectItemByValue(this.animal.categoryId);

    let sex = await this.api.staticRead('sex', {})
    $('#sexId').ejDropDownList({
      select: this.select,
      dataSource: sex.data,
      width: "100%",
      watermarkText: "Select a sex",
      fields: {text: "type", value: "id"},
      htmlAttributes: {id: "sexId"}
    });

    let objSex = $("#sexId").ejDropDownList("instance");
    objSex.selectItemByValue(this.animal.sexId);

    let typeId = await this.api.staticRead('type', {})
    $('#typeId').ejDropDownList({
      select: this.select,
      dataSource: typeId.data,
      width: "100%",
      watermarkText: "Select a type",
      fields: {text: "type", value: "id"},
      htmlAttributes: {id: "typeId"}
    });

    let objType = $("#typeId").ejDropDownList("instance");
    objType.selectItemByValue(this.animal.typeId);

    let specie = await this.api.staticRead('specie', {})
    $('#specieId').ejDropDownList({
      select: this.select,
      dataSource: specie.data,
      width: "100%",
      watermarkText: "Select a species",
      fields: {text: "type", value: "id"},
      htmlAttributes: {id: "specieId"}
    });

    let objSpecie = $("#specieId").ejDropDownList("instance");
    objSpecie.selectItemByValue(this.animal.specieId);

  }

  save() {
    for (let obj of dropdownObj) {
      for (let [key, value] of Object.entries(obj))
        this.animal[key] = value;
    }
   // console.log(this.animal)
    this.api.update(this.animal.id, this.animal)
  }
}
