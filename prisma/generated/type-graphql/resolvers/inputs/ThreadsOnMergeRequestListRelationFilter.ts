import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestWhereInput } from "../inputs/ThreadsOnMergeRequestWhereInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestListRelationFilter", {
  isAbstract: true
})
export class ThreadsOnMergeRequestListRelationFilter {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  every?: ThreadsOnMergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  some?: ThreadsOnMergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput, {
    nullable: true
  })
  none?: ThreadsOnMergeRequestWhereInput | undefined;
}
