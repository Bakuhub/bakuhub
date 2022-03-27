import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeWithAggregatesFilter} from "./DateTimeWithAggregatesFilter";
import {IntWithAggregatesFilter} from "./IntWithAggregatesFilter";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("TagsOnTimelinesScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class TagsOnTimelinesScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: TagsOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
        nullable: true
    })
    tagId?: IntWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    timelineId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    })
    assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
