import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutChildThreadsInput} from "./ThreadCreateWithoutChildThreadsInput";
import {ThreadUpdateWithoutChildThreadsInput} from "./ThreadUpdateWithoutChildThreadsInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutChildThreadsInput", {
    isAbstract: true
})
export class ThreadUpsertWithoutChildThreadsInput {
    @TypeGraphQL.Field(_type => ThreadUpdateWithoutChildThreadsInput, {
        nullable: false
    })
    update!: ThreadUpdateWithoutChildThreadsInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutChildThreadsInput;
}
