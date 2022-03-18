import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateWithoutThreadInput } from "../inputs/ThreadsOnTimelineCreateWithoutThreadInput";
import { ThreadsOnTimelineUpdateWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateWithoutThreadInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpsertWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnTimelineUpsertWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: ThreadsOnTimelineUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ThreadsOnTimelineCreateWithoutThreadInput;
}
