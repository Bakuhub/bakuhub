import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SnapshotCountOrderByAggregateInput} from "./SnapshotCountOrderByAggregateInput";
import {SnapshotMaxOrderByAggregateInput} from "./SnapshotMaxOrderByAggregateInput";
import {SnapshotMinOrderByAggregateInput} from "./SnapshotMinOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

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
    url?: "asc" | "desc" | undefined;

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
