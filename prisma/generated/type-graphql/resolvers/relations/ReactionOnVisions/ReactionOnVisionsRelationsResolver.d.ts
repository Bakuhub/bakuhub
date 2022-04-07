import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
export declare class ReactionOnVisionsRelationsResolver {
    user(reactionOnVisions: ReactionOnVisions, ctx: any): Promise<User>;
    vision(reactionOnVisions: ReactionOnVisions, ctx: any): Promise<Vision>;
}
