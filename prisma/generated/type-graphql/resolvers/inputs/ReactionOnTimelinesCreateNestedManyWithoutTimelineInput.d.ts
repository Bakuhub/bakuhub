import { ReactionOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";
export declare class ReactionOnTimelinesCreateNestedManyWithoutTimelineInput {
    create?: ReactionOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: ReactionOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
}
