import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {ThreadsOnVisionCreateManyVisionInputEnvelope} from "./ThreadsOnVisionCreateManyVisionInputEnvelope";
import {ThreadsOnVisionCreateOrConnectWithoutVisionInput} from "./ThreadsOnVisionCreateOrConnectWithoutVisionInput";
import {ThreadsOnVisionCreateWithoutVisionInput} from "./ThreadsOnVisionCreateWithoutVisionInput";
import {ThreadsOnVisionScalarWhereInput} from "./ThreadsOnVisionScalarWhereInput";
import {ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput} from "./ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput";
import {ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput} from "./ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput";
import {ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput} from "./ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput";
import {ThreadsOnVisionWhereUniqueInput} from "./ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateManyWithoutVisionInput", {
    isAbstract: true
})
export class ThreadsOnVisionUpdateManyWithoutVisionInput {
    @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateWithoutVisionInput], {
        nullable: true
    })
    create?: ThreadsOnVisionCreateWithoutVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateOrConnectWithoutVisionInput], {
        nullable: true
    })
    connectOrCreate?: ThreadsOnVisionCreateOrConnectWithoutVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    })
    upsert?: ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionCreateManyVisionInputEnvelope, {
        nullable: true
    })
    createMany?: ThreadsOnVisionCreateManyVisionInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    })
    set?: ThreadsOnVisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    })
    disconnect?: ThreadsOnVisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    })
    delete?: ThreadsOnVisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    })
    connect?: ThreadsOnVisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    })
    update?: ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    })
    updateMany?: ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput], {
        nullable: true
    })
    deleteMany?: ThreadsOnVisionScalarWhereInput[] | undefined;
}
