class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email=email;
        this.firstName = firstName;
        this.lastName =lastName;
        //this._products = products;

    }

    get clientId(){
        return this._clientId;
    }

    set clientId(newClientId){
        let regex = new RegExp(/[\d]{6}/gm)
        if(!newClientId.match(regex)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = newClientId;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let regex = new RegExp(/[A-Za-z]+@[a-zA-Z.]+/gm)
        if(!email.match(regex)){
          throw new TypeError('Invalid e-mail');
        }
        this._email = email;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        let regex = new RegExp(/^([A-Za-z]+)$/gm);
        //let regexValidation = (/([A-Za-z]+)/gm).test(firstName)

        if(firstName.length<3 ||firstName.length>20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        if(!firstName.match(regex)){
            throw new TypeError("First name must contain only Latin characters");

        }
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let regex = new RegExp(/^([A-Za-z]+)$/gm);

        if(!lastName.match(regex)){
            throw new TypeError("Last name must contain only Latin characters");

        }
        if(lastName.length<3 ||lastName.length>20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

      
        this._lastName = lastName;
    }

}