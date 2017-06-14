import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseProvider {

  resource: string = '/course';
  city_resource: string = '/city';

  constructor(public http: HttpService) {
  }

  getCity() {
    return this.http.get(this.city_resource)
  }

  getCourse(cityNo = null, attr = null) {
    return this.http.post(this.resource, {cityNo: cityNo, attr: attr})
  }

  getSpotImage(spotNo) {
    return this.http.get('/spot/image', {spotNo: spotNo})
  }

  getCourseDetail(courseNo :number, planNo :number = null, day :number = 3) {
    return this.http.get(this.resource + '/detail', {courseNo: courseNo, planNo: planNo, day: day})
  }
}
