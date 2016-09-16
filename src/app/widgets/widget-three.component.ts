import {Component, OnInit, Input, ViewChild, Renderer} from '@angular/core';

@Component({
    selector: 'widget-three',
    template: `<input #input type="text" [value]="message">`
})
export class WidgetThreeComponent {

    @ViewChild('input') input;
    @Input() message: string = 'default';


    constructor(private renderer: Renderer) {

    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(
            this.input.nativeElement, 'focus'
        );
        // console.log(this.input.nativeElement.focus());
    }
}