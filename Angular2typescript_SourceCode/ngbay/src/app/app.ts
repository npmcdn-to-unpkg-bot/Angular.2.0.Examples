import {Component, ViewEncapsulation} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home';
import {AboutComponent} from './about/about';

@Component({
  selector: 'ngbay-app',
  styles: [require('./app.scss')],
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  new Route({ path: '/',      component: HomeComponent,  name: 'Home'}),
  new Route({ path: '/about', component: AboutComponent, name: 'About'})
])
export class MyApp {}
