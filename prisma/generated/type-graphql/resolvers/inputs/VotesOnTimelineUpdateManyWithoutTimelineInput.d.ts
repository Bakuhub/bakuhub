import { VotesOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineScalarWhereInput } from "../inputs/VotesOnTimelineScalarWhereInput";
import { VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput";
import { VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput";
import { VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";
export declare class VotesOnTimelineUpdateManyWithoutTimelineInput {
    create?: VotesOnTimelineCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: VotesOnTimelineCreateManyTimelineInputEnvelope | undefined;
    set?: VotesOnTimelineWhereUniqueInput[] | undefined;
    disconnect?: VotesOnTimelineWhereUniqueInput[] | undefined;
    delete?: VotesOnTimelineWhereUniqueInput[] | undefined;
    connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
    update?: VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: VotesOnTimelineScalarWhereInput[] | undefined;
}
