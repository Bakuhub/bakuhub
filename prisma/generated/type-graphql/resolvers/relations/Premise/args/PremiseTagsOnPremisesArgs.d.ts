import { TagsOnPremisesOrderByWithRelationInput } from "../../../inputs/TagsOnPremisesOrderByWithRelationInput";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";
import { TagsOnPremisesWhereUniqueInput } from "../../../inputs/TagsOnPremisesWhereUniqueInput";
export declare class PremiseTagsOnPremisesArgs {
    where?: TagsOnPremisesWhereInput | undefined;
    orderBy?: TagsOnPremisesOrderByWithRelationInput[] | undefined;
    cursor?: TagsOnPremisesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"tagId" | "premiseId" | "assignedAt"> | undefined;
}
