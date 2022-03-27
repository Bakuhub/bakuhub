import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {NestedEnumPremiseStatusFilter} from "./NestedEnumPremiseStatusFilter";
import {NestedIntFilter} from "./NestedIntFilter";
import {PremiseStatus} from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("NestedEnumPremiseStatusWithAggregatesFilter", {
    isAbstract: true
})
export class NestedEnumPremiseStatusWithAggregatesFilter {
    @TypeGraphQL.Field(_type => PremiseStatus, {
        nullable: true
    })
    equals?: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION" | undefined;

    @TypeGraphQL.Field(_type => [PremiseStatus], {
        nullable: true
    })
    in?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;

    @TypeGraphQL.Field(_type => [PremiseStatus], {
        nullable: true
    })
    notIn?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;

    @TypeGraphQL.Field(_type => NestedEnumPremiseStatusWithAggregatesFilter, {
        nullable: true
    })
    not?: NestedEnumPremiseStatusWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => NestedIntFilter, {
        nullable: true
    })
    _count?: NestedIntFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter, {
        nullable: true
    })
    _min?: NestedEnumPremiseStatusFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter, {
        nullable: true
    })
    _max?: NestedEnumPremiseStatusFilter | undefined;
}
