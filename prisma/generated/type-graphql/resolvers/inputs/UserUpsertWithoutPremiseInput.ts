import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateWithoutPremiseInput} from "./UserCreateWithoutPremiseInput";
import {UserUpdateWithoutPremiseInput} from "./UserUpdateWithoutPremiseInput";

@TypeGraphQL.InputType("UserUpsertWithoutPremiseInput", {
    isAbstract: true
})
export class UserUpsertWithoutPremiseInput {
    @TypeGraphQL.Field(_type => UserUpdateWithoutPremiseInput, {
        nullable: false
    })
    update!: UserUpdateWithoutPremiseInput;

    @TypeGraphQL.Field(_type => UserCreateWithoutPremiseInput, {
        nullable: false
    })
    create!: UserCreateWithoutPremiseInput;
}
