import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput} from "./PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput";
import {TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput} from "./TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateInput", {
    isAbstract: true
})
export class PremisesOnTimelinesUpdateInput {
    @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    timeline?: TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
