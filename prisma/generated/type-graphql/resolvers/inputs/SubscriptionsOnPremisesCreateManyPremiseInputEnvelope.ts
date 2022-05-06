import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateManyPremiseInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyPremiseInputEnvelope", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateManyPremiseInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyPremiseInput], {
    nullable: false
  })
  data!: SubscriptionsOnPremisesCreateManyPremiseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
