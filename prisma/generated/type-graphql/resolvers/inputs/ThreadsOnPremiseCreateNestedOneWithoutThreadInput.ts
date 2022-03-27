import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseCreateOrConnectWithoutThreadInput} from "./ThreadsOnPremiseCreateOrConnectWithoutThreadInput";
import {ThreadsOnPremiseCreateWithoutThreadInput} from "./ThreadsOnPremiseCreateWithoutThreadInput";
import {ThreadsOnPremiseWhereUniqueInput} from "./ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateNestedOneWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnPremiseCreateNestedOneWithoutThreadInput {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: true
    })
    create?: ThreadsOnPremiseCreateWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateOrConnectWithoutThreadInput, {
        nullable: true
    })
    connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: ThreadsOnPremiseWhereUniqueInput | undefined;
}
