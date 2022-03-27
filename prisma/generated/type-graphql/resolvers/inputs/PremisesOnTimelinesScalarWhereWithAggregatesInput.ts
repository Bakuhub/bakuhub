import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeWithAggregatesFilter} from "./DateTimeWithAggregatesFilter";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("PremisesOnTimelinesScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class PremisesOnTimelinesScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: PremisesOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    timelineId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    premiseId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    })
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
