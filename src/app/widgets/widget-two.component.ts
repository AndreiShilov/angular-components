import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'widget-two',
    template: `<div > two</div><div>{{message}}</div>`
})
export class WidgetTwoComponent implements OnInit {
    @Input() message: string;

    constructor() {
    }

    ngOnInit() {
    }

}