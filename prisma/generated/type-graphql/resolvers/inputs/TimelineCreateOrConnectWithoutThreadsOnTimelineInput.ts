import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateWithoutThreadsOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class TimelineCreateOrConnectWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutThreadsOnTimelineInput;
}
