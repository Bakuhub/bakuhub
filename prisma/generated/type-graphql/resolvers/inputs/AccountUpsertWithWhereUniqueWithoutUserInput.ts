import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {AccountCreateWithoutUserInput} from "./AccountCreateWithoutUserInput";
import {AccountUpdateWithoutUserInput} from "./AccountUpdateWithoutUserInput";
import {AccountWhereUniqueInput} from "./AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUserInput", {
    isAbstract: true
})
export class AccountUpsertWithWhereUniqueWithoutUserInput {
    @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
        nullable: false
    })
    where!: AccountWhereUniqueInput;

    @TypeGraphQL.Field(_type => AccountUpdateWithoutUserInput, {
        nullable: false
    })
    update!: AccountUpdateWithoutUserInput;

    @TypeGraphQL.Field(_type => AccountCreateWithoutUserInput, {
        nullable: false
    })
    create!: AccountCreateWithoutUserInput;
}
