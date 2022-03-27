import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateWithoutThreadsOnTimelineInput";
import { ThreadUpdateWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpdateWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class ThreadUpsertWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutThreadsOnTimelineInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutThreadsOnTimelineInput;
}
