import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {IntFilter} from "./IntFilter";
import {StringFilter} from "./StringFilter";
import {TagsOnPremisesListRelationFilter} from "./TagsOnPremisesListRelationFilter";
import {TagsOnTimelinesListRelationFilter} from "./TagsOnTimelinesListRelationFilter";

@TypeGraphQL.InputType("TagWhereInput", {
    isAbstract: true
})
export class TagWhereInput {
    @TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    })
    AND?: TagWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    })
    OR?: TagWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    })
    NOT?: TagWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    })
    id?: IntFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    label?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesListRelationFilter, {
        nullable: true
    })
    tagsOnPremises?: TagsOnPremisesListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => TagsOnTimelinesListRelationFilter, {
        nullable: true
    })
    tagsOnTimelines?: TagsOnTimelinesListRelationFilter | undefined;
}
