import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  where?: TagsOnPremisesWhereInput | undefined;
}
