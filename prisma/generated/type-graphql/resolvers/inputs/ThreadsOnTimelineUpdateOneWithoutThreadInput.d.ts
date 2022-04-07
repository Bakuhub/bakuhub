import { ThreadsOnTimelineCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput";
import { ThreadsOnTimelineCreateWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateWithoutThreadInput";
import { ThreadsOnTimelineUpdateWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateWithoutThreadInput";
import { ThreadsOnTimelineUpsertWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpsertWithoutThreadInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";
export declare class ThreadsOnTimelineUpdateOneWithoutThreadInput {
    create?: ThreadsOnTimelineCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutThreadInput | undefined;
    upsert?: ThreadsOnTimelineUpsertWithoutThreadInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ThreadsOnTimelineWhereUniqueInput | undefined;
    update?: ThreadsOnTimelineUpdateWithoutThreadInput | undefined;
}
