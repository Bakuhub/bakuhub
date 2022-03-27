import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesUpdateWithoutTimelineInput} from "./PremisesOnTimelinesUpdateWithoutTimelineInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
    @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    })
    where!: PremisesOnTimelinesWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutTimelineInput, {
        nullable: false
    })
    data!: PremisesOnTimelinesUpdateWithoutTimelineInput;
}
