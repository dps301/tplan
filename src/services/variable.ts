import { Injectable } from '@angular/core';
import { CourseProvider } from '../providers/course/course';

@Injectable()
export class VariableService {
    cities: Array<any> = [];
    attrs: Array<any> = [];

    constructor(private courseProvider: CourseProvider) {
        this.getCity();
        this.getAttr();
    }

    getCity() {
        this.courseProvider.getCity()
            .subscribe(
            data => {
                this.cities = data.json();
            },
            error => {

            }
        );
    }

    getAttr() {
        this.courseProvider.getAttr()
        .subscribe(
            data => {
                this.attrs = data.json();
            },
            error => {

            }
        );
    }
}