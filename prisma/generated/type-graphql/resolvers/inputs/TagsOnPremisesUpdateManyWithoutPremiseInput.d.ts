import { TagsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesScalarWhereInput } from "../inputs/TagsOnPremisesScalarWhereInput";
import { TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput";
import { TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput";
import { TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";
export declare class TagsOnPremisesUpdateManyWithoutPremiseInput {
    create?: TagsOnPremisesCreateWithoutPremiseInput[] | undefined;
    connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;
    upsert?: TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;
    createMany?: TagsOnPremisesCreateManyPremiseInputEnvelope | undefined;
    set?: TagsOnPremisesWhereUniqueInput[] | undefined;
    disconnect?: TagsOnPremisesWhereUniqueInput[] | undefined;
    delete?: TagsOnPremisesWhereUniqueInput[] | undefined;
    connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
    update?: TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;
    updateMany?: TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput[] | undefined;
    deleteMany?: TagsOnPremisesScalarWhereInput[] | undefined;
}
