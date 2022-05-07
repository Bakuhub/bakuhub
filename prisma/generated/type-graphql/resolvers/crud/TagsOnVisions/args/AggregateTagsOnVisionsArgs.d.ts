import { TagsOnVisionsOrderByWithRelationInput } from "../../../inputs/TagsOnVisionsOrderByWithRelationInput";
import { TagsOnVisionsWhereInput } from "../../../inputs/TagsOnVisionsWhereInput";
import { TagsOnVisionsWhereUniqueInput } from "../../../inputs/TagsOnVisionsWhereUniqueInput";
export declare class AggregateTagsOnVisionsArgs {
    where?: TagsOnVisionsWhereInput | undefined;
    orderBy?: TagsOnVisionsOrderByWithRelationInput[] | undefined;
    cursor?: TagsOnVisionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
