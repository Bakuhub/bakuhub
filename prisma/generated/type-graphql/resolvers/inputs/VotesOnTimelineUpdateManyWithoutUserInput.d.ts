import { VotesOnTimelineCreateManyUserInputEnvelope } from "../inputs/VotesOnTimelineCreateManyUserInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutUserInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineScalarWhereInput } from "../inputs/VotesOnTimelineScalarWhereInput";
import { VotesOnTimelineUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnTimelineUpdateManyWithWhereWithoutUserInput";
import { VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";
export declare class VotesOnTimelineUpdateManyWithoutUserInput {
    create?: VotesOnTimelineCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: VotesOnTimelineCreateManyUserInputEnvelope | undefined;
    set?: VotesOnTimelineWhereUniqueInput[] | undefined;
    disconnect?: VotesOnTimelineWhereUniqueInput[] | undefined;
    delete?: VotesOnTimelineWhereUniqueInput[] | undefined;
    connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
    update?: VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: VotesOnTimelineUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: VotesOnTimelineScalarWhereInput[] | undefined;
}
