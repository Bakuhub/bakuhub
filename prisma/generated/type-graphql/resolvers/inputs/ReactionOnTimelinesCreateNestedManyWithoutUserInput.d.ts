import { ReactionOnTimelinesCreateManyUserInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";
export declare class ReactionOnTimelinesCreateNestedManyWithoutUserInput {
    create?: ReactionOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: ReactionOnTimelinesCreateManyUserInputEnvelope | undefined;
    connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
}
