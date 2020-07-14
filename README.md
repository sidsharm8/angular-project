# AngularUseCase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Angular app using lazy loaded modules

```
const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner.module').then((m) => m.BannerModule),
    pathMatch: 'full',
  },
  {
    path: 'product-list',
    loadChildren: () => import('./list.module').then((m) => m.ListModule),
    component: ListComponent,
  },
  {
    path: 'dynamic-div',
    loadChildren: () =>
      import('./dynamic-div.module').then((m) => m.DynamicDivModule),
    component: DynamicDivComponent,
  },
  {
    path: 'students-table',
    loadChildren: () =>
      import('./students.module').then((m) => m.StudentsModule),
    component: StudentsTableComponent,
  },
  {
    path: 'count-down',
    loadChildren: () =>
      import('./count-down.module').then((m) => m.CountDownModule),
    component: CountDownComponent,
  },
  {
    path: 'count-down-2',
    loadChildren: () =>
      import('./count-down-enhanced.module').then(
        (m) => m.CountDownEnhancedModule
      ),
    component: CountDownEnhancedComponent,
  },
  {
    path: '**',
    redirectTo: 'banner',
  },
];

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
