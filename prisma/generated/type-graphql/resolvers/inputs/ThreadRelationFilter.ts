import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadWhereInput } from "../inputs/ThreadWhereInput";

@TypeGraphQL.InputType("ThreadRelationFilter", {
  isAbstract: true
})
export class ThreadRelationFilter {
  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  is?: ThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  isNot?: ThreadWhereInput | undefined;
}
