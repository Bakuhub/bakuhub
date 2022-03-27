import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutSessionsInput} from "./UserCreateOrConnectWithoutSessionsInput";
import {UserCreateWithoutSessionsInput} from "./UserCreateWithoutSessionsInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSessionsInput", {
    isAbstract: true
})
export class UserCreateNestedOneWithoutSessionsInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput, {
        nullable: true
    })
    create?: UserCreateWithoutSessionsInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionsInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;

    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    })
    connect?: UserWhereUniqueInput | undefined;
}
