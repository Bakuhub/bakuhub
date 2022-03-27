import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutThreadsOnVisionInput} from "./ThreadCreateWithoutThreadsOnVisionInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class ThreadCreateOrConnectWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutThreadsOnVisionInput;
}
