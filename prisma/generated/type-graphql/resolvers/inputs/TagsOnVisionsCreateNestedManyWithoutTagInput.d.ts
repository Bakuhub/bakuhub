import { TagsOnVisionsCreateManyTagInputEnvelope } from "../inputs/TagsOnVisionsCreateManyTagInputEnvelope";
import { TagsOnVisionsCreateOrConnectWithoutTagInput } from "../inputs/TagsOnVisionsCreateOrConnectWithoutTagInput";
import { TagsOnVisionsCreateWithoutTagInput } from "../inputs/TagsOnVisionsCreateWithoutTagInput";
import { TagsOnVisionsWhereUniqueInput } from "../inputs/TagsOnVisionsWhereUniqueInput";
export declare class TagsOnVisionsCreateNestedManyWithoutTagInput {
    create?: TagsOnVisionsCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnVisionsCreateOrConnectWithoutTagInput[] | undefined;
    createMany?: TagsOnVisionsCreateManyTagInputEnvelope | undefined;
    connect?: TagsOnVisionsWhereUniqueInput[] | undefined;
}
