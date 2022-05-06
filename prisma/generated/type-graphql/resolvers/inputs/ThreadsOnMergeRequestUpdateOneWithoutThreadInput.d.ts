import { ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestUpdateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpdateWithoutThreadInput";
import { ThreadsOnMergeRequestUpsertWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpsertWithoutThreadInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";
export declare class ThreadsOnMergeRequestUpdateOneWithoutThreadInput {
    create?: ThreadsOnMergeRequestCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput | undefined;
    upsert?: ThreadsOnMergeRequestUpsertWithoutThreadInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ThreadsOnMergeRequestWhereUniqueInput | undefined;
    update?: ThreadsOnMergeRequestUpdateWithoutThreadInput | undefined;
}
