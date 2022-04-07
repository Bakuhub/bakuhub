import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestWhereInput } from "../inputs/ThreadsOnMergeRequestWhereInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestRelationFilter", {
  isAbstract: true
})
export class ThreadsOnMergeRequestRelationFilter {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  is?: ThreadsOnMergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  isNot?: ThreadsOnMergeRequestWhereInput | undefined;
}
