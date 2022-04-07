import { TagsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTimelineInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { TagsOnTimelinesCreateWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateWithoutTimelineInput";
import { TagsOnTimelinesScalarWhereInput } from "../inputs/TagsOnTimelinesScalarWhereInput";
import { TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";
export declare class TagsOnTimelinesUpdateManyWithoutTimelineInput {
    create?: TagsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    upsert?: TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;
    createMany?: TagsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    set?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    disconnect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    delete?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
    update?: TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;
    updateMany?: TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;
    deleteMany?: TagsOnTimelinesScalarWhereInput[] | undefined;
}
