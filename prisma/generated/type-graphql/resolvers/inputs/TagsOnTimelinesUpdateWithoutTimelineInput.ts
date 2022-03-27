import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {TagUpdateOneRequiredWithoutTagsOnTimelinesInput} from "./TagUpdateOneRequiredWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateWithoutTimelineInput", {
    isAbstract: true
})
export class TagsOnTimelinesUpdateWithoutTimelineInput {
    @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    tag?: TagUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
