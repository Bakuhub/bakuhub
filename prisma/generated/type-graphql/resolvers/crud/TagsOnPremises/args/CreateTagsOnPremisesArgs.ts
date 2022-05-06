import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesCreateInput } from "../../../inputs/TagsOnPremisesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesCreateInput, {
    nullable: false
  })
  data!: TagsOnPremisesCreateInput;
}
