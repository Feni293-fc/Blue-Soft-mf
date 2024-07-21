import { City, TypeMovement } from "../enums/Enums";

export interface Movement {
    movementId: number;
    typeMovement: TypeMovement;
    value: number;
    date: Date;
    city: City;
    accountId: number;
}