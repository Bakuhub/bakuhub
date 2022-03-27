import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {EnumMergeRequestStatusFieldUpdateOperationsInput} from "./EnumMergeRequestStatusFieldUpdateOperationsInput";
import {NullableStringFieldUpdateOperationsInput} from "./NullableStringFieldUpdateOperationsInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MergeRequestUpdateManyMutationInput", {
    isAbstract: true
})
export class MergeRequestUpdateManyMutationInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    title?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    description?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput, {
        nullable: true
    })
    status?: EnumMergeRequestStatusFieldUpdateOperationsInput | undefined;
}
