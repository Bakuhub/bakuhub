import { ThreadCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadUpdateWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateWithoutReactionOnThreadsInput";
import { ThreadUpsertWithoutReactionOnThreadsInput } from "../inputs/ThreadUpsertWithoutReactionOnThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutReactionOnThreadsInput {
    create?: ThreadCreateWithoutReactionOnThreadsInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutReactionOnThreadsInput | undefined;
    upsert?: ThreadUpsertWithoutReactionOnThreadsInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutReactionOnThreadsInput | undefined;
}
