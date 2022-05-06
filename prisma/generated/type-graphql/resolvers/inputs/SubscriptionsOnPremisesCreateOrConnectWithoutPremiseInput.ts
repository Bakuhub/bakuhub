import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: SubscriptionsOnPremisesCreateWithoutPremiseInput;
}
