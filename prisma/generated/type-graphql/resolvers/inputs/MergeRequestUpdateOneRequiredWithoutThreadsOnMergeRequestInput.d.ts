import { MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { MergeRequestCreateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput";
import { MergeRequestUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateWithoutThreadsOnMergeRequestInput";
import { MergeRequestUpsertWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpsertWithoutThreadsOnMergeRequestInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";
export declare class MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
    create?: MergeRequestCreateWithoutThreadsOnMergeRequestInput | undefined;
    connectOrCreate?: MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;
    upsert?: MergeRequestUpsertWithoutThreadsOnMergeRequestInput | undefined;
    connect?: MergeRequestWhereUniqueInput | undefined;
    update?: MergeRequestUpdateWithoutThreadsOnMergeRequestInput | undefined;
}
