import {NgModule} from '@angular/core';
import {WidgetOneComponent} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwoComponent} from "./widget-two.component";
import {WidgetThreeComponent} from "./widget-three.component";


@NgModule({
    imports: [CommonModule],
    exports: [
        WidgetOneComponent,
        CommonModule,
        WidgetTwoComponent,
        WidgetThreeComponent],
    declarations: [
        WidgetOneComponent,
        WidgetTwoComponent,
        WidgetThreeComponent],
    entryComponents:[
      WidgetThreeComponent
    ],
    providers: [],
})
export class WidgetOneModule {
}
