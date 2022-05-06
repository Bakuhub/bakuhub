import { ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope } from "../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope";
import { ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";
export declare class ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput {
    create?: ThreadsOnMergeRequestCreateWithoutMergeRequestInput[] | undefined;
    connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput[] | undefined;
    createMany?: ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope | undefined;
    connect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
}
