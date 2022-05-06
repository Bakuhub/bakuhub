import { Premise } from "../../../models/Premise";
import { Thread } from "../../../models/Thread";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class ThreadsOnPremiseRelationsResolver {
    thread(threadsOnPremise: ThreadsOnPremise, ctx: any): Promise<Thread>;
    premise(threadsOnPremise: ThreadsOnPremise, ctx: any): Promise<Premise>;
}
