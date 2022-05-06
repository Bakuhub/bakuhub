import { Thread } from "../../../models/Thread";
import { User } from "../../../models/User";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class VotesOnThreadRelationsResolver {
    user(votesOnThread: VotesOnThread, ctx: any): Promise<User>;
    thread(votesOnThread: VotesOnThread, ctx: any): Promise<Thread>;
}
