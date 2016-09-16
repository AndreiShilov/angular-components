import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {WidgetThreeComponent} from "../widgets/widget-three.component";

@Component({
    selector: 'home',
    template: `
<button (click)="moveComponent()">Move component</button>
<div #container></div>`
})
export class HomeComponent {
    @ViewChild('container', {read: ViewContainerRef}) container;

    widgetFactory;
    widgetRef;

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

        this.widgetRef = this.container.createComponent(this.widgetFactory, 2);
        this.widgetRef.instance.message = "I'm third";
    }

    moveComponent() {
        const randomIndex = Math.floor(Math.random() * this.container.length);
        this.container.move(this.widgetRef.hostView, randomIndex);
        this.container.detach(1);
    }
}