import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionScalarWhereInput } from "../inputs/VotesOnVisionScalarWhereInput";
import { VotesOnVisionUpdateManyMutationInput } from "../inputs/VotesOnVisionUpdateManyMutationInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnVisionScalarWhereInput, {
    nullable: false
  })
  where!: VotesOnVisionScalarWhereInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnVisionUpdateManyMutationInput;
}
