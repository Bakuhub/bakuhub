import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {VisionCreateManyPremiseInputEnvelope} from "./VisionCreateManyPremiseInputEnvelope";
import {VisionCreateOrConnectWithoutPremiseInput} from "./VisionCreateOrConnectWithoutPremiseInput";
import {VisionCreateWithoutPremiseInput} from "./VisionCreateWithoutPremiseInput";
import {VisionScalarWhereInput} from "./VisionScalarWhereInput";
import {VisionUpdateManyWithWhereWithoutPremiseInput} from "./VisionUpdateManyWithWhereWithoutPremiseInput";
import {VisionUpdateWithWhereUniqueWithoutPremiseInput} from "./VisionUpdateWithWhereUniqueWithoutPremiseInput";
import {VisionUpsertWithWhereUniqueWithoutPremiseInput} from "./VisionUpsertWithWhereUniqueWithoutPremiseInput";
import {VisionWhereUniqueInput} from "./VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutPremiseInput", {
    isAbstract: true
})
export class VisionUpdateManyWithoutPremiseInput {
    @TypeGraphQL.Field(_type => [VisionCreateWithoutPremiseInput], {
        nullable: true
    })
    create?: VisionCreateWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPremiseInput], {
        nullable: true
    })
    connectOrCreate?: VisionCreateOrConnectWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    })
    upsert?: VisionUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => VisionCreateManyPremiseInputEnvelope, {
        nullable: true
    })
    createMany?: VisionCreateManyPremiseInputEnvelope | undefined;

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

    @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    })
    update?: VisionUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    })
    updateMany?: VisionUpdateManyWithWhereWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
        nullable: true
    })
    deleteMany?: VisionScalarWhereInput[] | undefined;
}
