import { Component, OnInit } from '@angular/core';

declare let naver: any;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})

export class MapComponent implements OnInit {
  map: any = null;
  mapOptions: any = null;

  constructor() {
  }

  ngOnInit(): void {
    this.mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),  
      zoom: 10
    };
    this.map = new naver.maps.Map('map', this.mapOptions);

    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: this.map
    });
  }
}