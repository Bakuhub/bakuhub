import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionWhereInput} from "./ThreadsOnVisionWhereInput";

@TypeGraphQL.InputType("ThreadsOnVisionListRelationFilter", {
    isAbstract: true
})
export class ThreadsOnVisionListRelationFilter {
    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
        nullable: true
    })
    every?: ThreadsOnVisionWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
        nullable: true
    })
    some?: ThreadsOnVisionWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
        nullable: true
    })
    none?: ThreadsOnVisionWhereInput | undefined;
}
