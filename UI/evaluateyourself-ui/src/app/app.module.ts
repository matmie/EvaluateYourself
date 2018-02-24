import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; //Moduł do translacji opisów w szablonach stron
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './applications/news/news.component';
import { LoginComponent } from './login/login.component';

//Providers
import { AuthService } from './shared/services/auth.service';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        NewsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    entryComponents: [
        LoginComponent
    ]
})
export class AppModule { }
