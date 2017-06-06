import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonProvider {

  userResource: string = '/user';

  constructor(public http: HttpService) {
  }

  getUser(id) {
    return this.http.get(this.userResource, {id: id})
  }
  addUser(id, name, nation) {
    return this.http.post(this.userResource, {id: id, name: name, nation: nation})
  }
}
