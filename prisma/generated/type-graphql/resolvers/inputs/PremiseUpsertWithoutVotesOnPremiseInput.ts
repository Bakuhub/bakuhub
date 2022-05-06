import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseUpdateWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class PremiseUpsertWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseUpdateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  update!: PremiseUpdateWithoutVotesOnPremiseInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutVotesOnPremiseInput;
}
