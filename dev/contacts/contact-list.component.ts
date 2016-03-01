import {Component} from "angular2/core";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
        (click)="onSelect(contact)"
        [class.clicked]="showDetail == true"
        >
        {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>

    `
})

export  class ContactListComponent{

public contacts = [
        {firstName: "Nit", lastName: "Ankam1", phone: "312456785", email: "info1@uptake.com"},
        {firstName: "Tin", lastName: "Ankam2", phone: "0987654321", email: "info2@uptake.com"},
        {firstName: "Hit", lastName: "Ankam3", phone: "5678954345", email: "info3@uptake.com"},
        {firstName: "Int", lastName: "Ankam4", phone: "4587655678", email: "info3@uptake.com"}
    ];

public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;
    }

}