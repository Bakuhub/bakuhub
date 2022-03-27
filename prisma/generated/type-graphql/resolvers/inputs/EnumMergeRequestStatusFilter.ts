import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {NestedEnumMergeRequestStatusFilter} from "./NestedEnumMergeRequestStatusFilter";
import {MergeRequestStatus} from "../../enums/MergeRequestStatus";

@TypeGraphQL.InputType("EnumMergeRequestStatusFilter", {
    isAbstract: true
})
export class EnumMergeRequestStatusFilter {
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

    @TypeGraphQL.Field(_type => NestedEnumMergeRequestStatusFilter, {
        nullable: true
    })
    not?: NestedEnumMergeRequestStatusFilter | undefined;
}
