import { ReferenceOrderByWithAggregationInput } from "../../../inputs/ReferenceOrderByWithAggregationInput";
import { ReferenceScalarWhereWithAggregatesInput } from "../../../inputs/ReferenceScalarWhereWithAggregatesInput";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";
export declare class GroupByReferenceArgs {
    where?: ReferenceWhereInput | undefined;
    orderBy?: ReferenceOrderByWithAggregationInput[] | undefined;
    by: "id"[];
    having?: ReferenceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
