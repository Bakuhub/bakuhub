import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {DateTimeNullableFilter} from "./DateTimeNullableFilter";
import {StringFilter} from "./StringFilter";
import {StringNullableFilter} from "./StringNullableFilter";
import {ThreadListRelationFilter} from "./ThreadListRelationFilter";
import {ThreadRelationFilter} from "./ThreadRelationFilter";
import {ThreadsOnPremiseRelationFilter} from "./ThreadsOnPremiseRelationFilter";
import {ThreadsOnTimelineRelationFilter} from "./ThreadsOnTimelineRelationFilter";
import {ThreadsOnVisionRelationFilter} from "./ThreadsOnVisionRelationFilter";
import {UserRelationFilter} from "./UserRelationFilter";

@TypeGraphQL.InputType("ThreadWhereInput", {
    isAbstract: true
})
export class ThreadWhereInput {
    @TypeGraphQL.Field(_type => [ThreadWhereInput], {
        nullable: true
    })
    AND?: ThreadWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereInput], {
        nullable: true
    })
    OR?: ThreadWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereInput], {
        nullable: true
    })
    NOT?: ThreadWhereInput[] | undefined;

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

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    parentThreadId?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadRelationFilter, {
        nullable: true
    })
    parentThread?: ThreadRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadListRelationFilter, {
        nullable: true
    })
    childThreads?: ThreadListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseRelationFilter, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineRelationFilter, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionRelationFilter, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionRelationFilter | undefined;
}
