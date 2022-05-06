import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVotesOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutVotesOnPremiseInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vote?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
