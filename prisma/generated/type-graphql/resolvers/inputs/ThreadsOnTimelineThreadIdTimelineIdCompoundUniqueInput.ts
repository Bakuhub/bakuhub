import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput", {
  isAbstract: true
})
export class ThreadsOnTimelineThreadIdTimelineIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;
}
