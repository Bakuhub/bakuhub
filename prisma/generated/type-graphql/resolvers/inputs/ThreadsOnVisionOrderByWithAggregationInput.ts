import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionCountOrderByAggregateInput} from "./ThreadsOnVisionCountOrderByAggregateInput";
import {ThreadsOnVisionMaxOrderByAggregateInput} from "./ThreadsOnVisionMaxOrderByAggregateInput";
import {ThreadsOnVisionMinOrderByAggregateInput} from "./ThreadsOnVisionMinOrderByAggregateInput";
import {SortOrder} from "../../enums/SortOrder";

@TypeGraphQL.InputType("ThreadsOnVisionOrderByWithAggregationInput", {
    isAbstract: true
})
export class ThreadsOnVisionOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    threadId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    visionId?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
        nullable: true
    })
    assignedAt?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionCountOrderByAggregateInput, {
        nullable: true
    })
    _count?: ThreadsOnVisionCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionMaxOrderByAggregateInput, {
        nullable: true
    })
    _max?: ThreadsOnVisionMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionMinOrderByAggregateInput, {
        nullable: true
    })
    _min?: ThreadsOnVisionMinOrderByAggregateInput | undefined;
}
