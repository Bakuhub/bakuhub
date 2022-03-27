import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountCreateManyUserInputEnvelope} from "./AccountCreateManyUserInputEnvelope";
import {AccountCreateOrConnectWithoutUserInput} from "./AccountCreateOrConnectWithoutUserInput";
import {AccountCreateWithoutUserInput} from "./AccountCreateWithoutUserInput";
import {AccountWhereUniqueInput} from "./AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedManyWithoutUserInput", {
    isAbstract: true
})
export class AccountCreateNestedManyWithoutUserInput {
    @TypeGraphQL.Field(_type => [AccountCreateWithoutUserInput], {
        nullable: true
    })
    create?: AccountCreateWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUserInput], {
        nullable: true
    })
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => AccountCreateManyUserInputEnvelope, {
        nullable: true
    })
    createMany?: AccountCreateManyUserInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [AccountWhereUniqueInput], {
        nullable: true
    })
    connect?: AccountWhereUniqueInput[] | undefined;
}
