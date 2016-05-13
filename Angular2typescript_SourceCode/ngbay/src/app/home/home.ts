import {Component} from 'angular2/core';

import {ItemComponent} from './item/item';

@Component({
  selector: 'ngbay-home',
  styles: [require('./home.scss')],
  template: require('./home.html'),
  directives: [ItemComponent]
})
export class HomeComponent {}
