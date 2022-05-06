import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
export declare class VotesOnTimeline {
    user?: User;
    userId: string;
    timeline?: Timeline;
    timelineId: string;
    vote: number;
    createdAt: Date;
    updatedAt: Date;
}
