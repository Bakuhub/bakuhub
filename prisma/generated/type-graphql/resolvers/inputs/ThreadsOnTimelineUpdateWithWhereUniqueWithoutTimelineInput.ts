import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineUpdateWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateWithoutTimelineInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutTimelineInput, {
    nullable: false
  })
  data!: ThreadsOnTimelineUpdateWithoutTimelineInput;
}
