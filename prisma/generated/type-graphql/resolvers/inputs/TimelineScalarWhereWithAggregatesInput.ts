import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("TimelineScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class TimelineScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [TimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: TimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: TimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: TimelineScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    id?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    title?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    description?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    status?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    authorId?: StringWithAggregatesFilter | undefined;
}
