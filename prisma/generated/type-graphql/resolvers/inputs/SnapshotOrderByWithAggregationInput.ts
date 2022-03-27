import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCountOrderByAggregateInput } from "../inputs/SnapshotCountOrderByAggregateInput";
import { SnapshotMaxOrderByAggregateInput } from "../inputs/SnapshotMaxOrderByAggregateInput";
import { SnapshotMinOrderByAggregateInput } from "../inputs/SnapshotMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SnapshotOrderByWithAggregationInput", {
  isAbstract: true
})
export class SnapshotOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  versionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  s3Url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sourceUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  caption?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SnapshotCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SnapshotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SnapshotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SnapshotMinOrderByAggregateInput | undefined;
}
