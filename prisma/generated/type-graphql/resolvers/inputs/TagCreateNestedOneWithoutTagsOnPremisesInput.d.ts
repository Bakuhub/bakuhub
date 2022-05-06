import { TagCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnPremisesInput";
import { TagCreateWithoutTagsOnPremisesInput } from "../inputs/TagCreateWithoutTagsOnPremisesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagCreateNestedOneWithoutTagsOnPremisesInput {
    create?: TagCreateWithoutTagsOnPremisesInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnPremisesInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
}
