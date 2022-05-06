import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestOrderByWithRelationInput } from "../inputs/MergeRequestOrderByWithRelationInput";
import { PremiseOrderByWithRelationInput } from "../inputs/PremiseOrderByWithRelationInput";
import { ReactionOnVisionsOrderByRelationAggregateInput } from "../inputs/ReactionOnVisionsOrderByRelationAggregateInput";
import { ReferenceOrderByWithRelationInput } from "../inputs/ReferenceOrderByWithRelationInput";
import { ThreadsOnVisionOrderByRelationAggregateInput } from "../inputs/ThreadsOnVisionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
import { VotesOnVisionOrderByRelationAggregateInput } from "../inputs/VotesOnVisionOrderByRelationAggregateInput";
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
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReferenceOrderByWithRelationInput, {
    nullable: true
  })
  reference?: ReferenceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  referenceId?: "asc" | "desc" | undefined;

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
  thumbnail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  premiseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  draftMode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  prevVisionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByWithRelationInput, {
    nullable: true
  })
  prevVision?: VisionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput, {
    nullable: true
  })
  nextVisions?: VisionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionOrderByRelationAggregateInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestOrderByWithRelationInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsOrderByRelationAggregateInput, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionOrderByRelationAggregateInput, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionOrderByRelationAggregateInput | undefined;
}
