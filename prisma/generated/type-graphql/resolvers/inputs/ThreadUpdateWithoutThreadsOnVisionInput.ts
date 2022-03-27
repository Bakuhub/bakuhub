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
import {ThreadsOnPremiseUpdateOneWithoutThreadInput} from "./ThreadsOnPremiseUpdateOneWithoutThreadInput";
import {ThreadsOnTimelineUpdateOneWithoutThreadInput} from "./ThreadsOnTimelineUpdateOneWithoutThreadInput";
import {UserUpdateOneWithoutThreadInput} from "./UserUpdateOneWithoutThreadInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutThreadsOnVisionInput", {
    isAbstract: true
})
export class ThreadUpdateWithoutThreadsOnVisionInput {
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

    @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseUpdateOneWithoutThreadInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput, {
        nullable: true
    })
    threadsOnTimeline?: ThreadsOnTimelineUpdateOneWithoutThreadInput | undefined;
}
