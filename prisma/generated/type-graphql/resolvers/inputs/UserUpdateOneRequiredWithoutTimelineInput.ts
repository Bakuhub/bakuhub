import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {UserCreateOrConnectWithoutTimelineInput} from "./UserCreateOrConnectWithoutTimelineInput";
import {UserCreateWithoutTimelineInput} from "./UserCreateWithoutTimelineInput";
import {UserUpdateWithoutTimelineInput} from "./UserUpdateWithoutTimelineInput";
import {UserUpsertWithoutTimelineInput} from "./UserUpsertWithoutTimelineInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTimelineInput", {
    isAbstract: true
})
export class UserUpdateOneRequiredWithoutTimelineInput {
    @TypeGraphQL.Field(_type => UserCreateWithoutTimelineInput, {
        nullable: true
    })
    create?: UserCreateWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelineInput, {
        nullable: true
    })
    connectOrCreate?: UserCreateOrConnectWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => UserUpsertWithoutTimelineInput, {
        nullable: true
    })
    upsert?: UserUpsertWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
        nullable: true
    })
    connect?: UserWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateWithoutTimelineInput, {
        nullable: true
    })
    update?: UserUpdateWithoutTimelineInput | undefined;
}
