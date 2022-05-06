import { TimelineCreateManyAuthorInputEnvelope } from "../inputs/TimelineCreateManyAuthorInputEnvelope";
import { TimelineCreateOrConnectWithoutAuthorInput } from "../inputs/TimelineCreateOrConnectWithoutAuthorInput";
import { TimelineCreateWithoutAuthorInput } from "../inputs/TimelineCreateWithoutAuthorInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";
export declare class TimelineCreateNestedManyWithoutAuthorInput {
    create?: TimelineCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: TimelineCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: TimelineCreateManyAuthorInputEnvelope | undefined;
    connect?: TimelineWhereUniqueInput[] | undefined;
}
