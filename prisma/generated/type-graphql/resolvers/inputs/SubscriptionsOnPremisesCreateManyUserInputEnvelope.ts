import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyUserInput } from "../inputs/SubscriptionsOnPremisesCreateManyUserInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateManyUserInput], {
    nullable: false
  })
  data!: SubscriptionsOnPremisesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
