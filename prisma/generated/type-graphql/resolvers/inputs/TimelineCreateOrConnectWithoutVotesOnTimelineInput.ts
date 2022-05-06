import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class TimelineCreateOrConnectWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutVotesOnTimelineInput;
}
