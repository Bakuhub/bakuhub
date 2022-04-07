import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestOrderByWithRelationInput } from "../inputs/MergeRequestOrderByWithRelationInput";
import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnMergeRequestOrderByWithRelationInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput, {
    nullable: true
  })
  thread?: ThreadOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MergeRequestOrderByWithRelationInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mergeRequestId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
