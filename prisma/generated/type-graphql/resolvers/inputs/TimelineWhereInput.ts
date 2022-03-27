import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesListRelationFilter} from "./PremisesOnTimelinesListRelationFilter";
import {StringFilter} from "./StringFilter";
import {TagsOnTimelinesListRelationFilter} from "./TagsOnTimelinesListRelationFilter";
import {ThreadsOnTimelineListRelationFilter} from "./ThreadsOnTimelineListRelationFilter";
import {UserRelationFilter} from "./UserRelationFilter";

@TypeGraphQL.InputType("TimelineWhereInput", {
    isAbstract: true
})
export class TimelineWhereInput {
    @TypeGraphQL.Field(_type => [TimelineWhereInput], {
        nullable: true
    })
    AND?: TimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineWhereInput], {
        nullable: true
    })
    OR?: TimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineWhereInput], {
        nullable: true
    })
    NOT?: TimelineWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    id?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    title?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    description?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    status?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => UserRelationFilter, {
        nullable: true
    })
    author?: UserRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    authorId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesListRelationFilter, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesListRelationFilter, {
        nullable: true
    })
    tagsOnTimelines?: TagsOnTimelinesListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineListRelationFilter, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineListRelationFilter | undefined;
}
