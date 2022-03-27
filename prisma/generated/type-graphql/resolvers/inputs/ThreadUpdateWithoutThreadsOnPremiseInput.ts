import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {NullableDateTimeFieldUpdateOperationsInput} from "./NullableDateTimeFieldUpdateOperationsInput";
import {NullableStringFieldUpdateOperationsInput} from "./NullableStringFieldUpdateOperationsInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {ThreadUpdateManyWithoutParentThreadInput} from "./ThreadUpdateManyWithoutParentThreadInput";
import {ThreadUpdateOneWithoutChildThreadsInput} from "./ThreadUpdateOneWithoutChildThreadsInput";
import {ThreadsOnTimelineUpdateOneWithoutThreadInput} from "./ThreadsOnTimelineUpdateOneWithoutThreadInput";
import {ThreadsOnVisionUpdateOneWithoutThreadInput} from "./ThreadsOnVisionUpdateOneWithoutThreadInput";
import {UserUpdateOneWithoutThreadInput} from "./UserUpdateOneWithoutThreadInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutThreadsOnPremiseInput", {
    isAbstract: true
})
export class ThreadUpdateWithoutThreadsOnPremiseInput {
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

    @TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadInput, {
        nullable: true
    })
    author?: UserUpdateOneWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput, {
        nullable: true
    })
    parentThread?: ThreadUpdateOneWithoutChildThreadsInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput, {
        nullable: true
    })
    childThreads?: ThreadUpdateManyWithoutParentThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineUpdateOneWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnVision?: ThreadsOnVisionUpdateOneWithoutThreadInput | undefined;
}
