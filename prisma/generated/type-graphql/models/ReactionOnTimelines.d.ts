import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
export declare class ReactionOnTimelines {
    user?: User;
    userId: string;
    timeline?: Timeline;
    timelineId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
}
