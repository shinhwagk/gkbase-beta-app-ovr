import { Component } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         ROUTER_DIRECTIVES }    from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'app/nav.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavComponent { 
}