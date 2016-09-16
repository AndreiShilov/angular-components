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
    template: `
<h2>above</h2>
<ng-content></ng-content>
<h2>below</h2>
`
})
export class WidgetOneComponent implements OnInit {
    selected = true;

    constructor() {
    }


    ngOnInit() {
    }
}