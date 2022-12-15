import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Translatior';

  constructor(public translate:TranslateService){
    translate.addLangs(['English','Telugu', 'Hindi']);
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|tel) ? browserLang : 'en' );
  }


}
