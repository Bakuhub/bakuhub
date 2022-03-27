import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutPremiseInput} from "./UserCreateOrConnectWithoutPremiseInput";
import {UserCreateWithoutPremiseInput} from "./UserCreateWithoutPremiseInput";
import {UserUpdateWithoutPremiseInput} from "./UserUpdateWithoutPremiseInput";
import {UserUpsertWithoutPremiseInput} from "./UserUpsertWithoutPremiseInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutPremiseInput", {
    isAbstract: true
})
export class UserUpdateOneWithoutPremiseInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutPremiseInput, {
        nullable: true
    })
    create?: UserCreateWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremiseInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => UserUpsertWithoutPremiseInput, {
        nullable: true
    })
    upsert?: UserUpsertWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    disconnect?: boolean | undefined;

    @TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    })
    delete?: boolean | undefined;

    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    })
    connect?: UserWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateWithoutPremiseInput, {
        nullable: true
    })
    update?: UserUpdateWithoutPremiseInput | undefined;
}
