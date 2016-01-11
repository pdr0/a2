import {Contact} from 'app/models/contact';
import {Injectable} from 'angular2/core';
import {CONTACTS} from 'app/mocks/mock-contacts';

@Injectable()

export class ContactsService {
    getContacts() {
        return Promise.resolve(CONTACTS)
    }
}