import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput} from "./PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpdateWithoutTimelineInput {
    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
