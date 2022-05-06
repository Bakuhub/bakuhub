import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateOrConnectWithoutVotesOnTimelineInput";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class TimelineCreateNestedOneWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutVotesOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;
}
