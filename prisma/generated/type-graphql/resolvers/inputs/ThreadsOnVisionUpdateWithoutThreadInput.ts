import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {VisionUpdateOneRequiredWithoutThreadsOnVisionInput} from "./VisionUpdateOneRequiredWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateWithoutThreadInput", {
    isAbstract: true
})
export class ThreadsOnVisionUpdateWithoutThreadInput {
    @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutThreadsOnVisionInput, {
        nullable: true
    })
    vision?: VisionUpdateOneRequiredWithoutThreadsOnVisionInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
