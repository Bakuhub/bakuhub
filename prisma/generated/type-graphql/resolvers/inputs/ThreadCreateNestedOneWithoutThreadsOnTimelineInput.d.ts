import { ThreadCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput";
import { ThreadCreateWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateWithoutThreadsOnTimelineInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";
export declare class ThreadCreateNestedOneWithoutThreadsOnTimelineInput {
    create?: ThreadCreateWithoutThreadsOnTimelineInput | undefined;
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnTimelineInput | undefined;
    connect?: ThreadWhereUniqueInput | undefined;
}
