import { ReactionOnVisionsOrderByWithRelationInput } from "../../../inputs/ReactionOnVisionsOrderByWithRelationInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";
export declare class FindManyReactionOnVisionsArgs {
    where?: ReactionOnVisionsWhereInput | undefined;
    orderBy?: ReactionOnVisionsOrderByWithRelationInput[] | undefined;
    cursor?: ReactionOnVisionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"userId" | "visionId" | "reaction" | "createdAt"> | undefined;
}
