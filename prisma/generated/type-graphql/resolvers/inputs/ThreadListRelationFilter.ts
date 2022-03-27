import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadWhereInput} from "./ThreadWhereInput";

@TypeGraphQL.InputType("ThreadListRelationFilter", {
    isAbstract: true
})
export class ThreadListRelationFilter {
    @TypeGraphQL.Field(_type => ThreadWhereInput, {
        nullable: true
    })
    every?: ThreadWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadWhereInput, {
        nullable: true
    })
    some?: ThreadWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadWhereInput, {
        nullable: true
    })
    none?: ThreadWhereInput | undefined;
}
