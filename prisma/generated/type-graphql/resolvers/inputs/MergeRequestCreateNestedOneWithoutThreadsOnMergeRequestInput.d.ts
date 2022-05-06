import { MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { MergeRequestCreateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";
export declare class MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput {
    create?: MergeRequestCreateWithoutThreadsOnMergeRequestInput | undefined;
    connectOrCreate?: MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;
    connect?: MergeRequestWhereUniqueInput | undefined;
}
