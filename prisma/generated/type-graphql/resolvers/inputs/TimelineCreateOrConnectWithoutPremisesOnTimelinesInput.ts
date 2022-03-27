import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateWithoutPremisesOnTimelinesInput} from "./TimelineCreateWithoutPremisesOnTimelinesInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class TimelineCreateOrConnectWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: false
    })
    where!: TimelineWhereUniqueInput;

    @TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    })
    create!: TimelineCreateWithoutPremisesOnTimelinesInput;
}
