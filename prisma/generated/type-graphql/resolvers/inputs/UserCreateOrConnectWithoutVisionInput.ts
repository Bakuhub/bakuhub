import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateWithoutVisionInput} from "./UserCreateWithoutVisionInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutVisionInput", {
    isAbstract: true
})
export class UserCreateOrConnectWithoutVisionInput {
    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: false
    })
    where!: UserWhereUniqueInput;

    @TypeGraphQL.Field(_type => UserCreateWithoutVisionInput, {
        nullable: false
    })
    create!: UserCreateWithoutVisionInput;
}
