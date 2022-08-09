import { LoginComponent } from "src/app/core/components/creator-signup-login/components/login/login.component";
import { CreatorService } from "src/app/service/creator.service";

export class User {
    userId!: number;
    type!: string;
    createdDate!: Date;
    password!: string;
    emailAddress!: string;
    creator!:Creator;
    company!:Company;    
}

export class Creator {
    name!: string;
}

export class Company {
    name!: string;
    phone!: string;
    website!: string;    
}