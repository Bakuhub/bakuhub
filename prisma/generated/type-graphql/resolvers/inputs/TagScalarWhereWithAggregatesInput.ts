import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {IntWithAggregatesFilter} from "./IntWithAggregatesFilter";
import {StringWithAggregatesFilter} from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("TagScalarWhereWithAggregatesInput", {
    isAbstract: true
})
export class TagScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput], {
        nullable: true
    })
    AND?: TagScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput], {
        nullable: true
    })
    OR?: TagScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagScalarWhereWithAggregatesInput], {
        nullable: true
    })
    NOT?: TagScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
        nullable: true
    })
    id?: IntWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
        nullable: true
    })
    label?: StringWithAggregatesFilter | undefined;
}
