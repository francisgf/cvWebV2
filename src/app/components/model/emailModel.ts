export class Email {

    emailCustomer: String;
    emailDestinate: String;
    subject:String;
    contentMessage:String;
    phonenumber:String;
    nameCustomer:String;
    
    constructor( emailCustomer: string, emailDestinate:String, subject:String,  contentMessaje:String, phonenumber:String, nameCustomer:String) {
        this.emailCustomer=emailCustomer;
        this.emailDestinate=emailDestinate;
        this.subject=subject;
        this.contentMessage=contentMessaje;
        this.phonenumber=phonenumber;
        this.nameCustomer=nameCustomer;

    }

}




