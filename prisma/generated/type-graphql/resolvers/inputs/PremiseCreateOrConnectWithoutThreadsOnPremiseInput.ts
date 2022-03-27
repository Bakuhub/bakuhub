import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateWithoutThreadsOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutThreadsOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutThreadsOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutThreadsOnPremiseInput;
}
