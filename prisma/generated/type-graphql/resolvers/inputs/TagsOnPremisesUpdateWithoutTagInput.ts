import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutTagsOnPremisesInput} from "./PremiseUpdateOneRequiredWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateWithoutTagInput", {
    isAbstract: true
})
export class TagsOnPremisesUpdateWithoutTagInput {
    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutTagsOnPremisesInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
