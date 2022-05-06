import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesWhereInput } from "../inputs/SubscriptionsOnTimelinesWhereInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesListRelationFilter", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesListRelationFilter {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  every?: SubscriptionsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  some?: SubscriptionsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput, {
    nullable: true
  })
  none?: SubscriptionsOnTimelinesWhereInput | undefined;
}
