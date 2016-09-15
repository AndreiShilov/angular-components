import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'widget-one',
    template: `<div *ngIf="selected"> one selected</div>`
})
export class WidgetOneComponent implements OnInit {
    selected = true;
    constructor() { }

    ngOnInit() { }
    
}