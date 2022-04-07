import { ThreadCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput";
import { ThreadCreateWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateWithoutThreadsOnTimelineInput";
import { ThreadUpdateWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpdateWithoutThreadsOnTimelineInput";
import { ThreadUpsertWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpsertWithoutThreadsOnTimelineInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput {
    create?: ThreadCreateWithoutThreadsOnTimelineInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnTimelineInput | undefined;
    upsert?: ThreadUpsertWithoutThreadsOnTimelineInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
    update?: ThreadUpdateWithoutThreadsOnTimelineInput | undefined;
}
