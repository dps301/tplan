import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {

  constructor(public http: Http) {
  }

}
