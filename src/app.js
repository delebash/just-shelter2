import {PLATFORM} from 'aurelia-pal';
import '../sass/index.scss'

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
     {
        route: ['','animal-list'],
        name: 'animal-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/animal-list'),
        nav: true,
        title: 'animal-list'
      },
      {
        route: 'animal-detail',
        name: 'animal-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/animal-detail'),
        nav: true,
        title: 'animal-detail'
      },
     {
        route: 'lookup-animal-category-list',
        name: 'lookup-animal-category-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-animal-category-list'),
        nav: true,
        title: 'lookup-animal-category-list'
      },
      {
        route: 'lookup-animal-category-detail',
        name: 'lookup-animal-category-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-animal-category-detail'),
        nav: true,
        title: 'lookup-animal-category-detail'
      },
     {
        route: 'lookup-animal-type-list',
        name: 'lookup-animal-type-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-animal-type-list'),
        nav: true,
        title: 'lookup-animal-type-list'
      },
      {
        route: 'lookup-animal-type-detail',
        name: 'lookup-animal-type-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-animal-type-detail'),
        nav: true,
        title: 'lookup-animal-type-detail'
      },
     {
        route: 'lookup-sex-list',
        name: 'lookup-sex-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-sex-list'),
        nav: true,
        title: 'lookup-sex-list'
      },
      {
        route: 'lookup-sex-detail',
        name: 'lookup-sex-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-sex-detail'),
        nav: true,
        title: 'lookup-sex-detail'
      },
     {
        route: 'lookup-specie-list',
        name: 'lookup-specie-list',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-specie-list'),
        nav: true,
        title: 'lookup-specie-list'
      },
      {
        route: 'lookup-specie-detail',
        name: 'lookup-specie-detail',
        moduleId: PLATFORM.moduleName('./viewmodels/admin/lookup-specie-detail'),
        nav: true,
        title: 'lookup-specie-detail'
      },
    ]);

    this.router = router;
  }
}
