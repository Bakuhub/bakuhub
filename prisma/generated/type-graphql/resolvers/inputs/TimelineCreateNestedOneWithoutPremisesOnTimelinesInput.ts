import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateOrConnectWithoutPremisesOnTimelinesInput} from "./TimelineCreateOrConnectWithoutPremisesOnTimelinesInput";
import {TimelineCreateWithoutPremisesOnTimelinesInput} from "./TimelineCreateWithoutPremisesOnTimelinesInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class TimelineCreateNestedOneWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    create?: TimelineCreateWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput | undefined;
}
