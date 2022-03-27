import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {BoolFilter} from "./BoolFilter";
import {DateTimeFilter} from "./DateTimeFilter";
import {DateTimeNullableFilter} from "./DateTimeNullableFilter";
import {MergeRequestRelationFilter} from "./MergeRequestRelationFilter";
import {PremiseRelationFilter} from "./PremiseRelationFilter";
import {StringFilter} from "./StringFilter";
import {StringNullableFilter} from "./StringNullableFilter";
import {ThreadsOnVisionListRelationFilter} from "./ThreadsOnVisionListRelationFilter";
import {UserRelationFilter} from "./UserRelationFilter";
import {VisionListRelationFilter} from "./VisionListRelationFilter";
import {VisionRelationFilter} from "./VisionRelationFilter";

@TypeGraphQL.InputType("VisionWhereInput", {
    isAbstract: true
})
export class VisionWhereInput {
    @TypeGraphQL.Field(_type => [VisionWhereInput], {
        nullable: true
    })
    AND?: VisionWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereInput], {
        nullable: true
    })
    OR?: VisionWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereInput], {
        nullable: true
    })
    NOT?: VisionWhereInput[] | undefined;

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

    @TypeGraphQL.Field(_type => UserRelationFilter, {
        nullable: true
    })
    author?: UserRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    authorId?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => PremiseRelationFilter, {
        nullable: true
    })
    premise?: PremiseRelationFilter | undefined;

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

    @TypeGraphQL.Field(_type => VisionRelationFilter, {
        nullable: true
    })
    prevVision?: VisionRelationFilter | undefined;

    @TypeGraphQL.Field(_type => VisionListRelationFilter, {
        nullable: true
    })
    nextVision?: VisionListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionListRelationFilter, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => MergeRequestRelationFilter, {
        nullable: true
    })
    mergeRequest?: MergeRequestRelationFilter | undefined;
}
