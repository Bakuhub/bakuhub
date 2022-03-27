import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFilter} from "./DateTimeFilter";
import {PremiseRelationFilter} from "./PremiseRelationFilter";
import {StringFilter} from "./StringFilter";
import {ThreadRelationFilter} from "./ThreadRelationFilter";

@TypeGraphQL.InputType("ThreadsOnPremiseWhereInput", {
    isAbstract: true
})
export class ThreadsOnPremiseWhereInput {
    @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput], {
        nullable: true
    })
    AND?: ThreadsOnPremiseWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput], {
        nullable: true
    })
    OR?: ThreadsOnPremiseWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput], {
        nullable: true
    })
    NOT?: ThreadsOnPremiseWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadRelationFilter, {
        nullable: true
    })
    thread?: ThreadRelationFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true
    })
    threadId?: StringFilter | undefined;

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
