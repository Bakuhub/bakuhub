import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {TagUpdateOneRequiredWithoutTagsOnTimelinesInput} from "./TagUpdateOneRequiredWithoutTagsOnTimelinesInput";
import {TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput} from "./TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateInput", {
    isAbstract: true
})
export class TagsOnTimelinesUpdateInput {
    @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    tag?: TagUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    timeline?: TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
