import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountListRelationFilter} from "./AccountListRelationFilter";
import {DateTimeNullableFilter} from "./DateTimeNullableFilter";
import {PremiseListRelationFilter} from "./PremiseListRelationFilter";
import {SessionListRelationFilter} from "./SessionListRelationFilter";
import {StringFilter} from "./StringFilter";
import {StringNullableFilter} from "./StringNullableFilter";
import {ThreadListRelationFilter} from "./ThreadListRelationFilter";
import {TimelineListRelationFilter} from "./TimelineListRelationFilter";
import {VisionListRelationFilter} from "./VisionListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
    isAbstract: true
})
export class UserWhereInput {
    @TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    })
    AND?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    })
    OR?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    })
    NOT?: UserWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    id?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    name?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    email?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
        nullable: true
    })
    emailVerified?: DateTimeNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
        nullable: true
    })
    image?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => AccountListRelationFilter, {
        nullable: true
    })
    accounts?: AccountListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => SessionListRelationFilter, {
        nullable: true
    })
    sessions?: SessionListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => PremiseListRelationFilter, {
        nullable: true
    })
    premise?: PremiseListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => ThreadListRelationFilter, {
        nullable: true
    })
    thread?: ThreadListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => VisionListRelationFilter, {
        nullable: true
    })
    vision?: VisionListRelationFilter | undefined;

    @TypeGraphQL.Field(_type => TimelineListRelationFilter, {
        nullable: true
    })
    timeline?: TimelineListRelationFilter | undefined;
}
