import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateManyTimelineInputEnvelope} from "./PremisesOnTimelinesCreateManyTimelineInputEnvelope";
import {PremisesOnTimelinesCreateOrConnectWithoutTimelineInput} from "./PremisesOnTimelinesCreateOrConnectWithoutTimelineInput";
import {PremisesOnTimelinesCreateWithoutTimelineInput} from "./PremisesOnTimelinesCreateWithoutTimelineInput";
import {PremisesOnTimelinesScalarWhereInput} from "./PremisesOnTimelinesScalarWhereInput";
import {PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput} from "./PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import {PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput} from "./PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import {PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput} from "./PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpdateManyWithoutTimelineInput {
    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    })
    create?: PremisesOnTimelinesCreateWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    })
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    })
    upsert?: PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    })
    createMany?: PremisesOnTimelinesCreateManyTimelineInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    set?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    disconnect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    delete?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    })
    update?: PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    })
    updateMany?: PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput], {
        nullable: true
    })
    deleteMany?: PremisesOnTimelinesScalarWhereInput[] | undefined;
}
