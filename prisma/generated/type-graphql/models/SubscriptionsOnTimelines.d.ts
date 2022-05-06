import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
export declare class SubscriptionsOnTimelines {
    user?: User;
    userId: string;
    timeline?: Timeline;
    timelineId: string;
    hasUnreadNotifications: boolean;
    lastReadAt: Date;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
}
