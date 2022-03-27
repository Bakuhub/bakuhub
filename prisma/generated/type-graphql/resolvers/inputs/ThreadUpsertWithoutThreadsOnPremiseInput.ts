import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutThreadsOnPremiseInput} from "./ThreadCreateWithoutThreadsOnPremiseInput";
import {ThreadUpdateWithoutThreadsOnPremiseInput} from "./ThreadUpdateWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadUpsertWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    update!: ThreadUpdateWithoutThreadsOnPremiseInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutThreadsOnPremiseInput;
}
