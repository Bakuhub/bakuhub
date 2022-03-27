import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {StringFilter} from "./StringFilter";
import {ThreadRelationFilter} from "./ThreadRelationFilter";
import {TimelineRelationFilter} from "./TimelineRelationFilter";

@TypeGraphQL.InputType("ThreadsOnTimelineWhereInput", {
    isAbstract: true
})
export class ThreadsOnTimelineWhereInput {
    @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput], {
        nullable: true
    })
    AND?: ThreadsOnTimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput], {
        nullable: true
    })
    OR?: ThreadsOnTimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput], {
        nullable: true
    })
    NOT?: ThreadsOnTimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadRelationFilter, {
        nullable: true
    })
    thread?: ThreadRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    threadId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => TimelineRelationFilter, {
        nullable: true
    })
    timeline?: TimelineRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    timelineId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    assignedAt?: DateTimeFilter | undefined;
}
