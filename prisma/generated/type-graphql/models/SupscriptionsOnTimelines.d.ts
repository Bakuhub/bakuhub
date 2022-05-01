import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
export declare class SupscriptionsOnTimelines {
    user?: User;
    userId: string;
    timeline?: Timeline;
    timelineId: string;
    type: "AUTO" | "MANUAL";
    createdAt: Date;
    updatedAt: Date;
}
