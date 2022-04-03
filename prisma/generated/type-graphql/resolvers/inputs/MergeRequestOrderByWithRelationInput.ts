import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestOrderByRelationAggregateInput } from "../inputs/ThreadsOnMergeRequestOrderByRelationAggregateInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MergeRequestOrderByWithRelationInput", {
  isAbstract: true
})
export class MergeRequestOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByWithRelationInput, {
    nullable: true
  })
  vision?: VisionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestOrderByRelationAggregateInput, {
    nullable: true
  })
  threadsOnMergeRequest?: ThreadsOnMergeRequestOrderByRelationAggregateInput | undefined;
}
