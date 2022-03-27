import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateWithoutThreadsOnVisionInput} from "./ThreadCreateWithoutThreadsOnVisionInput";
import {ThreadUpdateWithoutThreadsOnVisionInput} from "./ThreadUpdateWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class ThreadUpsertWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    update!: ThreadUpdateWithoutThreadsOnVisionInput;

    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: false
    })
    create!: ThreadCreateWithoutThreadsOnVisionInput;
}
