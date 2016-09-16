import {Component, OnInit} from '@angular/core';
import {SimpleService} from "../services/services.module";

@Component({
    selector: 'home',
    template: `<div>home</div>
<widget-three></widget-three>
`
})
export class HomeComponent implements OnInit {
    constructor(public simpleService: SimpleService) {
    }
    ngOnInit() {
    }
}