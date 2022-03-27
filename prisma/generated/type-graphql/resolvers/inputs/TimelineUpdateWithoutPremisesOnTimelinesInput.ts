import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {TagsOnTimelinesUpdateManyWithoutTimelineInput} from "./TagsOnTimelinesUpdateManyWithoutTimelineInput";
import {ThreadsOnTimelineUpdateManyWithoutTimelineInput} from "./ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import {UserUpdateOneRequiredWithoutTimelineInput} from "./UserUpdateOneRequiredWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineUpdateWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class TimelineUpdateWithoutPremisesOnTimelinesInput {
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

    @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    })
    tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;
}
