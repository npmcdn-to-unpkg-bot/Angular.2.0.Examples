import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './home';
import {About} from './about';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Basic Webpack Starter</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
@Routes([
  { path: '/',      component: Home},
  { path: '/about', component: About}
])
export class MyApp {}
