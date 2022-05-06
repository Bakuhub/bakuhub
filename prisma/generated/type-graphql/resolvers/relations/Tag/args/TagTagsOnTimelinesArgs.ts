import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesOrderByWithRelationInput } from "../../../inputs/TagsOnTimelinesOrderByWithRelationInput";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";
import { TagsOnTimelinesWhereUniqueInput } from "../../../inputs/TagsOnTimelinesWhereUniqueInput";
import { TagsOnTimelinesScalarFieldEnum } from "../../../../enums/TagsOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: TagsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TagsOnTimelinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagsOnTimelinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tagId" | "timelineId" | "assignedAt"> | undefined;
}
