import { ThreadsOnTimelineCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput";
import { ThreadsOnTimelineCreateWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateWithoutThreadInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";
export declare class ThreadsOnTimelineCreateNestedOneWithoutThreadInput {
    create?: ThreadsOnTimelineCreateWithoutThreadInput | undefined;
    connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutThreadInput | undefined;
    connect?: ThreadsOnTimelineWhereUniqueInput | undefined;
}
