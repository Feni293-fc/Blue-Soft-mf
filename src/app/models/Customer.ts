import { TypeCustomer } from "../enums/Enums";

export interface Customer {
    customerID: number;
    nameCustomer: string;
    typeCustomer: TypeCustomer;
}