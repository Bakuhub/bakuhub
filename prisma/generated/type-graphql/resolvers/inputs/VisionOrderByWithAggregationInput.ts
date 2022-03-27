import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCountOrderByAggregateInput} from "./VisionCountOrderByAggregateInput";
import {VisionMaxOrderByAggregateInput} from "./VisionMaxOrderByAggregateInput";
import {VisionMinOrderByAggregateInput} from "./VisionMinOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("VisionOrderByWithAggregationInput", {
    isAbstract: true
})
export class VisionOrderByWithAggregationInput {
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

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    authorId?: "asc" | "desc" | undefined;

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

    @TypeGraphQL.Field(_type => VisionCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: VisionCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => VisionMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: VisionMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => VisionMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: VisionMinOrderByAggregateInput | undefined;
}
