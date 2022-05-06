import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { PremiseCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput";
import { PremiseUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateWithoutSubscriptionsOnPremisesInput";
import { PremiseUpsertWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpsertWithoutSubscriptionsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutSubscriptionsOnPremisesInput | undefined;
}
