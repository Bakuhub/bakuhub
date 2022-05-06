import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateWithoutSubscriptionsOnPremisesInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class PremiseUpsertWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseUpdateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  update!: PremiseUpdateWithoutSubscriptionsOnPremisesInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutSubscriptionsOnPremisesInput;
}
