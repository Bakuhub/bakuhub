import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCountOrderByAggregateInput} from "./PremisesOnTimelinesCountOrderByAggregateInput";
import {PremisesOnTimelinesMaxOrderByAggregateInput} from "./PremisesOnTimelinesMaxOrderByAggregateInput";
import {PremisesOnTimelinesMinOrderByAggregateInput} from "./PremisesOnTimelinesMinOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("PremisesOnTimelinesOrderByWithAggregationInput", {
    isAbstract: true
})
export class PremisesOnTimelinesOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    timelineId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    premiseId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: PremisesOnTimelinesCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: PremisesOnTimelinesMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: PremisesOnTimelinesMinOrderByAggregateInput | undefined;
}
