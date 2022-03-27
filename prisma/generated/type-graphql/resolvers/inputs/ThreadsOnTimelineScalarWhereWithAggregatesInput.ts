import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeWithAggregatesFilter} from "./DateTimeWithAggregatesFilter";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThreadsOnTimelineScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class ThreadsOnTimelineScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: ThreadsOnTimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    threadId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    timelineId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    })
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
