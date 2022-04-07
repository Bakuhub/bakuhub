import { Thread } from "../models/Thread";
import { Vision } from "../models/Vision";
export declare class ThreadsOnVision {
    thread?: Thread;
    threadId: string;
    vision?: Vision;
    visionId: string;
    assignedAt: Date;
}
