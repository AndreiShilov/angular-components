import {Component, OnInit} from '@angular/core';
import {SimpleService} from "../services/services.module";

@Component({
    selector: 'home',
    template: `<div>home</div>
<widget-one></widget-one>
<widget-two [message]="simpleService.message"></widget-two>
<widget-two [message]="'Hello'"></widget-two>
<div>{{simpleService.message}}</div>`
})
export class HomeComponent implements OnInit {
    constructor(public simpleService: SimpleService) {
    }

    ngOnInit() {
    }
}