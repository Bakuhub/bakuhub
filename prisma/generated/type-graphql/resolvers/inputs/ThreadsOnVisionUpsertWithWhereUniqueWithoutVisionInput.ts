import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionCreateWithoutVisionInput} from "./ThreadsOnVisionCreateWithoutVisionInput";
import {ThreadsOnVisionUpdateWithoutVisionInput} from "./ThreadsOnVisionUpdateWithoutVisionInput";
import {ThreadsOnVisionWhereUniqueInput} from "./ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput", {
    isAbstract: true
})
export class ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput {
    @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
        nullable: false
    })
    where!: ThreadsOnVisionWhereUniqueInput;

    @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutVisionInput, {
        nullable: false
    })
    update!: ThreadsOnVisionUpdateWithoutVisionInput;

    @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutVisionInput, {
        nullable: false
    })
    create!: ThreadsOnVisionCreateWithoutVisionInput;
}
