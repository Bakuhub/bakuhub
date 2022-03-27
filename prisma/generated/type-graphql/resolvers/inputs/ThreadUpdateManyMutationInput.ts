import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {NullableDateTimeFieldUpdateOperationsInput} from "./NullableDateTimeFieldUpdateOperationsInput";
import {NullableStringFieldUpdateOperationsInput} from "./NullableStringFieldUpdateOperationsInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ThreadUpdateManyMutationInput", {
    isAbstract: true
})
export class ThreadUpdateManyMutationInput {
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
}
