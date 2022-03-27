import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateNestedOneWithoutPremisesOnTimelinesInput} from "./PremiseCreateNestedOneWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesCreateWithoutTimelineInput {
    @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutPremisesOnTimelinesInput, {
        nullable: false
    })
    premise!: PremiseCreateNestedOneWithoutPremisesOnTimelinesInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
