import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutSessionsInput} from "./UserCreateOrConnectWithoutSessionsInput";
import {UserCreateWithoutSessionsInput} from "./UserCreateWithoutSessionsInput";
import {UserUpdateWithoutSessionsInput} from "./UserUpdateWithoutSessionsInput";
import {UserUpsertWithoutSessionsInput} from "./UserUpsertWithoutSessionsInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSessionsInput", {
    isAbstract: true
})
export class UserUpdateOneRequiredWithoutSessionsInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput, {
        nullable: true
    })
    create?: UserCreateWithoutSessionsInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionsInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;

    @TypeGraphQL.Field(_type => UserUpsertWithoutSessionsInput, {
        nullable: true
    })
    upsert?: UserUpsertWithoutSessionsInput | undefined;

    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    })
    connect?: UserWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateWithoutSessionsInput, {
        nullable: true
    })
    update?: UserUpdateWithoutSessionsInput | undefined;
}
