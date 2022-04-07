import { TagCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnTimelinesInput";
import { TagCreateWithoutTagsOnTimelinesInput } from "../inputs/TagCreateWithoutTagsOnTimelinesInput";
import { TagUpdateWithoutTagsOnTimelinesInput } from "../inputs/TagUpdateWithoutTagsOnTimelinesInput";
import { TagUpsertWithoutTagsOnTimelinesInput } from "../inputs/TagUpsertWithoutTagsOnTimelinesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagUpdateOneRequiredWithoutTagsOnTimelinesInput {
    create?: TagCreateWithoutTagsOnTimelinesInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnTimelinesInput | undefined;
    upsert?: TagUpsertWithoutTagsOnTimelinesInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
    update?: TagUpdateWithoutTagsOnTimelinesInput | undefined;
}
