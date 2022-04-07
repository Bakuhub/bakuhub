import { Premise } from "../models/Premise";
import { Thread } from "../models/Thread";
export declare class ThreadsOnPremise {
    thread?: Thread;
    threadId: string;
    premise?: Premise;
    premiseId: string;
    assignedAt: Date;
}
