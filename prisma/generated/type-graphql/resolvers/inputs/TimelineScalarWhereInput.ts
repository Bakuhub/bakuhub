import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {StringFilter} from "./StringFilter";

@TypeGraphQL.InputType("TimelineScalarWhereInput", {
    isAbstract: true
})
export class TimelineScalarWhereInput {
    @TypeGraphQL.Field(_type => [TimelineScalarWhereInput], {
        nullable: true
    })
    AND?: TimelineScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineScalarWhereInput], {
        nullable: true
    })
    OR?: TimelineScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [TimelineScalarWhereInput], {
        nullable: true
    })
    NOT?: TimelineScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    id?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    title?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    description?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    status?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    authorId?: StringFilter | undefined;
}
