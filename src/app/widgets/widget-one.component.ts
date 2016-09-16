import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'widget-one',
    styles: [
        `
*{
font-family: monospace;
}
:host{
display: inline-block;
border: 3px dashed black;
color: green;
}
`
    ],
    template: `<div *ngIf="selected"> one selected</div>`
})
export class WidgetOneComponent implements OnInit {
    selected = true;

    constructor() {
    }


    ngOnInit() {
    }
}