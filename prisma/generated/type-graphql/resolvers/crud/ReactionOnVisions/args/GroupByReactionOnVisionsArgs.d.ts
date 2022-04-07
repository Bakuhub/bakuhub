import { ReactionOnVisionsOrderByWithAggregationInput } from "../../../inputs/ReactionOnVisionsOrderByWithAggregationInput";
import { ReactionOnVisionsScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnVisionsScalarWhereWithAggregatesInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";
export declare class GroupByReactionOnVisionsArgs {
    where?: ReactionOnVisionsWhereInput | undefined;
    orderBy?: ReactionOnVisionsOrderByWithAggregationInput[] | undefined;
    by: Array<"userId" | "visionId" | "reaction" | "createdAt">;
    having?: ReactionOnVisionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
