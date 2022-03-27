import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesUpdateManyWithoutTimelineInput} from "./PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {ThreadsOnTimelineUpdateManyWithoutTimelineInput} from "./ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import {UserUpdateOneRequiredWithoutTimelineInput} from "./UserUpdateOneRequiredWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineUpdateWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TimelineUpdateWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    title?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    description?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    status?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelineInput, {
        nullable: true
    })
    author?: UserUpdateOneRequiredWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    })
    premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
}
