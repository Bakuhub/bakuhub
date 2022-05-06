import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionsOnTimelinesCreateWithoutUserInput;
}
