import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateWithoutVotesOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutVotesOnPremiseInput;
}
