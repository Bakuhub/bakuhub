import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineWhereInput } from "../inputs/ThreadsOnTimelineWhereInput";

@TypeGraphQL.InputType("ThreadsOnTimelineRelationFilter", {
  isAbstract: true
})
export class ThreadsOnTimelineRelationFilter {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  is?: ThreadsOnTimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  isNot?: ThreadsOnTimelineWhereInput | undefined;
}
