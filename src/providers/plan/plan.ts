import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanProvider {
  
  resource: string = '/plan';

  constructor(public http: HttpService) {
  }

  addPlan(planNo :any = '', courseNo: number, title :string, image :string, spot, startDt: string, endDt: string) {
    return this.http.post(this.resource + '/' + planNo, {courseNo: courseNo, title: title, image: image, spot: spot, startDt: startDt, endDt: endDt})
  }
  
  getPlan() {
    return this.http.get(this.resource)
  }

  getPlanDetail(planNo: number) {
    return this.http.get(this.resource + '/detail', {planNo: planNo})
  }

  deletePlan(planNo: number) {
    return this.http.delete(this.resource, {planNo: planNo})
  }
}
