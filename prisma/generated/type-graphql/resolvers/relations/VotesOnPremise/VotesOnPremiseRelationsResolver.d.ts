import { Premise } from "../../../models/Premise";
import { User } from "../../../models/User";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class VotesOnPremiseRelationsResolver {
    user(votesOnPremise: VotesOnPremise, ctx: any): Promise<User>;
    premise(votesOnPremise: VotesOnPremise, ctx: any): Promise<Premise>;
}
