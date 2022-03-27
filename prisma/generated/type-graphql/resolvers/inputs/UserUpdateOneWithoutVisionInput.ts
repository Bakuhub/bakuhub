import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutVisionInput} from "./UserCreateOrConnectWithoutVisionInput";
import {UserCreateWithoutVisionInput} from "./UserCreateWithoutVisionInput";
import {UserUpdateWithoutVisionInput} from "./UserUpdateWithoutVisionInput";
import {UserUpsertWithoutVisionInput} from "./UserUpsertWithoutVisionInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutVisionInput", {
    isAbstract: true
})
export class UserUpdateOneWithoutVisionInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutVisionInput, {
        nullable: true
    })
    create?: UserCreateWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => UserUpsertWithoutVisionInput, {
        nullable: true
    })
    upsert?: UserUpsertWithoutVisionInput | undefined;

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

    @TypeGraphQL.Field(_type => UserUpdateWithoutVisionInput, {
        nullable: true
    })
    update?: UserUpdateWithoutVisionInput | undefined;
}
