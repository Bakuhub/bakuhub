import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineWhereInput } from "../inputs/TimelineWhereInput";

@TypeGraphQL.InputType("TimelineRelationFilter", {
  isAbstract: true
})
export class TimelineRelationFilter {
  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  is?: TimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  isNot?: TimelineWhereInput | undefined;
}
