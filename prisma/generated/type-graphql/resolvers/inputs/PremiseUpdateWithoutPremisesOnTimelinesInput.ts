import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {DateTimeFieldUpdateOperationsInput} from "./DateTimeFieldUpdateOperationsInput";
import {EnumPremiseStatusFieldUpdateOperationsInput} from "./EnumPremiseStatusFieldUpdateOperationsInput";
import {StringFieldUpdateOperationsInput} from "./StringFieldUpdateOperationsInput";
import {TagsOnPremisesUpdateManyWithoutPremiseInput} from "./TagsOnPremisesUpdateManyWithoutPremiseInput";
import {ThreadsOnPremiseUpdateManyWithoutPremiseInput} from "./ThreadsOnPremiseUpdateManyWithoutPremiseInput";
import {UserUpdateOneWithoutPremiseInput} from "./UserUpdateOneWithoutPremiseInput";
import {VisionUpdateManyWithoutPremiseInput} from "./VisionUpdateManyWithoutPremiseInput";

@TypeGraphQL.InputType("PremiseUpdateWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class PremiseUpdateWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    id?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true
    })
    title?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
        nullable: true
    })
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput, {
        nullable: true
    })
    status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateOneWithoutPremiseInput, {
        nullable: true
    })
    author?: UserUpdateOneWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    vision?: VisionUpdateManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;

    @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
        nullable: true
    })
    threadsOnPremise?: ThreadsOnPremiseUpdateManyWithoutPremiseInput | undefined;
}
