import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {WidgetThreeComponent} from "../widgets/widget-three.component";

@Component({
    selector: 'home',
    template: `
<button (click)="addComponent()">Add component</button>
<div #container></div>`
})
export class HomeComponent {
    @ViewChild('container', {read: ViewContainerRef}) container;

    widgetFactory;

    constructor(private resolver: ComponentFactoryResolver) {
     this.widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent)
    }

    ngAfterContentInit() {
        console.log(this.container);
        this.container.createComponent(this.widgetFactory);
        this.container.createComponent(this.widgetFactory);
        this.container.createComponent(this.widgetFactory);
        this.container.createComponent(this.widgetFactory);
        this.container.createComponent(this.widgetFactory);
        this.container.createComponent(this.widgetFactory);

        const  widgetRef =this.container.createComponent(this.widgetFactory,2);
        widgetRef.instance.message = "I'm third";
    }

    addComponent(){
        this.container.createComponent(this.widgetFactory);
    }
}