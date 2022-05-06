import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyUserInput } from "../inputs/SubscriptionsOnTimelinesCreateManyUserInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyUserInput], {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
