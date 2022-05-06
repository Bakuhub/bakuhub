import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesUpdateManyMutationInput } from "../../../inputs/TagsOnTimelinesUpdateManyMutationInput";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnTimelinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: TagsOnTimelinesWhereInput | undefined;
}
