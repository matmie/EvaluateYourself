import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ey-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private _translate: TranslateService){
        this._translate.addLangs(['pl','en']);
        this._translate.setDefaultLang('pl');
        this._translate.use('pl');
    }
}
