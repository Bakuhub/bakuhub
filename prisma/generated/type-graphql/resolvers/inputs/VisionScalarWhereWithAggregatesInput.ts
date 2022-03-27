import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {BoolWithAggregatesFilter} from "./BoolWithAggregatesFilter";
import {DateTimeNullableWithAggregatesFilter} from "./DateTimeNullableWithAggregatesFilter";
import {DateTimeWithAggregatesFilter} from "./DateTimeWithAggregatesFilter";
import {StringNullableWithAggregatesFilter} from "./StringNullableWithAggregatesFilter";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("VisionScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class VisionScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: VisionScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: VisionScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: VisionScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    id?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    title?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
        nullable: true
    })
    activityDate?: DateTimeNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
        nullable: true
    })
    description?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
        nullable: true
    })
    createdAt?: DateTimeWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
        nullable: true
    })
    reference?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
        nullable: true
    })
    authorId?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
        nullable: true
    })
    thumbnail?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    premiseId?: StringWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
        nullable: true
    })
    draftMode?: BoolWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
        nullable: true
    })
    prevVisionId?: StringNullableWithAggregatesFilter | undefined;
}
