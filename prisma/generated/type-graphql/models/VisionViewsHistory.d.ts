import { User } from "../models/User";
import { Vision } from "../models/Vision";
export declare class VisionViewsHistory {
    id: string;
    visionId: string;
    vision?: Vision;
    userId: string;
    user?: User;
    createdAt: Date;
}
