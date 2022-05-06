import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesUpdateManyMutationInput } from "../../../inputs/TagsOnPremisesUpdateManyMutationInput";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnPremisesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  where?: TagsOnPremisesWhereInput | undefined;
}
