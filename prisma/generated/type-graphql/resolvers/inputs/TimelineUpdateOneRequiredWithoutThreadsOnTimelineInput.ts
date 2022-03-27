import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutThreadsOnTimelineInput";
import { TimelineCreateWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateWithoutThreadsOnTimelineInput";
import { TimelineUpdateWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpdateWithoutThreadsOnTimelineInput";
import { TimelineUpsertWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpsertWithoutThreadsOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutThreadsOnTimelineInput | undefined;
}
