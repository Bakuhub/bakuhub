import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {IntFilter} from "./IntFilter";
import {PremiseRelationFilter} from "./PremiseRelationFilter";
import {StringFilter} from "./StringFilter";
import {TagRelationFilter} from "./TagRelationFilter";

@TypeGraphQL.InputType("TagsOnPremisesWhereInput", {
    isAbstract: true
})
export class TagsOnPremisesWhereInput {
    @TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput], {
        nullable: true
    })
    AND?: TagsOnPremisesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput], {
        nullable: true
    })
    OR?: TagsOnPremisesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput], {
        nullable: true
    })
    NOT?: TagsOnPremisesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => TagRelationFilter, {
        nullable: true
    })
    tag?: TagRelationFilter | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    })
    tagId?: IntFilter | undefined;

    @TypeGraphQL.Field(_type => PremiseRelationFilter, {
        nullable: true
    })
    premise?: PremiseRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    premiseId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    assignedAt?: DateTimeFilter | undefined;
}
