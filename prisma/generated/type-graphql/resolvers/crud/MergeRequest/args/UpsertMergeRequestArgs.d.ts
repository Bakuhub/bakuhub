import { MergeRequestCreateInput } from "../../../inputs/MergeRequestCreateInput";
import { MergeRequestUpdateInput } from "../../../inputs/MergeRequestUpdateInput";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";
export declare class UpsertMergeRequestArgs {
    where: MergeRequestWhereUniqueInput;
    create: MergeRequestCreateInput;
    update: MergeRequestUpdateInput;
}
