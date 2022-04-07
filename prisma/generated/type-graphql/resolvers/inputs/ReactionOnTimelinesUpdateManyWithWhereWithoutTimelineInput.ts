import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesScalarWhereInput } from "../inputs/ReactionOnTimelinesScalarWhereInput";
import { ReactionOnTimelinesUpdateManyMutationInput } from "../inputs/ReactionOnTimelinesUpdateManyMutationInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesScalarWhereInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesScalarWhereInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesUpdateManyMutationInput;
}
