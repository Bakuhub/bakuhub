import { ReactionOnTimelinesCreateManyUserInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesScalarWhereInput } from "../inputs/ReactionOnTimelinesScalarWhereInput";
import { ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput";
import { ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput";
import { ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";
export declare class ReactionOnTimelinesUpdateManyWithoutUserInput {
    create?: ReactionOnTimelinesCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: ReactionOnTimelinesCreateManyUserInputEnvelope | undefined;
    set?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    delete?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    update?: ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ReactionOnTimelinesScalarWhereInput[] | undefined;
}
