import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesCreateManyInput } from "../../../inputs/TagsOnTimelinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyInput], {
    nullable: false
  })
  data!: TagsOnTimelinesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
