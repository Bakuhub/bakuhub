import { TagsOnPremisesCreateManyTagInputEnvelope } from "../inputs/TagsOnPremisesCreateManyTagInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutTagInput";
import { TagsOnPremisesCreateWithoutTagInput } from "../inputs/TagsOnPremisesCreateWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";
export declare class TagsOnPremisesCreateNestedManyWithoutTagInput {
    create?: TagsOnPremisesCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutTagInput[] | undefined;
    createMany?: TagsOnPremisesCreateManyTagInputEnvelope | undefined;
    connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
}
