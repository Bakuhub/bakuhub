import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {NestedEnumMergeRequestStatusFilter} from "./NestedEnumMergeRequestStatusFilter";
import {NestedEnumMergeRequestStatusWithAggregatesFilter} from "./NestedEnumMergeRequestStatusWithAggregatesFilter";
import {NestedIntFilter} from "./NestedIntFilter";
import {MergeRequestStatus} from "../../enums/MergeRequestStatus";

@TypeGraphQL.InputType("EnumMergeRequestStatusWithAggregatesFilter", {
    isAbstract: true
})
export class EnumMergeRequestStatusWithAggregatesFilter {
    @TypeGraphQL.Field(_type => MergeRequestStatus, {
        nullable: true
    })
    equals?: "OPEN" | "CLOSE" | "MERGED" | undefined;

    @TypeGraphQL.Field(_type => [MergeRequestStatus], {
        nullable: true
    })
    in?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;

    @TypeGraphQL.Field(_type => [MergeRequestStatus], {
        nullable: true
    })
    notIn?: Array<"OPEN" | "CLOSE" | "MERGED"> | undefined;

    @TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusWithAggregatesFilter, {
        nullable: true
    })
    not?: NestedEnumMergeRequestStatusWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    })
    _count?: NestedIntFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter, {
        nullable: true
    })
    _min?: NestedEnumMergeRequestStatusFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter, {
        nullable: true
    })
    _max?: NestedEnumMergeRequestStatusFilter | undefined;
}
