import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesScalarWhereInput } from "../inputs/TagsOnTimelinesScalarWhereInput";
import { TagsOnTimelinesUpdateManyMutationInput } from "../inputs/TagsOnTimelinesUpdateManyMutationInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
  isAbstract: true
})
export class TagsOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesScalarWhereInput, {
    nullable: false
  })
  where!: TagsOnTimelinesScalarWhereInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnTimelinesUpdateManyMutationInput;
}
