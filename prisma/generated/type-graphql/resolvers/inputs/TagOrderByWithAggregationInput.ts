import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagAvgOrderByAggregateInput} from "./TagAvgOrderByAggregateInput";
import {TagCountOrderByAggregateInput} from "./TagCountOrderByAggregateInput";
import {TagMaxOrderByAggregateInput} from "./TagMaxOrderByAggregateInput";
import {TagMinOrderByAggregateInput} from "./TagMinOrderByAggregateInput";
import {TagSumOrderByAggregateInput} from "./TagSumOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOrderByWithAggregationInput", {
    isAbstract: true
})
export class TagOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    id?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    label?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => TagCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: TagCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagAvgOrderByAggregateInput, {
        nullable: true
    })
    _avg?: TagAvgOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: TagMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: TagMinOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => TagSumOrderByAggregateInput, {
        nullable: true
    })
    _sum?: TagSumOrderByAggregateInput | undefined;
}
