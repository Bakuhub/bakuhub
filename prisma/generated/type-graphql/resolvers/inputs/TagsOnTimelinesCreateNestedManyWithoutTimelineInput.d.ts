import { TagsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTimelineInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { TagsOnTimelinesCreateWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateWithoutTimelineInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";
export declare class TagsOnTimelinesCreateNestedManyWithoutTimelineInput {
    create?: TagsOnTimelinesCreateWithoutTimelineInput[] | undefined;
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;
    createMany?: TagsOnTimelinesCreateManyTimelineInputEnvelope | undefined;
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
}
