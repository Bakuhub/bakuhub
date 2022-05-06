import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesCreateInput } from "../../../inputs/TagsOnTimelinesCreateInput";
import { TagsOnTimelinesUpdateInput } from "../../../inputs/TagsOnTimelinesUpdateInput";
import { TagsOnTimelinesWhereUniqueInput } from "../../../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateInput, {
    nullable: false
  })
  create!: TagsOnTimelinesCreateInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateInput, {
    nullable: false
  })
  update!: TagsOnTimelinesUpdateInput;
}
