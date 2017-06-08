import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class LoginSessionService {
    constructor(private nativeStorage: NativeStorage) {

    }

    get() {
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
    set(id) {
        this.nativeStorage.setItem('loginSession', {id: id})
        .then(
            () => {
                console.log('Stored item! userID');
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