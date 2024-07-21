import { City, TypeAccount } from "../enums/Enums";

export interface Account {
    accountID: number;
    numberAccount: string;
    balance: number;
    typeAccount: TypeAccount;
    city: City;
    customerID: number;
}