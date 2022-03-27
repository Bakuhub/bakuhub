import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {IntFilter} from "./IntFilter";
import {StringFilter} from "./StringFilter";

@TypeGraphQL.InputType("TagsOnTimelinesScalarWhereInput", {
    isAbstract: true
})
export class TagsOnTimelinesScalarWhereInput {
    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput], {
        nullable: true
    })
    AND?: TagsOnTimelinesScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput], {
        nullable: true
    })
    OR?: TagsOnTimelinesScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput], {
        nullable: true
    })
    NOT?: TagsOnTimelinesScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
        nullable: true
    })
    tagId?: IntFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    timelineId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    assignedAt?: DateTimeFilter | undefined;
}
