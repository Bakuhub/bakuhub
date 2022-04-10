import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class VotesOnVisionRelationsResolver {
    user(votesOnVision: VotesOnVision, ctx: any): Promise<User>;
    vision(votesOnVision: VotesOnVision, ctx: any): Promise<Vision>;
}
