import { TagCreateOrConnectWithoutTagsOnVisionsInput } from "../inputs/TagCreateOrConnectWithoutTagsOnVisionsInput";
import { TagCreateWithoutTagsOnVisionsInput } from "../inputs/TagCreateWithoutTagsOnVisionsInput";
import { TagUpdateWithoutTagsOnVisionsInput } from "../inputs/TagUpdateWithoutTagsOnVisionsInput";
import { TagUpsertWithoutTagsOnVisionsInput } from "../inputs/TagUpsertWithoutTagsOnVisionsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagUpdateOneRequiredWithoutTagsOnVisionsInput {
    create?: TagCreateWithoutTagsOnVisionsInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnVisionsInput | undefined;
    upsert?: TagUpsertWithoutTagsOnVisionsInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
    update?: TagUpdateWithoutTagsOnVisionsInput | undefined;
}
