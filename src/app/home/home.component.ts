import {Component, OnInit} from '@angular/core';
import {SimpleService} from "../services/services.module";

@Component({
    selector: 'home',
    template: `<div>home</div>
<widget-one>
<h2>title</h2>
<div>Some content</div>
<div footer>footer</div>

</widget-one>
`
})
export class HomeComponent implements OnInit {
    constructor(public simpleService: SimpleService) {
    }


    ngOnInit() {
    }
}