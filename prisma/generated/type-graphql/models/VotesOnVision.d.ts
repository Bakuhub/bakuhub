import { User } from "../models/User";
import { Vision } from "../models/Vision";
export declare class VotesOnVision {
    user?: User;
    userId: string;
    vision?: Vision;
    visionId: string;
    vote: number;
    createdAt: Date;
}
