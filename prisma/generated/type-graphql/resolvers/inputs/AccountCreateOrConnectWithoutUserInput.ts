import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountCreateWithoutUserInput} from "./AccountCreateWithoutUserInput";
import {AccountWhereUniqueInput} from "./AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutUserInput", {
    isAbstract: true
})
export class AccountCreateOrConnectWithoutUserInput {
    @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
        nullable: false
    })
    where!: AccountWhereUniqueInput;

    @TypeGraphQL.Field(_type => AccountCreateWithoutUserInput, {
        nullable: false
    })
    create!: AccountCreateWithoutUserInput;
}
