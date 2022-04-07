import { ThreadsOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/ThreadsOnTimelineCreateManyTimelineInputEnvelope";
import { ThreadsOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutTimelineInput";
import { ThreadsOnTimelineCreateWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateWithoutTimelineInput";
import { ThreadsOnTimelineScalarWhereInput } from "../inputs/ThreadsOnTimelineScalarWhereInput";
import { ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput";
import { ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput";
import { ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";
export declare class ThreadsOnTimelineUpdateManyWithoutTimelineInput {
    create?: ThreadsOnTimelineCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: ThreadsOnTimelineCreateManyTimelineInputEnvelope | undefined;
    set?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
    disconnect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
    delete?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
    connect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;
    update?: ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: ThreadsOnTimelineScalarWhereInput[] | undefined;
}
