import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActiveVisionOnPremiseOrderByWithRelationInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => PremiseOrderByWithRelationInput, {
    nullable: true
  })
  premise?: PremiseOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByWithRelationInput, {
    nullable: true
  })
  vision?: VisionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;
}
