import { Component } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';

import { DpvIndexComponent } from './dpv/dpv-index.component'
import { NavComponent } from './nav.component'

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/nav',
		pathMatch: 'full'
	},
  {
    path: 'nav',
    component: NavComponent
  },
	{
		path: 'dpv',
		component: DpvIndexComponent
	}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];