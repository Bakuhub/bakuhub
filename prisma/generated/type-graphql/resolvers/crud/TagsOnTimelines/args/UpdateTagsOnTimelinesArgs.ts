import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesUpdateInput } from "../../../inputs/TagsOnTimelinesUpdateInput";
import { TagsOnTimelinesWhereUniqueInput } from "../../../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateInput, {
    nullable: false
  })
  data!: TagsOnTimelinesUpdateInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;
}
