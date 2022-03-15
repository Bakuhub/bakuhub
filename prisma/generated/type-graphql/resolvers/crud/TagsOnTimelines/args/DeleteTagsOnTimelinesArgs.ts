import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesWhereUniqueInput } from "../../../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;
}
