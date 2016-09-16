import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {WidgetThreeComponent} from "../widgets/widget-three.component";

@Component({
    selector: 'home',
    template: `
<div #container></div>`
})
export class HomeComponent {
    @ViewChild('container', {read: ViewContainerRef}) container;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngAfterContentInit() {
        console.log(this.container);
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent)


        const  widgetRef =this.container.createComponent(widgetFactory);
        widgetRef.instance.message = 'Yuoooooooooooooo'
    }
}