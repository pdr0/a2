import {Component} from 'angular2/core';
import {HeaderComponent} from './modules/header/header.component'
import {FooterComponent} from "./modules/footer/footer.component";
import {ContactListComponent} from "./modules/contactList/contact-list.component";
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';
import {ContactSingleViewComponent} from "./modules/contactSingleView/contact-single-view.component";


@Component({
    selector: 'betit-app',
    templateUrl: 'app/app.html',
    directives: [HeaderComponent, FooterComponent, ContactListComponent, RouterLink]
})

@RouteConfig(
    {
        path:'/single-view:contact', name: 'SingleView', component: ContactSingleViewComponent
    }
)
export class AppComponent { }