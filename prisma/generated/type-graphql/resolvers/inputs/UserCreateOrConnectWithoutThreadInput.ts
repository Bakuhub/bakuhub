import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateWithoutThreadInput} from "./UserCreateWithoutThreadInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutThreadInput", {
    isAbstract: true
})
export class UserCreateOrConnectWithoutThreadInput {
    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: false
    })
    where!: UserWhereUniqueInput;

    @TypeGraphQL.Field(_type => UserCreateWithoutThreadInput, {
        nullable: false
    })
    create!: UserCreateWithoutThreadInput;
}
