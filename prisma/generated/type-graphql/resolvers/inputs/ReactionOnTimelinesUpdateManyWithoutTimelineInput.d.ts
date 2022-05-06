import { ReactionOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/ReactionOnTimelinesCreateManyTimelineInputEnvelope";
import { ReactionOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateOrConnectWithoutTimelineInput";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesScalarWhereInput } from "../inputs/ReactionOnTimelinesScalarWhereInput";
import { ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";
export declare class ReactionOnTimelinesUpdateManyWithoutTimelineInput {
    create?: ReactionOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: ReactionOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: ReactionOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    set?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    delete?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    connect?: ReactionOnTimelinesWhereUniqueInput[] | undefined;
    update?: ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: ReactionOnTimelinesScalarWhereInput[] | undefined;
}
