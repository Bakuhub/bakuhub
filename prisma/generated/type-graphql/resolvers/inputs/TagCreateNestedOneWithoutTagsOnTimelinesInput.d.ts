import { TagCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnTimelinesInput";
import { TagCreateWithoutTagsOnTimelinesInput } from "../inputs/TagCreateWithoutTagsOnTimelinesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagCreateNestedOneWithoutTagsOnTimelinesInput {
    create?: TagCreateWithoutTagsOnTimelinesInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnTimelinesInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
}
