import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {PremiseRelationFilter} from "./PremiseRelationFilter";
import {StringFilter} from "./StringFilter";
import {TimelineRelationFilter} from "./TimelineRelationFilter";

@TypeGraphQL.InputType("PremisesOnTimelinesWhereInput", {
    isAbstract: true
})
export class PremisesOnTimelinesWhereInput {
    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput], {
        nullable: true
    })
    AND?: PremisesOnTimelinesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput], {
        nullable: true
    })
    OR?: PremisesOnTimelinesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereInput], {
        nullable: true
    })
    NOT?: PremisesOnTimelinesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => TimelineRelationFilter, {
        nullable: true
    })
    timeline?: TimelineRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    timelineId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => PremiseRelationFilter, {
        nullable: true
    })
    premise?: PremiseRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    premiseId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    assignedAt?: DateTimeFilter | undefined;
}
