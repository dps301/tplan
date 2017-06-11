import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class LoginSessionService {
    id: string = '';
    name: string = '';
    nation: string = '';

    constructor(private nativeStorage: NativeStorage) {
        if(this.get()) {
            this.id = this.get().id;
            this.name = this.get().name;
            this.nation = this.get().nation;
        }
    }

    get(): any {
        this.nativeStorage.getItem('loginSession')
        .then(
            data => {
                return data;
            },
            error => {
                return null;
            }
        );
    }
    set(id, name, nation) {
        this.nativeStorage.setItem('loginSession', {id: id, name: name, nation: nation})
        .then(
            () => {
                console.log('Stored item! userID');
                this.id = this.get().id;
                this.name = this.get().name;
                this.nation = this.get().nation;
            },
            error => { 
                console.error('Error storing item', error);
            }
        );
    }
    clear() {
        this.nativeStorage.clear()
        .then(
            () => {
                console.log('storage cleared!');
            },
            error => {
                console.log('storage clear failed');
            }
        );
    }
}