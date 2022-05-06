import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput } from "../inputs/SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesWhereUniqueInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesWhereUniqueInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput, {
    nullable: true
  })
  userId_premiseId?: SubscriptionsOnPremisesUserIdPremiseIdCompoundUniqueInput | undefined;
}
