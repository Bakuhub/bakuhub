import { ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";
export declare class ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput {
    create?: ThreadsOnMergeRequestCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput | undefined;
    connect?: ThreadsOnMergeRequestWhereUniqueInput | undefined;
}
