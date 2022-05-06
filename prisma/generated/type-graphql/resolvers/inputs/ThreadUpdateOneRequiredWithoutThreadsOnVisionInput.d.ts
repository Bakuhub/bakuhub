import { ThreadCreateOrConnectWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnVisionInput";
import { ThreadCreateWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateWithoutThreadsOnVisionInput";
import { ThreadUpdateWithoutThreadsOnVisionInput } from "../inputs/ThreadUpdateWithoutThreadsOnVisionInput";
import { ThreadUpsertWithoutThreadsOnVisionInput } from "../inputs/ThreadUpsertWithoutThreadsOnVisionInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutThreadsOnVisionInput {
    create?: ThreadCreateWithoutThreadsOnVisionInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnVisionInput | undefined;
    upsert?: ThreadUpsertWithoutThreadsOnVisionInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutThreadsOnVisionInput | undefined;
}
