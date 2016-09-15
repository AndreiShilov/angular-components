import {Injectable} from '@angular/core';

@Injectable()
export class SimpleService {

    message: string = 'Message from simple service';

    constructor() {
    }

}