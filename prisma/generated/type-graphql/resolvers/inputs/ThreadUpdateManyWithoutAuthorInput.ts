import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadCreateManyAuthorInputEnvelope} from "./ThreadCreateManyAuthorInputEnvelope";
import {ThreadCreateOrConnectWithoutAuthorInput} from "./ThreadCreateOrConnectWithoutAuthorInput";
import {ThreadCreateWithoutAuthorInput} from "./ThreadCreateWithoutAuthorInput";
import {ThreadScalarWhereInput} from "./ThreadScalarWhereInput";
import {ThreadUpdateManyWithWhereWithoutAuthorInput} from "./ThreadUpdateManyWithWhereWithoutAuthorInput";
import {ThreadUpdateWithWhereUniqueWithoutAuthorInput} from "./ThreadUpdateWithWhereUniqueWithoutAuthorInput";
import {ThreadUpsertWithWhereUniqueWithoutAuthorInput} from "./ThreadUpsertWithWhereUniqueWithoutAuthorInput";
import {ThreadWhereUniqueInput} from "./ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithoutAuthorInput", {
    isAbstract: true
})
export class ThreadUpdateManyWithoutAuthorInput {
    @TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput], {
        nullable: true
    })
    create?: ThreadCreateWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput], {
        nullable: true
    })
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    set?: ThreadWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    disconnect?: ThreadWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    delete?: ThreadWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    })
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    })
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
        nullable: true
    })
    deleteMany?: ThreadScalarWhereInput[] | undefined;
}
