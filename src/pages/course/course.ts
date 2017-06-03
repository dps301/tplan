import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses: Array<any> = [
    {
      "id": "1",
      "title": "테스트코스1",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6YzH6Zu9cUPIAWxDiZPN7yjwxquaXwCq3318nwgyqmLO97DD",
      "content": "this is test case 1",
      "like": "46"
    },
    {
      "id": "2",
      "title": "테스트코스2",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6YzH6Zu9cUPIAWxDiZPN7yjwxquaXwCq3318nwgyqmLO97DD",
      "content": "this is test case 2",
      "like": "36"
    },
    {
      "id": "3",
      "title": "테스트코스3",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6YzH6Zu9cUPIAWxDiZPN7yjwxquaXwCq3318nwgyqmLO97DD",
      "content": "this is test case 3",
      "like": "71"
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
