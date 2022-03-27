import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseOrderByWithRelationInput} from "./PremiseOrderByWithRelationInput";
import {TimelineOrderByWithRelationInput} from "./TimelineOrderByWithRelationInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("PremisesOnTimelinesOrderByWithRelationInput", {
    isAbstract: true
})
export class PremisesOnTimelinesOrderByWithRelationInput {
    @TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput, {
        nullable: true
    })
    timeline?: TimelineOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    timelineId?: "asc" | "desc" | undefined;

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
