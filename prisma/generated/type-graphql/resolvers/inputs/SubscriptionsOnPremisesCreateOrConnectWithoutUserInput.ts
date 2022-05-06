import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionsOnPremisesCreateWithoutUserInput;
}
