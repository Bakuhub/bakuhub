import { Premise } from "../models/Premise";
import { User } from "../models/User";
export declare class SubscriptionsOnPremises {
    user?: User;
    userId: string;
    premise?: Premise;
    premiseId: string;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
}
