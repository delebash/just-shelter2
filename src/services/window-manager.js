export class WindowManager {


  openWindow(e) {
    let id, name;

    if (e.parentId) {
      id = e.ID;
      name = e.events.text;
      //Get main div
      let divDialog = $('#dialog' + id)

      //If exits then open
      if (divDialog.length) {
        divDialog.ejDialog("open");
      } else {
        //Create new
        let main = $('#dialogs');
        console.log(main)
        $('<div />', {
          id: 'dialog' + id,
          title: name
        }).appendTo(main);
        let divDialog = $('#dialog' + id)
        divDialog.ejDialog({showOnInit: true, containment: '#desktop'});
      }
    }
  }
}

