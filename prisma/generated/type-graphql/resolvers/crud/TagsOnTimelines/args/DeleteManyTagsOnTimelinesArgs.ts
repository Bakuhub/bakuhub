import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: TagsOnTimelinesWhereInput | undefined;
}
