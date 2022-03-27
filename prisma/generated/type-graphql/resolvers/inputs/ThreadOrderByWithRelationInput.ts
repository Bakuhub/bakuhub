import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadOrderByRelationAggregateInput} from "./ThreadOrderByRelationAggregateInput";
import {ThreadsOnPremiseOrderByWithRelationInput} from "./ThreadsOnPremiseOrderByWithRelationInput";
import {ThreadsOnTimelineOrderByWithRelationInput} from "./ThreadsOnTimelineOrderByWithRelationInput";
import {ThreadsOnVisionOrderByWithRelationInput} from "./ThreadsOnVisionOrderByWithRelationInput";
import {UserOrderByWithRelationInput} from "./UserOrderByWithRelationInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadOrderByWithRelationInput", {
    isAbstract: true
})
export class ThreadOrderByWithRelationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    title?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    activityDate?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    description?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    createdAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    reference?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
        nullable: true
    })
    author?: UserOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    authorId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    parentThreadId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput, {
        nullable: true
    })
    parentThread?: ThreadOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput, {
        nullable: true
    })
    childThreads?: ThreadOrderByRelationAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseOrderByWithRelationInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineOrderByWithRelationInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineOrderByWithRelationInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionOrderByWithRelationInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionOrderByWithRelationInput | undefined;
}
