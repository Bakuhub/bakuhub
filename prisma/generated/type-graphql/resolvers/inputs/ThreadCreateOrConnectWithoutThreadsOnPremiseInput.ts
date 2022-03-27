import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutThreadsOnPremiseInput} from "./ThreadCreateWithoutThreadsOnPremiseInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadCreateOrConnectWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutThreadsOnPremiseInput;
}
