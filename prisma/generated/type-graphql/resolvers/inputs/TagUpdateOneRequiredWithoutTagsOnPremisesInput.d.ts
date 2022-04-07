import { TagCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnPremisesInput";
import { TagCreateWithoutTagsOnPremisesInput } from "../inputs/TagCreateWithoutTagsOnPremisesInput";
import { TagUpdateWithoutTagsOnPremisesInput } from "../inputs/TagUpdateWithoutTagsOnPremisesInput";
import { TagUpsertWithoutTagsOnPremisesInput } from "../inputs/TagUpsertWithoutTagsOnPremisesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagUpdateOneRequiredWithoutTagsOnPremisesInput {
    create?: TagCreateWithoutTagsOnPremisesInput | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnPremisesInput | undefined;
    upsert?: TagUpsertWithoutTagsOnPremisesInput | undefined;
    connect?: TagWhereUniqueInput | undefined;
    update?: TagUpdateWithoutTagsOnPremisesInput | undefined;
}
