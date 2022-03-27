import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnTimelinesAvgOrderByAggregateInput} from "./TagsOnTimelinesAvgOrderByAggregateInput";
import {TagsOnTimelinesCountOrderByAggregateInput} from "./TagsOnTimelinesCountOrderByAggregateInput";
import {TagsOnTimelinesMaxOrderByAggregateInput} from "./TagsOnTimelinesMaxOrderByAggregateInput";
import {TagsOnTimelinesMinOrderByAggregateInput} from "./TagsOnTimelinesMinOrderByAggregateInput";
import {TagsOnTimelinesSumOrderByAggregateInput} from "./TagsOnTimelinesSumOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOnTimelinesOrderByWithAggregationInput", {
    isAbstract: true
})
export class TagsOnTimelinesOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    tagId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    timelineId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: TagsOnTimelinesCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesAvgOrderByAggregateInput, {
        nullable: true
    })
    _avg?: TagsOnTimelinesAvgOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: TagsOnTimelinesMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: TagsOnTimelinesMinOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesSumOrderByAggregateInput, {
        nullable: true
    })
    _sum?: TagsOnTimelinesSumOrderByAggregateInput | undefined;
}
