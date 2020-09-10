export class User {
    id:         number;
    username:   string;
    password:   string;
    email:      string;
    constructor(username: string = '', email: string ='', password: string = ''){
        this.username = username;
        this.password = password;
        this.email = email
    }
}
