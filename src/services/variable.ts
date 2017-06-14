import { Injectable } from '@angular/core';
import { CourseProvider } from '../providers/course/course';

@Injectable()
export class VariableService {
    cities: Array<any> = [];

    constructor(private courseProvider: CourseProvider) {
        this.getCity();
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
}