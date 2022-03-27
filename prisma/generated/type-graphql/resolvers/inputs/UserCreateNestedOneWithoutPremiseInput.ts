import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutPremiseInput} from "./UserCreateOrConnectWithoutPremiseInput";
import {UserCreateWithoutPremiseInput} from "./UserCreateWithoutPremiseInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPremiseInput", {
    isAbstract: true
})
export class UserCreateNestedOneWithoutPremiseInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutPremiseInput, {
        nullable: true
    })
    create?: UserCreateWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremiseInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    })
    connect?: UserWhereUniqueInput | undefined;
}
