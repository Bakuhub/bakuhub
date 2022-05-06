import { ThreadsOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/ThreadsOnTimelineCreateManyTimelineInputEnvelope";
import { ThreadsOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutTimelineInput";
import { ThreadsOnTimelineCreateWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateWithoutTimelineInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";
export declare class ThreadsOnTimelineCreateNestedManyWithoutTimelineInput {
    create?: ThreadsOnTimelineCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: ThreadsOnTimelineCreateManyTimelineInputEnvelope | undefined;
    connect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
}
