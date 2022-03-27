import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateWithoutAccountsInput} from "./UserCreateWithoutAccountsInput";
import {UserUpdateWithoutAccountsInput} from "./UserUpdateWithoutAccountsInput";

@TypeGraphQL.InputType("UserUpsertWithoutAccountsInput", {
    isAbstract: true
})
export class UserUpsertWithoutAccountsInput {
    @TypeGraphQL.Field(_type => UserUpdateWithoutAccountsInput, {
        nullable: false
    })
    update!: UserUpdateWithoutAccountsInput;

    @TypeGraphQL.Field(_type => UserCreateWithoutAccountsInput, {
        nullable: false
    })
    create!: UserCreateWithoutAccountsInput;
}
