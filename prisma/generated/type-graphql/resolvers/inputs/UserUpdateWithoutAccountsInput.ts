import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {NullableDateTimeFieldUpdateOperationsInput} from "./NullableDateTimeFieldUpdateOperationsInput";
import {NullableStringFieldUpdateOperationsInput} from "./NullableStringFieldUpdateOperationsInput";
import {PremiseUpdateManyWithoutAuthorInput} from "./PremiseUpdateManyWithoutAuthorInput";
import {SessionUpdateManyWithoutUserInput} from "./SessionUpdateManyWithoutUserInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {ThreadUpdateManyWithoutAuthorInput} from "./ThreadUpdateManyWithoutAuthorInput";
import {TimelineUpdateManyWithoutAuthorInput} from "./TimelineUpdateManyWithoutAuthorInput";
import {VisionUpdateManyWithoutAuthorInput} from "./VisionUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserUpdateWithoutAccountsInput", {
    isAbstract: true
})
export class UserUpdateWithoutAccountsInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    name?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    email?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
        nullable: true
    })
    image?: NullableStringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput, {
        nullable: true
    })
    sessions?: SessionUpdateManyWithoutUserInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput, {
        nullable: true
    })
    premise?: PremiseUpdateManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput, {
        nullable: true
    })
    thread?: ThreadUpdateManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput, {
        nullable: true
    })
    vision?: VisionUpdateManyWithoutAuthorInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput, {
        nullable: true
    })
    timeline?: TimelineUpdateManyWithoutAuthorInput | undefined;
}
