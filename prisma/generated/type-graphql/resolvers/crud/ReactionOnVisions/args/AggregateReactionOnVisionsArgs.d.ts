import { ReactionOnVisionsOrderByWithRelationInput } from "../../../inputs/ReactionOnVisionsOrderByWithRelationInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class AggregateReactionOnVisionsArgs {
    where?: ReactionOnVisionsWhereInput | undefined;
    orderBy?: ReactionOnVisionsOrderByWithRelationInput[] | undefined;
    cursor?: ReactionOnVisionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
