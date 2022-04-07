import { ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput {
    create?: ThreadCreateWithoutThreadsOnMergeRequestInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
