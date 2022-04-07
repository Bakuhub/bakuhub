import { TagsOnPremisesCreateManyTagInputEnvelope } from "../inputs/TagsOnPremisesCreateManyTagInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutTagInput";
import { TagsOnPremisesCreateWithoutTagInput } from "../inputs/TagsOnPremisesCreateWithoutTagInput";
import { TagsOnPremisesScalarWhereInput } from "../inputs/TagsOnPremisesScalarWhereInput";
import { TagsOnPremisesUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithWhereWithoutTagInput";
import { TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";
export declare class TagsOnPremisesUpdateManyWithoutTagInput {
    create?: TagsOnPremisesCreateWithoutTagInput[] | undefined;
    connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutTagInput[] | undefined;
    upsert?: TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput[] | undefined;
    createMany?: TagsOnPremisesCreateManyTagInputEnvelope | undefined;
    set?: TagsOnPremisesWhereUniqueInput[] | undefined;
    disconnect?: TagsOnPremisesWhereUniqueInput[] | undefined;
    delete?: TagsOnPremisesWhereUniqueInput[] | undefined;
    connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
    update?: TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput[] | undefined;
    updateMany?: TagsOnPremisesUpdateManyWithWhereWithoutTagInput[] | undefined;
    deleteMany?: TagsOnPremisesScalarWhereInput[] | undefined;
}
