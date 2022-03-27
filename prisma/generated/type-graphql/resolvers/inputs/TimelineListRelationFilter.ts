import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineWhereInput} from "./TimelineWhereInput";

@TypeGraphQL.InputType("TimelineListRelationFilter", {
    isAbstract: true
})
export class TimelineListRelationFilter {
    @TypeGraphQL.Field(_type => TimelineWhereInput, {
        nullable: true
    })
    every?: TimelineWhereInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereInput, {
        nullable: true
    })
    some?: TimelineWhereInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereInput, {
        nullable: true
    })
    none?: TimelineWhereInput | undefined;
}
