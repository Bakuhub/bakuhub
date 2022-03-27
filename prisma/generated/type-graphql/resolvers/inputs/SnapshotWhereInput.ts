import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {StringFilter} from "./StringFilter";

@TypeGraphQL.InputType("SnapshotWhereInput", {
    isAbstract: true
})
export class SnapshotWhereInput {
    @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
        nullable: true
    })
    AND?: SnapshotWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
        nullable: true
    })
    OR?: SnapshotWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
        nullable: true
    })
    NOT?: SnapshotWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    id?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeFilter, {
        nullable: true
    })
    createdAt?: DateTimeFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    versionId?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    url?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    sourceUrl?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    caption?: StringFilter | undefined;
}
