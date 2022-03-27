import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../scalars";
import {PremisesOnTimelines} from "./PremisesOnTimelines";
import {TagsOnTimelines} from "./TagsOnTimelines";
import {ThreadsOnTimeline} from "./ThreadsOnTimeline";
import {User} from "./User";
import {TimelineCount} from "../resolvers/outputs/TimelineCount";

@TypeGraphQL.ObjectType("Timeline", {
    isAbstract: true
})
export class Timeline {
    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    id!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    title!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    description!: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    status!: string;

    author?: User;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    authorId!: string;

    premisesOnTimelines?: PremisesOnTimelines[];

    tagsOnTimelines?: TagsOnTimelines[];

    threadsOnTimeline?: ThreadsOnTimeline[];

    @TypeGraphQL.Field(_type => TimelineCount, {
        nullable: true
    })
    _count?: TimelineCount | null;
}
