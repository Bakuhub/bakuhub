import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateOrConnectWithoutThreadsOnVisionInput} from "./ThreadCreateOrConnectWithoutThreadsOnVisionInput";
import {ThreadCreateWithoutThreadsOnVisionInput} from "./ThreadCreateWithoutThreadsOnVisionInput";
import {ThreadUpdateWithoutThreadsOnVisionInput} from "./ThreadUpdateWithoutThreadsOnVisionInput";
import {ThreadUpsertWithoutThreadsOnVisionInput} from "./ThreadUpsertWithoutThreadsOnVisionInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class ThreadUpdateOneRequiredWithoutThreadsOnVisionInput {
    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: true
    })
    create?: ThreadCreateWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnVisionInput, {
        nullable: true
    })
    upsert?: ThreadUpsertWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnVisionInput, {
        nullable: true
    })
    update?: ThreadUpdateWithoutThreadsOnVisionInput | undefined;
}
