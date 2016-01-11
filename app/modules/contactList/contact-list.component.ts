import {Component, OnInit} from 'angular2/core';
import {Contact} from 'app/models/contact';
import {ContactsService} from 'app/services/contacts.service';
import {ROUTER_PROVIDERS, RouteParams, RouterLink} from 'angular2/router';

@Component({
    selector: 'th-contact-list',
    templateUrl: 'app/modules/contactList/contact-list.html',
    providers: [ContactsService],
    styleUrls: ['app/modules/contactList/contact-list.css'],
    directives: [RouterLink]
})

export class ContactListComponent implements OnInit{
    public contacts : Contact[];
    public selectedContact : Contact;

    constructor(
        private _contactsService: ContactsService){

    }

    getContacts() {
        this._contactsService.getContacts().then(response => this.contacts = response)
    }

    ngOnInit() {
        this.getContacts();
    }

    onSelectContact(contact: Contact){
        this.selectedContact = contact;
        this._router.navigate(['SingleView', {id: contact.id}])
    }

}
