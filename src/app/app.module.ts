import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {HomeModule} from "./home/home.module";
import {ServicesModule} from "./services/services.module";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HomeModule,
        ServicesModule.forRoot()
    ],
    providers: [],
    // provide('whatever', {useClass: ToDoService})
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}