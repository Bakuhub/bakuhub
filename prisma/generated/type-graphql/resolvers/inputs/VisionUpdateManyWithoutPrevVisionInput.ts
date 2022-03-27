import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateManyPrevVisionInputEnvelope} from "./VisionCreateManyPrevVisionInputEnvelope";
import {VisionCreateOrConnectWithoutPrevVisionInput} from "./VisionCreateOrConnectWithoutPrevVisionInput";
import {VisionCreateWithoutPrevVisionInput} from "./VisionCreateWithoutPrevVisionInput";
import {VisionScalarWhereInput} from "./VisionScalarWhereInput";
import {VisionUpdateManyWithWhereWithoutPrevVisionInput} from "./VisionUpdateManyWithWhereWithoutPrevVisionInput";
import {VisionUpdateWithWhereUniqueWithoutPrevVisionInput} from "./VisionUpdateWithWhereUniqueWithoutPrevVisionInput";
import {VisionUpsertWithWhereUniqueWithoutPrevVisionInput} from "./VisionUpsertWithWhereUniqueWithoutPrevVisionInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutPrevVisionInput", {
    isAbstract: true
})
export class VisionUpdateManyWithoutPrevVisionInput {
    @TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput], {
        nullable: true
    })
    create?: VisionCreateWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput], {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPrevVisionInput], {
        nullable: true
    })
    upsert?: VisionUpsertWithWhereUniqueWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope, {
        nullable: true
    })
    createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
        nullable: true
    })
    set?: VisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
        nullable: true
    })
    disconnect?: VisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
        nullable: true
    })
    delete?: VisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
        nullable: true
    })
    connect?: VisionWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPrevVisionInput], {
        nullable: true
    })
    update?: VisionUpdateWithWhereUniqueWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPrevVisionInput], {
        nullable: true
    })
    updateMany?: VisionUpdateManyWithWhereWithoutPrevVisionInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
        nullable: true
    })
    deleteMany?: VisionScalarWhereInput[] | undefined;
}
