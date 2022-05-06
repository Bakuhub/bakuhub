import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutSubscriptionsOnTimelinesInput";
import { TimelineUpsertWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpsertWithoutSubscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutSubscriptionsOnTimelinesInput | undefined;
}
