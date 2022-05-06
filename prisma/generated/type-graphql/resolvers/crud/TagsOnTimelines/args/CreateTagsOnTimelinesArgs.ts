import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesCreateInput } from "../../../inputs/TagsOnTimelinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateInput, {
    nullable: false
  })
  data!: TagsOnTimelinesCreateInput;
}
