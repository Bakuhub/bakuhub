import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesWhereInput } from "../inputs/SubscriptionsOnPremisesWhereInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesListRelationFilter", {
  isAbstract: true
})
export class SubscriptionsOnPremisesListRelationFilter {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  every?: SubscriptionsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  some?: SubscriptionsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput, {
    nullable: true
  })
  none?: SubscriptionsOnPremisesWhereInput | undefined;
}
