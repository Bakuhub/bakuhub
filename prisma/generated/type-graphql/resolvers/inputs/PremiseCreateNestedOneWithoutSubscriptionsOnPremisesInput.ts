import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
