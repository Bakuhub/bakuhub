import { TagCreateOrConnectWithoutTagsOnVisionsInput } from "../inputs/TagCreateOrConnectWithoutTagsOnVisionsInput";
import { TagCreateWithoutTagsOnVisionsInput } from "../inputs/TagCreateWithoutTagsOnVisionsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagCreateNestedOneWithoutTagsOnVisionsInput {
    create?: TagCreateWithoutTagsOnVisionsInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnVisionsInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
}
