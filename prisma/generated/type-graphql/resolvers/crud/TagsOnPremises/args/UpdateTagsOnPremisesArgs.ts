import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesUpdateInput } from "../../../inputs/TagsOnPremisesUpdateInput";
import { TagsOnPremisesWhereUniqueInput } from "../../../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateInput, {
    nullable: false
  })
  data!: TagsOnPremisesUpdateInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;
}
