import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateNestedOneWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnTimelineCreateWithoutThreadInput {
  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutThreadsOnTimelineInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
