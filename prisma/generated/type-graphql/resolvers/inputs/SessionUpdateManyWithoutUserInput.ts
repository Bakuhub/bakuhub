import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {SessionCreateManyUserInputEnvelope} from "./SessionCreateManyUserInputEnvelope";
import {SessionCreateOrConnectWithoutUserInput} from "./SessionCreateOrConnectWithoutUserInput";
import {SessionCreateWithoutUserInput} from "./SessionCreateWithoutUserInput";
import {SessionScalarWhereInput} from "./SessionScalarWhereInput";
import {SessionUpdateManyWithWhereWithoutUserInput} from "./SessionUpdateManyWithWhereWithoutUserInput";
import {SessionUpdateWithWhereUniqueWithoutUserInput} from "./SessionUpdateWithWhereUniqueWithoutUserInput";
import {SessionUpsertWithWhereUniqueWithoutUserInput} from "./SessionUpsertWithWhereUniqueWithoutUserInput";
import {SessionWhereUniqueInput} from "./SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateManyWithoutUserInput", {
    isAbstract: true
})
export class SessionUpdateManyWithoutUserInput {
    @TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput], {
        nullable: true
    })
    create?: SessionCreateWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput], {
        nullable: true
    })
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    })
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope, {
        nullable: true
    })
    createMany?: SessionCreateManyUserInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
        nullable: true
    })
    set?: SessionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
        nullable: true
    })
    disconnect?: SessionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
        nullable: true
    })
    delete?: SessionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
        nullable: true
    })
    connect?: SessionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    })
    update?: SessionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    })
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
        nullable: true
    })
    deleteMany?: SessionScalarWhereInput[] | undefined;
}
