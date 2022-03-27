import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionWhereInput} from "./VisionWhereInput";

@TypeGraphQL.InputType("VisionListRelationFilter", {
    isAbstract: true
})
export class VisionListRelationFilter {
    @TypeGraphQL.Field(_type => VisionWhereInput, {
        nullable: true
    })
    every?: VisionWhereInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereInput, {
        nullable: true
    })
    some?: VisionWhereInput | undefined;

    @TypeGraphQL.Field(_type => VisionWhereInput, {
        nullable: true
    })
    none?: VisionWhereInput | undefined;
}
