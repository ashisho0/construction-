export class WholeEmail {

    name: string;
    email: string;
    msg: string;


    constructor(details: any) {

        this.name = details.name || "";
        this.email = details.email || "";
        this.msg = details.msg || "";

    }
}
