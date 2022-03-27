import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {MergeRequestOrderByWithRelationInput} from "./MergeRequestOrderByWithRelationInput";
import {PremiseOrderByWithRelationInput} from "./PremiseOrderByWithRelationInput";
import {ThreadsOnVisionOrderByRelationAggregateInput} from "./ThreadsOnVisionOrderByRelationAggregateInput";
import {UserOrderByWithRelationInput} from "./UserOrderByWithRelationInput";
import {VisionOrderByRelationAggregateInput} from "./VisionOrderByRelationAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

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
    nextVision?: VisionOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionOrderByRelationAggregateInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => MergeRequestOrderByWithRelationInput, {
        nullable: true
    })
    mergeRequest?: MergeRequestOrderByWithRelationInput | undefined;
}
