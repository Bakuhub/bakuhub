import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {BoolFieldUpdateOperationsInput} from "./BoolFieldUpdateOperationsInput";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {MergeRequestUpdateOneWithoutVisionInput} from "./MergeRequestUpdateOneWithoutVisionInput";
import {NullableDateTimeFieldUpdateOperationsInput} from "./NullableDateTimeFieldUpdateOperationsInput";
import {NullableStringFieldUpdateOperationsInput} from "./NullableStringFieldUpdateOperationsInput";
import {PremiseUpdateOneRequiredWithoutVisionInput} from "./PremiseUpdateOneRequiredWithoutVisionInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {ThreadsOnVisionUpdateManyWithoutVisionInput} from "./ThreadsOnVisionUpdateManyWithoutVisionInput";
import {VisionUpdateManyWithoutPrevVisionInput} from "./VisionUpdateManyWithoutPrevVisionInput";
import {VisionUpdateOneWithoutNextVisionInput} from "./VisionUpdateOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionUpdateWithoutAuthorInput", {
    isAbstract: true
})
export class VisionUpdateWithoutAuthorInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    title?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    description?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    reference?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput, {
        nullable: true
    })
    premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
        nullable: true
    })
    draftMode?: BoolFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionInput, {
        nullable: true
    })
    prevVision?: VisionUpdateOneWithoutNextVisionInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput, {
        nullable: true
    })
    nextVision?: VisionUpdateManyWithoutPrevVisionInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;

    @TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput, {
        nullable: true
    })
    mergeRequest?: MergeRequestUpdateOneWithoutVisionInput | undefined;
}
