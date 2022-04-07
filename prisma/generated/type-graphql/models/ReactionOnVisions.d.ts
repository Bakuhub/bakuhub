import { User } from "../models/User";
import { Vision } from "../models/Vision";
export declare class ReactionOnVisions {
    user?: User;
    userId: string;
    vision?: Vision;
    visionId: string;
    reaction: "LIKE" | "UPVOTE" | "DOWNVOTE";
    createdAt: Date;
}
