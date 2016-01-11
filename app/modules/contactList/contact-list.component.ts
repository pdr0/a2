import {Component, OnInit} from 'angular2/core';
import {Contact} from 'app/models/contact';
import {ContactsService} from 'app/services/contacts.service'

@Component({
    selector: 'th-contact-list',
    templateUrl: 'app/modules/contactList/contact-list.html',
    providers: [ContactsService],
    styleUrls: ['app/modules/contactList/contact-list.css']
})

export class ContactListComponent implements OnInit{
    public contacts : Contact[];

    constructor(private _contactsService: ContactsService) {}

    getContacts() {
        this._contactsService.getContacts().then(response => this.contacts = response)
    }

    ngOnInit() {
        this.getContacts();
    }

}
