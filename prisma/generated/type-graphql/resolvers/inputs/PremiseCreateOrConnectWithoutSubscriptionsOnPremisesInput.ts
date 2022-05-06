import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutSubscriptionsOnPremisesInput;
}
