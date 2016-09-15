
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from "@angular/platform-browser";
import {Component, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";



@Component({
    selector: 'app',
    template: `<div>
I'm a component
</div>`,
})
export class AppComponent {
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
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

platformBrowserDynamic().bootstrapModule(AppModule);
