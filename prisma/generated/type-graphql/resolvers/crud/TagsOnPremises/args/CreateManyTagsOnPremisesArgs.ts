import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesCreateManyInput } from "../../../inputs/TagsOnPremisesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateManyInput], {
    nullable: false
  })
  data!: TagsOnPremisesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
