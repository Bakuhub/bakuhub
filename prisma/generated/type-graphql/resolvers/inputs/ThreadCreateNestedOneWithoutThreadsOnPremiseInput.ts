import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateOrConnectWithoutThreadsOnPremiseInput} from "./ThreadCreateOrConnectWithoutThreadsOnPremiseInput";
import {ThreadCreateWithoutThreadsOnPremiseInput} from "./ThreadCreateWithoutThreadsOnPremiseInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadCreateNestedOneWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    create?: ThreadCreateWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput | undefined;
}
