import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateOrConnectWithoutThreadsOnPremiseInput} from "./ThreadCreateOrConnectWithoutThreadsOnPremiseInput";
import {ThreadCreateWithoutThreadsOnPremiseInput} from "./ThreadCreateWithoutThreadsOnPremiseInput";
import {ThreadUpdateWithoutThreadsOnPremiseInput} from "./ThreadUpdateWithoutThreadsOnPremiseInput";
import {ThreadUpsertWithoutThreadsOnPremiseInput} from "./ThreadUpsertWithoutThreadsOnPremiseInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadUpdateOneRequiredWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    create?: ThreadCreateWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    upsert?: ThreadUpsertWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    update?: ThreadUpdateWithoutThreadsOnPremiseInput | undefined;
}
