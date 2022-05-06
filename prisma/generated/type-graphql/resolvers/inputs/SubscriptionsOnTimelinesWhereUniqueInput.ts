import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput } from "../inputs/SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesWhereUniqueInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesWhereUniqueInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput, {
    nullable: true
  })
  userId_timelineId?: SubscriptionsOnTimelinesUserIdTimelineIdCompoundUniqueInput | undefined;
}
