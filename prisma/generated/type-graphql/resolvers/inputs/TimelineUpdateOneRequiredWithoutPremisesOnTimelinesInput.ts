import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateOrConnectWithoutPremisesOnTimelinesInput} from "./TimelineCreateOrConnectWithoutPremisesOnTimelinesInput";
import {TimelineCreateWithoutPremisesOnTimelinesInput} from "./TimelineCreateWithoutPremisesOnTimelinesInput";
import {TimelineUpdateWithoutPremisesOnTimelinesInput} from "./TimelineUpdateWithoutPremisesOnTimelinesInput";
import {TimelineUpsertWithoutPremisesOnTimelinesInput} from "./TimelineUpsertWithoutPremisesOnTimelinesInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    create?: TimelineCreateWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpsertWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    upsert?: TimelineUpsertWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpdateWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    update?: TimelineUpdateWithoutPremisesOnTimelinesInput | undefined;
}
