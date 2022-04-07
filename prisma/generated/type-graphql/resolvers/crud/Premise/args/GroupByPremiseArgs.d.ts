import { PremiseOrderByWithAggregationInput } from "../../../inputs/PremiseOrderByWithAggregationInput";
import { PremiseScalarWhereWithAggregatesInput } from "../../../inputs/PremiseScalarWhereWithAggregatesInput";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";
export declare class GroupByPremiseArgs {
    where?: PremiseWhereInput | undefined;
    orderBy?: PremiseOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "createdAt" | "updatedAt" | "status" | "authorId">;
    having?: PremiseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
