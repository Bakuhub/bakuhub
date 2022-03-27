import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateNestedOneWithoutThreadsOnPremiseInput} from "./ThreadCreateNestedOneWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateWithoutPremiseInput", {
    isAbstract: true
})
export class ThreadsOnPremiseCreateWithoutPremiseInput {
    @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    thread!: ThreadCreateNestedOneWithoutThreadsOnPremiseInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
