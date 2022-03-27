import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineCountOrderByAggregateInput} from "./ThreadsOnTimelineCountOrderByAggregateInput";
import {ThreadsOnTimelineMaxOrderByAggregateInput} from "./ThreadsOnTimelineMaxOrderByAggregateInput";
import {ThreadsOnTimelineMinOrderByAggregateInput} from "./ThreadsOnTimelineMinOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnTimelineOrderByWithAggregationInput", {
    isAbstract: true
})
export class ThreadsOnTimelineOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    threadId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    timelineId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: ThreadsOnTimelineCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: ThreadsOnTimelineMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: ThreadsOnTimelineMinOrderByAggregateInput | undefined;
}
