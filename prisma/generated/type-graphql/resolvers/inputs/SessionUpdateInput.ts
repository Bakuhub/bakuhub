import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {UserUpdateOneRequiredWithoutSessionsInput} from "./UserUpdateOneRequiredWithoutSessionsInput";

@TypeGraphQL.InputType("SessionUpdateInput", {
    isAbstract: true
})
export class SessionUpdateInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    sessionToken?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    expires?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSessionsInput, {
        nullable: true
    })
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
}
