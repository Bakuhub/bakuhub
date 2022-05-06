import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesScalarWhereInput } from "../inputs/SubscriptionsOnTimelinesScalarWhereInput";
import { SubscriptionsOnTimelinesUpdateManyMutationInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyMutationInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesScalarWhereInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesScalarWhereInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesUpdateManyMutationInput;
}
