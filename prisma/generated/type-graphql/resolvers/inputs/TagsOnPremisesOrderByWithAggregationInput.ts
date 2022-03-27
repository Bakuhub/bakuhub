import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesAvgOrderByAggregateInput} from "./TagsOnPremisesAvgOrderByAggregateInput";
import {TagsOnPremisesCountOrderByAggregateInput} from "./TagsOnPremisesCountOrderByAggregateInput";
import {TagsOnPremisesMaxOrderByAggregateInput} from "./TagsOnPremisesMaxOrderByAggregateInput";
import {TagsOnPremisesMinOrderByAggregateInput} from "./TagsOnPremisesMinOrderByAggregateInput";
import {TagsOnPremisesSumOrderByAggregateInput} from "./TagsOnPremisesSumOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOnPremisesOrderByWithAggregationInput", {
    isAbstract: true
})
export class TagsOnPremisesOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    tagId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    premiseId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: TagsOnPremisesCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesAvgOrderByAggregateInput, {
        nullable: true
    })
    _avg?: TagsOnPremisesAvgOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: TagsOnPremisesMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: TagsOnPremisesMinOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesSumOrderByAggregateInput, {
        nullable: true
    })
    _sum?: TagsOnPremisesSumOrderByAggregateInput | undefined;
}
