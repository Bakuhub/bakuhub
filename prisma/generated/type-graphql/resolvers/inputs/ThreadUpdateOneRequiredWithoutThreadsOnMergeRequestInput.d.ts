import { ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpdateWithoutThreadsOnMergeRequestInput";
import { ThreadUpsertWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpsertWithoutThreadsOnMergeRequestInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
    create?: ThreadCreateWithoutThreadsOnMergeRequestInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;
    upsert?: ThreadUpsertWithoutThreadsOnMergeRequestInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutThreadsOnMergeRequestInput | undefined;
}
