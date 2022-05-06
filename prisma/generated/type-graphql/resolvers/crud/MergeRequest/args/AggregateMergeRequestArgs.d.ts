import { MergeRequestOrderByWithRelationInput } from "../../../inputs/MergeRequestOrderByWithRelationInput";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";
export declare class AggregateMergeRequestArgs {
    where?: MergeRequestWhereInput | undefined;
    orderBy?: MergeRequestOrderByWithRelationInput[] | undefined;
    cursor?: MergeRequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
