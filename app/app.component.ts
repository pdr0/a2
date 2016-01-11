import {Component} from 'angular2/core';
import {HeaderComponent} from './modules/header/header.component'
import {FooterComponent} from "./modules/footer/footer.component";
import {ContactListComponent} from "./modules/contactList/contact-list.component";


@Component({
    selector: 'betit-app',
    templateUrl: 'app/app.html',
    directives: [HeaderComponent, FooterComponent, ContactListComponent]
})
export class AppComponent { }