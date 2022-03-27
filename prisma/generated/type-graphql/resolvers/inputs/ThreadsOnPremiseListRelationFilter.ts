import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseWhereInput} from "./ThreadsOnPremiseWhereInput";

@TypeGraphQL.InputType("ThreadsOnPremiseListRelationFilter", {
    isAbstract: true
})
export class ThreadsOnPremiseListRelationFilter {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
        nullable: true
    })
    every?: ThreadsOnPremiseWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
        nullable: true
    })
    some?: ThreadsOnPremiseWhereInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
        nullable: true
    })
    none?: ThreadsOnPremiseWhereInput | undefined;
}
