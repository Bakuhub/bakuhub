import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput} from "./ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput";
import {TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput} from "./TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateInput", {
    isAbstract: true
})
export class ThreadsOnTimelineUpdateInput {
    @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    })
    thread?: ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput, {
        nullable: true
    })
    timeline?: TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
