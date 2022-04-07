import { TagsOnTimelinesCreateManyTagInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTagInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";
export declare class TagsOnTimelinesCreateNestedManyWithoutTagInput {
    create?: TagsOnTimelinesCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTagInput[] | undefined;
    createMany?: TagsOnTimelinesCreateManyTagInputEnvelope | undefined;
    connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
}
