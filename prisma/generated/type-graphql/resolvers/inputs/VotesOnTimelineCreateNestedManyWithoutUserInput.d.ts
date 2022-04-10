import { VotesOnTimelineCreateManyUserInputEnvelope } from "../inputs/VotesOnTimelineCreateManyUserInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutUserInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";
export declare class VotesOnTimelineCreateNestedManyWithoutUserInput {
    create?: VotesOnTimelineCreateWithoutUserInput[] | undefined;
    connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: VotesOnTimelineCreateManyUserInputEnvelope | undefined;
    connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
}
