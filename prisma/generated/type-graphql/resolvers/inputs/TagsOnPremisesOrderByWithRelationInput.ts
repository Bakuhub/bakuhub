import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOnPremisesOrderByWithRelationInput", {
  isAbstract: true
})
export class TagsOnPremisesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput, {
    nullable: true
  })
  premise?: PremiseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
