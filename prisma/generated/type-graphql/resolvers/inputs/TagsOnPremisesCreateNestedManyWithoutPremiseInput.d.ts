import { TagsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";
export declare class TagsOnPremisesCreateNestedManyWithoutPremiseInput {
    create?: TagsOnPremisesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;
    createMany?: TagsOnPremisesCreateManyPremiseInputEnvelope | undefined;
    connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
}
