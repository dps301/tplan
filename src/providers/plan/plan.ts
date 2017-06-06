import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanProvider {
  
  resource: string = '/plan';

  constructor(public http: HttpService) {
  }

  addPlan(planNo :any = '', courseNo: number, title :string, image :string, spot) {
    return this.http.post(this.resource + '/' + planNo, {courseNo: courseNo, title: title, image: image, spot: spot})
  }
  
  getPlan() {
    return this.http.get(this.resource)
  }

  getPlanDetail(planNo: number) {
    return this.http.get(this.resource + '/detail', {planNo: planNo})
  }
}
