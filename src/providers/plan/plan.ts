import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../services/http.service';

@Injectable()
export class PlanProvider {
  
  resource: string = '/plan';

  constructor(public http: HttpService) {
  }

  addPlan(planNo :number = null, courseNo: number, planName :string, image :string, spot) {
    return this.http.post(this.resource + '/detail/' + planNo, {courseNo: courseNo, planName: planName, image: image, spot: spot})
  }
  
  getPlan() {
    return this.http.get(this.resource)
  }

  getPlanDetail(planNo: number) {
    return this.http.get(this.resource + '/detail', {planNo: planNo})
  }
}
