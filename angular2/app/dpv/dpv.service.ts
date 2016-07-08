import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DpvService {

    constructor(private http: Http) { }

    getAllTable() {
        return this.http.get('/api/dpv/all').map(rep=>rep.json())
    }
}