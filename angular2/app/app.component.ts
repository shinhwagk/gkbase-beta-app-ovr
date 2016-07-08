import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DpvIndexComponent } from './dpv/dpv-index.component'
import { NavComponent } from './nav.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  precompile: [NavComponent, DpvIndexComponent]
})

export class AppComponent { }

