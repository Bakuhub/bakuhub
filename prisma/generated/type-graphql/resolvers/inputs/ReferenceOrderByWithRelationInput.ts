import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotOrderByRelationAggregateInput } from "../inputs/SnapshotOrderByRelationAggregateInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReferenceOrderByWithRelationInput", {
  isAbstract: true
})
export class ReferenceOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SnapshotOrderByRelationAggregateInput, {
    nullable: true
  })
  snapshots?: SnapshotOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput, {
    nullable: true
  })
  Vision?: VisionOrderByRelationAggregateInput | undefined;
}
