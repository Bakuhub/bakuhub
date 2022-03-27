import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionWhereInput} from "./ThreadsOnVisionWhereInput";

@TypeGraphQL.InputType("ThreadsOnVisionRelationFilter", {
    isAbstract: true
})
export class ThreadsOnVisionRelationFilter {
    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
        nullable: true
    })
    is?: ThreadsOnVisionWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
        nullable: true
    })
    isNot?: ThreadsOnVisionWhereInput | undefined;
}
