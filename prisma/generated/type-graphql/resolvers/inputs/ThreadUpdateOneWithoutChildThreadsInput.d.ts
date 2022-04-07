import { ThreadCreateOrConnectWithoutChildThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutChildThreadsInput";
import { ThreadCreateWithoutChildThreadsInput } from "../inputs/ThreadCreateWithoutChildThreadsInput";
import { ThreadUpdateWithoutChildThreadsInput } from "../inputs/ThreadUpdateWithoutChildThreadsInput";
import { ThreadUpsertWithoutChildThreadsInput } from "../inputs/ThreadUpsertWithoutChildThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneWithoutChildThreadsInput {
    create?: ThreadCreateWithoutChildThreadsInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutChildThreadsInput | undefined;
    upsert?: ThreadUpsertWithoutChildThreadsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutChildThreadsInput | undefined;
}
