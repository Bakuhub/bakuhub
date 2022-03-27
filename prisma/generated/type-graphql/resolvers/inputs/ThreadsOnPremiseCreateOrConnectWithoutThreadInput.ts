import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnPremiseCreateWithoutThreadInput} from "./ThreadsOnPremiseCreateWithoutThreadInput";
import {ThreadsOnPremiseWhereUniqueInput} from "./ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateOrConnectWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnPremiseCreateOrConnectWithoutThreadInput {
    @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadsOnPremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: false
    })
    create!: ThreadsOnPremiseCreateWithoutThreadInput;
}
