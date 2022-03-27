import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateOrConnectWithoutThreadsOnPremiseInput} from "./PremiseCreateOrConnectWithoutThreadsOnPremiseInput";
import {PremiseCreateWithoutThreadsOnPremiseInput} from "./PremiseCreateWithoutThreadsOnPremiseInput";
import {PremiseUpdateWithoutThreadsOnPremiseInput} from "./PremiseUpdateWithoutThreadsOnPremiseInput";
import {PremiseUpsertWithoutThreadsOnPremiseInput} from "./PremiseUpsertWithoutThreadsOnPremiseInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput {
    @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    create?: PremiseCreateWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpsertWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    upsert?: PremiseUpsertWithoutThreadsOnPremiseInput | undefined;

    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadsOnPremiseInput, {
        nullable: true
    })
    update?: PremiseUpdateWithoutThreadsOnPremiseInput | undefined;
}
