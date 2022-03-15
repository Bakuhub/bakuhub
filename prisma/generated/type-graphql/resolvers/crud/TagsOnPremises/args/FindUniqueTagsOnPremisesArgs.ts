import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesWhereUniqueInput } from "../../../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;
}
