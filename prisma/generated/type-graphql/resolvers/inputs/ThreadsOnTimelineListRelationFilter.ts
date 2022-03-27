import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnTimelineWhereInput} from "./ThreadsOnTimelineWhereInput";

@TypeGraphQL.InputType("ThreadsOnTimelineListRelationFilter", {
    isAbstract: true
})
export class ThreadsOnTimelineListRelationFilter {
    @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
        nullable: true
    })
    every?: ThreadsOnTimelineWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
        nullable: true
    })
    some?: ThreadsOnTimelineWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
        nullable: true
    })
    none?: ThreadsOnTimelineWhereInput | undefined;
}
