import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountCreateManyUserInputEnvelope} from "./AccountCreateManyUserInputEnvelope";
import {AccountCreateOrConnectWithoutUserInput} from "./AccountCreateOrConnectWithoutUserInput";
import {AccountCreateWithoutUserInput} from "./AccountCreateWithoutUserInput";
import {AccountScalarWhereInput} from "./AccountScalarWhereInput";
import {AccountUpdateManyWithWhereWithoutUserInput} from "./AccountUpdateManyWithWhereWithoutUserInput";
import {AccountUpdateWithWhereUniqueWithoutUserInput} from "./AccountUpdateWithWhereUniqueWithoutUserInput";
import {AccountUpsertWithWhereUniqueWithoutUserInput} from "./AccountUpsertWithWhereUniqueWithoutUserInput";
import {AccountWhereUniqueInput} from "./AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateManyWithoutUserInput", {
    isAbstract: true
})
export class AccountUpdateManyWithoutUserInput {
    @TypeGraphQL.Field(_type => [AccountCreateWithoutUserInput], {
        nullable: true
    })
    create?: AccountCreateWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUserInput], {
        nullable: true
    })
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    })
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => AccountCreateManyUserInputEnvelope, {
        nullable: true
    })
    createMany?: AccountCreateManyUserInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [AccountWhereUniqueInput], {
        nullable: true
    })
    set?: AccountWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountWhereUniqueInput], {
        nullable: true
    })
    disconnect?: AccountWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountWhereUniqueInput], {
        nullable: true
    })
    delete?: AccountWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountWhereUniqueInput], {
        nullable: true
    })
    connect?: AccountWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    })
    update?: AccountUpdateWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    })
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountScalarWhereInput], {
        nullable: true
    })
    deleteMany?: AccountScalarWhereInput[] | undefined;
}
