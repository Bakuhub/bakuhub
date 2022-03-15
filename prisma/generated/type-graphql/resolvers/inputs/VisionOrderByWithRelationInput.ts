import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseOrderByRelationAggregateInput } from "../inputs/ActiveVisionOnPremiseOrderByRelationAggregateInput";
import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VisionOrderByWithRelationInput", {
  isAbstract: true
})
export class VisionOrderByWithRelationInput {
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
  activityDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput, {
    nullable: true
  })
  premise?: PremiseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseOrderByRelationAggregateInput, {
    nullable: true
  })
  activeVisionOnPremise?: ActiveVisionOnPremiseOrderByRelationAggregateInput | undefined;
}
