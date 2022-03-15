import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesCreateInput } from "../../../inputs/TagsOnPremisesCreateInput";
import { TagsOnPremisesUpdateInput } from "../../../inputs/TagsOnPremisesUpdateInput";
import { TagsOnPremisesWhereUniqueInput } from "../../../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateInput, {
    nullable: false
  })
  create!: TagsOnPremisesCreateInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateInput, {
    nullable: false
  })
  update!: TagsOnPremisesUpdateInput;
}
