import {NgModule} from '@angular/core';
import {WidgetOneComponent} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwoComponent} from "./widget-two.component";


@NgModule({
    imports: [CommonModule],
    exports: [WidgetOneComponent,CommonModule, WidgetTwoComponent],
    declarations: [WidgetOneComponent, WidgetTwoComponent],
    providers: [],
})
export class WidgetOneModule {

}
