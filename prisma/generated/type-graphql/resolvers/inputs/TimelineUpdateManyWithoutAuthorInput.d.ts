import { TimelineCreateManyAuthorInputEnvelope } from "../inputs/TimelineCreateManyAuthorInputEnvelope";
import { TimelineCreateOrConnectWithoutAuthorInput } from "../inputs/TimelineCreateOrConnectWithoutAuthorInput";
import { TimelineCreateWithoutAuthorInput } from "../inputs/TimelineCreateWithoutAuthorInput";
import { TimelineScalarWhereInput } from "../inputs/TimelineScalarWhereInput";
import { TimelineUpdateManyWithWhereWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithWhereWithoutAuthorInput";
import { TimelineUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/TimelineUpdateWithWhereUniqueWithoutAuthorInput";
import { TimelineUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/TimelineUpsertWithWhereUniqueWithoutAuthorInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineUpdateManyWithoutAuthorInput {
    create?: TimelineCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: TimelineUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: TimelineCreateManyAuthorInputEnvelope | undefined;
    set?: TimelineWhereUniqueInput[] | undefined;
    disconnect?: TimelineWhereUniqueInput[] | undefined;
    delete?: TimelineWhereUniqueInput[] | undefined;
    connect?: TimelineWhereUniqueInput[] | undefined;
    update?: TimelineUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: TimelineUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: TimelineScalarWhereInput[] | undefined;
}
