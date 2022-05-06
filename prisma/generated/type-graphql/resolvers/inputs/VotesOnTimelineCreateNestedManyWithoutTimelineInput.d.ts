import { VotesOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";
export declare class VotesOnTimelineCreateNestedManyWithoutTimelineInput {
    create?: VotesOnTimelineCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: VotesOnTimelineCreateManyTimelineInputEnvelope | undefined;
    connect?: VotesOnTimelineWhereUniqueInput[] | undefined;
}
