import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadOrderByWithRelationInput} from "./ThreadOrderByWithRelationInput";
import {TimelineOrderByWithRelationInput} from "./TimelineOrderByWithRelationInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnTimelineOrderByWithRelationInput", {
    isAbstract: true
})
export class ThreadsOnTimelineOrderByWithRelationInput {
    @TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput, {
        nullable: true
    })
    thread?: ThreadOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    threadId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput, {
        nullable: true
    })
    timeline?: TimelineOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    timelineId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;
}
