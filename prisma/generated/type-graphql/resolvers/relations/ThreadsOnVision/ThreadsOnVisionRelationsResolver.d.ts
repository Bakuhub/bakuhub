import { Thread } from "../../../models/Thread";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { Vision } from "../../../models/Vision";
export declare class ThreadsOnVisionRelationsResolver {
    thread(threadsOnVision: ThreadsOnVision, ctx: any): Promise<Thread>;
    vision(threadsOnVision: ThreadsOnVision, ctx: any): Promise<Vision>;
}
