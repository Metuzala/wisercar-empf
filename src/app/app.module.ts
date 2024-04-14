import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from "./shared/components/error-message/error-message.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { UserInputComponent } from "./shared/components/user-input/user-input.component";

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent
    ],
    providers: [
        provideAnimations()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: "en",
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ReactiveFormsModule,
        ErrorMessageComponent,
        UserInputComponent
    ]
})
export class AppModule {
}

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
