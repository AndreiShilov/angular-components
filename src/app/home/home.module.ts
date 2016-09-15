import {NgModule} from '@angular/core';

import {HomeComponent} from "./home.component";
import {WidgetOneModule} from "../widgets/widget-one.module";

@NgModule({
    imports: [WidgetOneModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
