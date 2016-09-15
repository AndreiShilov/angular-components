
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `<div>home</div>
<widget-one></widget-one>
<widget-two></widget-two>`
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}