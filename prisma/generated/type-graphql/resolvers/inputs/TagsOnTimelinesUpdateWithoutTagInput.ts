import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput} from "./TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateWithoutTagInput", {
    isAbstract: true
})
export class TagsOnTimelinesUpdateWithoutTagInput {
    @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    timeline?: TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
