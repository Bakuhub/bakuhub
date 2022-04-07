import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsScalarWhereInput } from "../inputs/ReactionOnVisionsScalarWhereInput";
import { ReactionOnVisionsUpdateManyMutationInput } from "../inputs/ReactionOnVisionsUpdateManyMutationInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsScalarWhereInput, {
    nullable: false
  })
  where!: ReactionOnVisionsScalarWhereInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnVisionsUpdateManyMutationInput;
}
