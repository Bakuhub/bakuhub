import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateWithoutTimelineInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateOrConnectWithoutTimelineInput", {
  isAbstract: true
})
export class ThreadsOnTimelineCreateOrConnectWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: ThreadsOnTimelineCreateWithoutTimelineInput;
}
