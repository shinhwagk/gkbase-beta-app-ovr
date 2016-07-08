import { Component, OnInit } from '@angular/core';

import { DpvService } from './dpv.service'

@Component({
  selector: 'app-dpv',
  templateUrl: 'app/dpv/dpv-index.component.html',
  providers: [DpvService]
})

export class DpvIndexComponent implements OnInit {

constructor (private _dpvService: DpvService) {}

  ngOnInit() {
    this._dpvService.getAllTable().toPromise()
  }

}