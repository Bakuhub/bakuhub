import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesUpdateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesUpdateWithoutUserInput;
}
