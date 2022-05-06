import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesUpdateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SubscriptionsOnTimelinesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionsOnTimelinesCreateWithoutUserInput;
}
