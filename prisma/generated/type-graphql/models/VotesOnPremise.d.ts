import { Premise } from "../models/Premise";
import { User } from "../models/User";
export declare class VotesOnPremise {
    user?: User;
    userId: string;
    premise?: Premise;
    premiseId: string;
    vote: number;
    createdAt: Date;
}
