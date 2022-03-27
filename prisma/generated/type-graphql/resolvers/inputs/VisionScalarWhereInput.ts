import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {BoolFilter} from "./BoolFilter";
import {DateTimeFilter} from "./DateTimeFilter";
import {DateTimeNullableFilter} from "./DateTimeNullableFilter";
import {StringFilter} from "./StringFilter";
import {StringNullableFilter} from "./StringNullableFilter";

@TypeGraphQL.InputType("VisionScalarWhereInput", {
    isAbstract: true
})
export class VisionScalarWhereInput {
    @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
        nullable: true
    })
    AND?: VisionScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
        nullable: true
    })
    OR?: VisionScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
        nullable: true
    })
    NOT?: VisionScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    id?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    title?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
        nullable: true
    })
    activityDate?: DateTimeNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    description?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    createdAt?: DateTimeFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    reference?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    authorId?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    thumbnail?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    premiseId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => BoolFilter, {
        nullable: true
    })
    draftMode?: BoolFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    prevVisionId?: StringNullableFilter | undefined;
}
