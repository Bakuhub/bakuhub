import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadOrderByWithRelationInput } from "../inputs/ThreadOrderByWithRelationInput";
import { VisionOrderByWithRelationInput } from "../inputs/VisionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnVisionOrderByWithRelationInput", {
  isAbstract: true
})
export class ThreadsOnVisionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput, {
    nullable: true
  })
  thread?: ThreadOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threadId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByWithRelationInput, {
    nullable: true
  })
  vision?: VisionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
