import { Premise } from "../models/Premise";
import { User } from "../models/User";
export declare class SubscriptionsOnPremises {
    user?: User;
    userId: string;
    premise?: Premise;
    premiseId: string;
    hasUnreadNotifications: boolean;
    lastReadAt: Date;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
}
