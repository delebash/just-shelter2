import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router';

var data = [

  {id: 1, text: "Animals", parentId: null},
  {id: 2, text: "Lost/Found", parentId: null},
  {id: 3, text: "People", parentId: null},
  {id: 4, text: "Animal Control", parentId: null},
  {id: 5, text: "Diary", parentId: null},
  {id: 6, text: "Document Repository", parentId: null},
  {id: 7, text: "Online Forms", parentId: null},
  {id: 8, text: "Waiting List", parentId: null},
  //first level child
  {id: "findanimal", parentId: 1, text: "Find Animal"},
  {id: "addanimal", parentId: 1, text: "Add Animal"},
  {id: "addlog", parentId: 1, text: "Add Log Entry"},
  {id: "findlost", parentId: 2, text: "Find Lost Animal"},
  {id: "findfound", parentId: 2, text: "Find a Found Animal"}
];

let myrouter;

@inject(Router)
export class NavBar {

  constructor(router) {
    myrouter = router
  }

  activeTab(args) {
    if (args.activeIndex === 0) {
      myrouter.navigateToRoute('animal-list')
    } else if (args.activeIndex === 1) {

      $("#animalMenu").ejMenu({ width: "100%",height:"30px",
        fields: {dataSource: data, id: "id", parentId: "parentId", text: "text", width:"600px"},
        click: this.menuClick
      });

      myrouter.navigateToRoute('animal-detail')
    }else if (args.activeIndex === 2) {
      $("#medicalMenu").ejMenu({ width: "100%",height:"30px",
        fields: {dataSource: data, id: "id", parentId: "parentId", text: "text", width:"600px"},
        click: this.menuClick
      });
      myrouter.navigateToRoute('animal-list')
    }
  }

  menuClick(args) {
    if (args.ID === "findanimal") {
      myrouter.navigateToRoute('customer-detail')
    }
  }

  attached() {

    $("#syncfusionTabs").ejTab({
      itemActive: this.activeTab
    });


  }
}

