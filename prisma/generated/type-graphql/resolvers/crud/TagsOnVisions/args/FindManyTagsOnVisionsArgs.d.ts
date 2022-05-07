import { TagsOnVisionsOrderByWithRelationInput } from "../../../inputs/TagsOnVisionsOrderByWithRelationInput";
import { TagsOnVisionsWhereInput } from "../../../inputs/TagsOnVisionsWhereInput";
import { TagsOnVisionsWhereUniqueInput } from "../../../inputs/TagsOnVisionsWhereUniqueInput";
export declare class FindManyTagsOnVisionsArgs {
    where?: TagsOnVisionsWhereInput | undefined;
    orderBy?: TagsOnVisionsOrderByWithRelationInput[] | undefined;
    cursor?: TagsOnVisionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"tagId" | "visionId" | "assignedAt"> | undefined;
}
