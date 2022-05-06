import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineUpdateWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateWithoutVotesOnTimelineInput";
import { TimelineUpsertWithoutVotesOnTimelineInput } from "../inputs/TimelineUpsertWithoutVotesOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutVotesOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutVotesOnTimelineInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutVotesOnTimelineInput | undefined;
}
