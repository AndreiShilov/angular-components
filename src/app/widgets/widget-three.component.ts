import {Component, OnInit, Input, ViewChild, Renderer} from '@angular/core';

@Component({
    selector: 'widget-three',
    template: `<input #input type="text">`
})
export class WidgetThreeComponent {

    @ViewChild('input') input;


    constructor(private renderer: Renderer) {

    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(
            this.input.nativeElement, 'focus'
        );
        // console.log(this.input.nativeElement.focus());
    }
}