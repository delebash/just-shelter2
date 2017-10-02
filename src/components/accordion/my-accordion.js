import {Shared} from "../../services/shared-service";
import {inject, bindable} from 'aurelia-framework'
import {Router} from 'aurelia-router';

let myroute;
@inject( Router )
export class MyAccordion {
  @bindable router = null;

  constructor(router){
    this.router = router;
  }

  attached() {
    var accordion_head = $('.accordion > li > a'),
      accordion_body = $('.accordion li > .sub-menu');

    // Open the first tab on load

    accordion_head.first().addClass('active').next().slideDown('normal');

    // Click function

    accordion_head.on('click', function(event) {

      // Disable header links

      event.preventDefault();

      // Show and hide the tabs on click

      if ($(this).attr('class') != 'active'){
        accordion_body.slideUp('normal');
        $(this).next().stop(true,true).slideToggle('normal');
        accordion_head.removeClass('active');
        $(this).addClass('active');
      }
    });
  }
  onNavClick(row) {
   // myroute.navigateToRoute('customer-detail', { id: e.data.id });
  //  myroute.navigateToRoute('', { id: e.data.id });
    this.router.navigateToRoute(row.title)
   // alert(row.title);
  }
}


