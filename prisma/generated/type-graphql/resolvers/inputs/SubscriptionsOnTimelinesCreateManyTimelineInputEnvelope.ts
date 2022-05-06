import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateManyTimelineInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateManyTimelineInput], {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
